import { useForm } from "react-hook-form";
import { db } from "../../config/firebase.config";

export default function AdminTechnician() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegistrationTechnician = async (data) => {
    console.log("Add Technicians", data);
    const { email } = data.email;

    const technicianRef = collection(db, "technicians");
    const q = await query(technicianRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let dbEmail = "";
    querySnapshot.forEach((doc) => {
      dbEmail = doc.email;
    });

    if (dbEmail) {
      console.log(
        "You can not create a new technician using this email address"
      );
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "technicians"), {
        ...data,
        createAt: new Date().toLocaleDateString(),
      });
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }

    // if (id) {
    //   console.log("Update Customer", id);
    //   try {
    //     const docRef = await doc(db, "customers", id);
    //     await updateDoc(docRef, {
    //       ...data,
    //     });
    //     // console.log("Update Customer ref", docRef);
    //     sessionStorage.setItem("validUser", docRef.id);
    //     sessionStorage.setItem("email", data.email);
    //     sessionStorage.setItem("password", data.password);
    //     onCloseModal();
    //     setLoading(false);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //     onCloseModal();
    //     setLoading(false);
    //   }
    // }

    // setLoading(false);
    // onCloseModal();
    // setRefresh(true);
  };
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 h-screen pt-4">
        <div className="p-2">
          <h1 className="text-lg font-bold">Technician Page</h1>
        </div>
        <div class="p-2">
          <div class="relative dark:bg-gray-800 sm:rounded-lg">
            <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div class="w-full md:w-2/2">
                <form
                  class="flex items-center"
                  onSubmit={handleSubmit(onRegistrationTechnician)}
                >
                  <label for="simple-search" class="sr-only">
                    Technician Name
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Technician Name"
                      {...register("technician_name", { required: true })}
                    />
                  </div>
                  <div className="ps-2">
                    <input
                      type="email"
                      class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                    <div class="flex items-center w-full space-x-3 md:w-auto ps-2">
                      <button
                        id="actionsDropdownButton"
                        class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="submit"
                      >
                        + Add Tech
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
