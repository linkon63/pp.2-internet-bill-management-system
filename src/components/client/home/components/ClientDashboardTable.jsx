'use client';
import { Table } from 'flowbite-react';
// eslint-disable-next-line react/prop-types
export default function ClientDashboardTable({ complains }) {
  console.log(complains)
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>SL</Table.HeadCell>
          <Table.HeadCell>Customer Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          {
            // eslint-disable-next-line react/prop-types
            complains.map((item, index) =>
              <Table.Row key={index}  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {index+1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {item.firstName}  {item.lastName}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {item.email}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {item.description}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {item.city}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {item.address}
                </Table.Cell>
              </Table.Row>
            )
          }

        </Table.Body>
      </Table>
    </div>
  );
}
