import { useState } from "react";
import { CustomerEditModal } from "./modals/CustomerEditModal";

export default function CustomerTable({ customer }) {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <div>
      <CustomerEditModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onCloseModal={onCloseModal}
      />
      <div className="w-12/12 h-100">
        <div className="">
          <div className="overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="w-full leading-normal">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="font-bold px-5 py-3 text-sm text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Age
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
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                </tr>
                <tbody className="h-vh">
                  {customer.length > 0 &&
                    customer.map((c) => (
                      <tr key={c.name} onClick={() => console.log("c", c)}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.name}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.age}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.address}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.createAt}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {c.status}
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
