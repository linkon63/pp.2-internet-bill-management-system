import { useState } from "react";
import { CustomerAddEditModal } from "./modals/CustomerAddEditModal";
import Loading from "../../../shared/Loading";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { db } from "../../../config/firebase.config";

export default function CustomerTable({ customer, loading, setRefresh }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectCustomer, setSelectCustomer] = useState({});
  function onCloseModal() {
    setOpenModal(false);
    setSelectCustomer({});
  }

  const onDeleteRegisteredCustomer = async (data) => {
    console.log("Customer will deleted", data);
    if (data.admin) {
      console.log("You can not delete a admin");
      return;
    }
    const customerRef = collection(db, "customers");

    const q = await query(customerRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    let id = "";
    querySnapshot.forEach((doc) => {
      id = doc.id;
    });
    if (id) {
      console.log("id has deleted", id);
      await deleteDoc(doc(db, "customers", id));
      setRefresh(true);
    }
  };
  return (
    <div>
      <div className="w-12/12 h-80">
        <div className="">
          <div className="overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table
                className="w-full leading-normal"
                key={Math.random() + Math.random() * 100}
              >
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    SN
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    UserName
                  </th>
                  <th
                    scope="col"
                    className="font-bold px-5 py-3 text-sm text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    internetID
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Password
                  </th>
                  <th
                    scope="col"
                    className="font-bold px-5 py-3 text-sm text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Action
                  </th>
                </tr>
                <tbody className="h-vh w-full">
                  {loading && (
                    <tr className="">
                      <td className="col" colSpan="6">
                        <Loading key={Math.random()} />
                      </td>
                    </tr>
                  )}
                  {customer.length > 0 &&
                    customer.map((c, index) => (
                      <tr key={c.name + index}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {index + 1}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.userName}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.internetID}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.password}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.address}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <button
                            type="button"
                            className="px-4"
                            onClick={() => {
                              setSelectCustomer({ ...c });
                              setOpenModal(true);
                            }}
                          >
                            <svg
                              className="w-6 h-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                            >
                              <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteRegisteredCustomer(c)}
                            className=""
                          >
                            <svg
                              className="w-6 h-6 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 20"
                            >
                              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* customer add modals */}
      {openModal && (
        <CustomerAddEditModal
          key={Math.random()}
          openModal={openModal}
          setOpenModal={setOpenModal}
          onCloseModal={onCloseModal}
          onAdd={false}
          setRefresh={setRefresh}
          customerDefaultValue={{
            ...selectCustomer,
          }}
        />
      )}
    </div>
  );
}
