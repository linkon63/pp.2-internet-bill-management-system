import { useEffect, useState } from "react";
import CustomerTable from "./components/CustomerTable";
import generatesFakeData from "../../utils/generatesFakeData";
import { db } from "../../config/firebase.config";
import { collection, getDocs, query } from "firebase/firestore";
import { CustomerAddEditModal } from "./components/modals/CustomerAddEditModal";

export default function Customers() {
  const [states, setState] = useState({ customers: [], totalCustomers: 0 });
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fresh, setRefresh] = useState(false);
  useEffect(() => {
    fetchCustomers();
    console.log("Customer Fetch and refresh");
    setRefresh(false);
  }, [fresh]);

  const fetchCustomers = async () => {
    setLoading(true);
    // console.log("fetchCustomers");
    const email = sessionStorage.getItem("email");
    const customersRef = collection(db, "customers");
    //   const q = query(complainsRef, where("email", "==", email));
    const q = query(customersRef);
    const totalCustomers = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      totalCustomers.push(doc.data());
    });
    console.log("Customers", totalCustomers);
    setState({
      ...states,
      customers: totalCustomers,
      totalCustomers: totalCustomers.length,
    });
    setLoading(false);
  };

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <div className="bg-gray-100 h-full mt-5">
      <div className="flex items-center ps-4 rounded ">
        <button
          className="bg-white text-black font-[600] rounded-lg p-2 border shadow"
          onClick={() => setOpenModal(true)}
        >
          + New Customer
        </button>
      </div>
      <div className="ps-4 pe-4 mt-2">
        <CustomerTable
          customer={states.customers}
          key={Math.random()}
          openModal={openModal}
          setOpenModal={setOpenModal}
          loading={loading}
          setLoading={setLoading}
        />
      </div>

      {/* customer add modals */}
      <CustomerAddEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onCloseModal={onCloseModal}
        onAdd={true}
        customerDefaultValue={{
          email: "",
          userName: "",
          internetID: "",
          password: "",
          package: "",
          cost: "",
          address: "",
        }}
        setRefresh={setRefresh}
      />
    </div>
  );
}
