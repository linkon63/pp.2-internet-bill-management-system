import { addDoc, collection } from "firebase/firestore";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../config/firebase.config";

export function CustomerAddEditModal({
  openModal,
  setOpenModal,
  customerDefaultValue,
  onAdd,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...customerDefaultValue,
    },
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    // setEmail("");
  }

  const onRegistrationCustomer = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "customers"), {
        ...data,
      });
      console.log("Document written with ID: ", docRef);
      setLoading(false);
      sessionStorage.setItem("validUser", docRef.id);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("password", data.password);
      // navigate("/login");
      onCloseModal();
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
      onCloseModal();
    }
  };
  const onUpdateRegisteredCustomer = async (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Customer to our NetVision
            </h3>
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
              {/* <button className="reg-btn">Sign up</button> */}
            </form>
            {/* <div className="w-full">
              <Button>Log in to your account</Button>
            </div> */}
            {/* <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
