import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import { db } from "../../../../config/firebase.config";
import Loading from "../../../../shared/Loading";

export function CustomerAddEditModal({
  openModal,
  setOpenModal,
  customerDefaultValue,
  onAdd,
  setRefresh,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...customerDefaultValue,
    },
  });
  const [loading, setLoading] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  const onRegistrationCustomer = async (data) => {
    console.log("Add Customers", data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "customers"), {
        ...data,
      });
      sessionStorage.setItem("validUser", docRef.id);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("password", data.password);
      onCloseModal();
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      onCloseModal();
      setLoading(false);
    }
    setRefresh(true);
  };
  const onUpdateRegisteredCustomer = async (data) => {
    console.log("Update Customers", data);
    setLoading(true);
    const customerRef = collection(db, "customers");
    const q = await query(customerRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    let id = "";
    querySnapshot.forEach((doc) => {
      id = doc.id;
    });
    if (id) {
      console.log("Update Customer", id);
      try {
        const docRef = await doc(db, "customers", id);
        await updateDoc(docRef, {
          ...data,
        });
        // console.log("Update Customer ref", docRef);
        sessionStorage.setItem("validUser", docRef.id);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("password", data.password);
        onCloseModal();
        setLoading(false);
        setRefresh(true)
      } catch (e) {
        console.error("Error adding document: ", e);
        onCloseModal();
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Customer to our NetVision
            </h3>
            {loading ? (
              <Loading />
            ) : (
              <form
                onSubmit={handleSubmit(
                  onAdd ? onRegistrationCustomer : onUpdateRegisteredCustomer
                )}
                className="py-4"
              >
                <label>Email Or User Name</label>
                <input
                  className="w-full"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="user@gmail.com"
                />{" "}
                <br />
                <label>User Name</label>
                <input
                  className="w-full"
                  type="text"
                  {...register("userName", { required: true })}
                  placeholder="your name"
                />
                <label>Internet Id</label>
                <input
                  className="w-full"
                  type="text"
                  {...register("internetID", { required: true })}
                  placeholder="internet id"
                />
                <label>Password</label>
                <input
                  className="w-full"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                />
                <label>Package : 5/10/20/30 MBPS </label>
                <input
                  className="w-full"
                  type="number"
                  {...register("package", { required: true })}
                  placeholder="Internet Package MBPS"
                />
                <label>Cost per month</label>
                <input
                  className="w-full"
                  type="number"
                  {...register("cost", { required: true })}
                  placeholder="Per month cost"
                />
                <label>Address</label>
                <input
                  className="w-full"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="address"
                />
                <br />
                <div className="w-full pt-2">
                  <Button type="submit" className="w-full">
                    Save customer
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
