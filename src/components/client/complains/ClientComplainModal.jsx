import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
// eslint-disable-next-line react/prop-types
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ClientComplainModal({
  isOpen,
  closeModal,
  onSubmitClient,
  setLoading,
  register,
  handleSubmit,
  reset,
  refetch,
}) {
  const onSubmitHandler = async (data) => {
    setLoading(true);
    try {
      await onSubmitClient(data);
      reset();
      setLoading(false);
      closeModal();
    } catch (e) {
      console.error("Error submitting data: ", e);
      setLoading(false);
    }
    refetch();
  };

  return (
    <>
      <Modal show={isOpen} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              New Complain
            </h3>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="container flex flex-col mx-auto space-y-12"
            >
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm text-dark">First name</label>
                  <input
                    {...register("firstName", { required: true })}
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm text-dark">Last name</label>
                  <input
                    {...register("lastName", { required: false })}
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-6">
                  <label className="text-sm text-dark">Email</label>
                  <input
                    defaultValue={sessionStorage.getItem("email") || ""}
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-4">
                  <label className="text-sm text-dark">Address</label>
                  <input
                    {...register("address", { required: true })}
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span sm:col-span-2">
                  <label className="text-sm text-dark">City</label>
                  <input
                    {...register("city", { required: false })}
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm text-dark">Descriptions</label>
                  <input
                    {...register("description", { required: true })}
                    type="text"
                    placeholder=""
                    className="w-full border-b-2 border-black p-2"
                  />
                </div>
                <button
                  className="login-btn bg-dark p-3 rounded-xl col-span-full hover:bg-blue-500 hover:text-white bg-gray-500 text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
    // <div className={`fixed inset-0 z-50 flex items-center justify-center ${modalDisplayStyle}`}>
    //     <div className="bg-[#5850EC] p-8 w-full max-w-md mx-auto rounded shadow-lg">
    //         <div className="flex justify-between">
    //             <h2 className="text-2xl font-bold mb-6 text-white">Submit Your Complaint</h2>
    //             <button onClick={closeModal} className="px-6 bg-blue-800 text-white rounded-xl hover:bg-blue-500">
    //                 Close
    //             </button>
    //         </div>
    //         <form
    //             onSubmit={handleSubmit(onSubmitHandler)}
    //             className="container flex flex-col mx-auto space-y-12"
    //         >
    //             <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm text-white">First name</label>
    //                     <input
    //                         {...register("firstName", { required: true })}
    //                         id="firstname"
    //                         type="text"
    //                         placeholder="First name"
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <div className="col-span-full sm:col-span-3">
    //                     <label className="text-sm text-white">Last name</label>
    //                     <input
    //                         {...register("lastName", { required: false })}
    //                         id="lastname"
    //                         type="text"
    //                         placeholder="Last name"
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <div className="col-span-6">
    //                     <label className="text-sm text-white">Email</label>
    //                     <input
    //                         defaultValue={sessionStorage.getItem("email") || ""}
    //                         {...register("email", { required: true })}
    //                         id="email"
    //                         type="email"
    //                         placeholder="Email"
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <div className="col-span-4">
    //                     <label className="text-sm text-white">Address</label>
    //                     <input
    //                         {...register("address", { required: true })}
    //                         id="address"
    //                         type="text"
    //                         placeholder=""
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <div className="col-span sm:col-span-2">
    //                     <label className="text-sm text-white">City</label>
    //                     <input
    //                         {...register("city", { required: false })}
    //                         id="city"
    //                         type="text"
    //                         placeholder=""
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <div className="col-span-full">
    //                     <label className="text-sm text-white">Descriptions</label>
    //                     <input
    //                         {...register("description", { required: true })}
    //                         type="text"
    //                         placeholder=""
    //                         className="w-full border-b-2 border-black p-2"
    //                     />
    //                 </div>
    //                 <button
    //                     className="login-btn bg-white p-3 rounded-xl col-span-full hover:bg-blue-500 hover:text-white"
    //                     type="submit"
    //                 >
    //                     Submit
    //                 </button>
    //             </div>
    //         </form>
    //     </div>
    // </div >
  );
}
