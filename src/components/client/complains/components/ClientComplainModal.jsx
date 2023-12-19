import { useForm } from "react-hook-form";
import { Modal } from "flowbite-react";

export default function ClientComplainModal({
  isOpen,
  closeModal,
  onSubmitClient,
  setLoading,
  reset,
  refetch,
}) {
  const {
    register,
    handleSubmit,
  } = useForm()

  const user = JSON.parse(sessionStorage.getItem('user'))

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
                <div className="col-span-6">
                  <label className="text-sm text-dark">User name</label>
                  <input
                    {...register("userName", { required: true })}
                    id="username"
                    type="text"
                    placeholder="User name"
                    className="w-full border-b-2 border-black p-2"
                    defaultValue={user.userName}
                    disabled
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
                    disabled
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
  );
}
