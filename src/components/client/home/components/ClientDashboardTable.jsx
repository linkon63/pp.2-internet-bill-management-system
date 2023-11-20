export default function ClientDashboardTable() {
  return (
    <div className="mt-2">
      <div className="container p-2 py-10 mx-auto sm:p-4 dark:text-black-100">
        <h2 className="mb-4 text-2xl font-semibold text-black">Invoices</h2>
        <div className="overflow-y-scroll">
          <table className="min-w-full text-xs ">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-white-700 border-2">
              <tr className="text-left">
                <th className="p-3 border">Invoice #</th>
                <th className="p-3 border">Client</th>
                <th className="p-3 border">Issued</th>
                <th className="p-3 border">Due</th>
                <th className="p-3 border text-right">Amount</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-white-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-400">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$15,792</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-white-900">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="dark:text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="dark:text-gray-400">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$15,792</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
