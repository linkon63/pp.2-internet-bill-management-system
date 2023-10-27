import CustomerTable from "./components/CustomerTable";

export default function Customers() {
  return (
    <div className="bg-gray-100 h-full">
      <div className="bg-sky-500 h-[78px] flex items-center ps-4 rounded">
        <button className="bg-white text-black font-[600] px-8 py-3 rounded-lg">
          + New Customer
        </button>
      </div>
      <div className="ps-4 pe-4">
        <CustomerTable />
      </div>
    </div>
  );
}
