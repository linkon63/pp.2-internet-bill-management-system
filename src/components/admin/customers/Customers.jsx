import { useState } from "react";
import CustomerTable from "./components/CustomerTable";
import generatesFakeData from "../../utils/generatesFakeData";

export default function Customers() {
  const [allCustomer, setAllCustomers] = useState([...generatesFakeData[0]]);
  console.log("allCustomer", allCustomer);
  return (
    <div className="bg-gray-100 h-full mt-5">
      <div className="flex items-center ps-4 rounded ">
        <button className="bg-white text-black font-[600] rounded-lg p-2 border shadow">
          + New Customer
        </button>
      </div>
      <div className="ps-4 pe-4 mt-2">
        <CustomerTable customer={allCustomer} key={Math.random()} />
      </div>
    </div>
  );
}
