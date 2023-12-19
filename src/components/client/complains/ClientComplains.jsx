import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../config/firebase.config";
import ClientDashboardTable from "../home/components/ClientDashboardTable";
import ClientComplainModal from "./components/ClientComplainModal";

export default function ClientComplains() {
  const { reset } = useForm();
  const [states, setStates] = useState({
    complains: [],
    totalComplains: 0,
    user: {},
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const promoCode = sessionStorage.getItem("validUser").slice(0, 8);

  useEffect(() => {
    fetchComplains();
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmitComplains = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "complains"), {
        ...data,
        createAt: new Date().toLocaleDateString(),
      });
      reset();
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  const fetchComplains = async () => {
    const email = sessionStorage.getItem("email");
    const complainsRef = collection(db, "complains");
    const q = query(complainsRef, where("email", "==", email));
    const totalComplains = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      totalComplains.push(doc.data());
    });
    console.log("FetchComplains", totalComplains);
    setStates({
      ...states,
      complains: totalComplains,
      totalComplains: totalComplains.length,
    });
  };

  const refetch = () => {
    fetchComplains();
  };

  return (
    <div className="h-[100vh] bg-white">
      {/* offers section */}
      <div className="p-6 py-8  text-black">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>
                For the new customer reference using your promo code :{" "}
              </span>
              <span className="font-bold text-lg">{promoCode}</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-10 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-indigo-600 dark:text-white dark:border-gray-400"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
      <section className="px-2 dark:bg-white dark:text-black">
        <button
          onClick={toggleModal}
          className="bg-indigo-600 text-white py-2 px-4 rounded"
        >
          New Complain
        </button>
      </section>

      {/* table */}
      <div className="px-2">
        <ClientDashboardTable complains={states.complains} />
      </div>
      {/* modal open/close here */}
      <div>
        {modalOpen && (
          <ClientComplainModal
            isOpen={modalOpen}
            closeModal={toggleModal}
            loading={loading}
            setLoading={setLoading}
            reset={reset}
            refetch={refetch}
            onSubmitComplains={onSubmitComplains}
          />
        )}
      </div>
    </div>
  );
}
