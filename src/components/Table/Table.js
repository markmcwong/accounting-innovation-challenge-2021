import React from "react";
import Table from "react-bootstrap/Table";
import "./Table.css";
import {
  IoCheckmarkSharp,
  IoCloseSharp,
  IoWarningSharp,
} from "react-icons/io5";

const CustomTable = ({
  data,
  isBook = false,
  navigateCallback,
  isCashTable = false,
}) => {
  return (
    <Table responsive="sm" hover className="w-100 custom-table">
      <thead className="py-2 border-1 theme-colour">
        <tr>
          <th>S/N</th>
          {isBook &&
            (isCashTable ? (
              <th className="text-left w-1/4">Account</th>
            ) : (
              <th className="text-left w-1/4">Customer</th>
            ))}
          <th>Date</th>
          {isBook && !isCashTable && <th>Contract No.</th>}
          <th>Amount Stated</th>
          <th>Amount Found</th>
          {(!isBook || isCashTable) && <th>{"Debit/\nCredit"}</th>}
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="border-1 theme-colour">
        {data &&
          data.map((item, index) => (
            <tr
              className="cursor-pointer"
              key={index}
              onClick={() => {
                const status =
                  item.transaction.amountInInvoice === 0
                    ? "#FF5018"
                    : item.transaction.amountInInvoice ===
                      (item.transaction.customer == null
                        ? item.transaction.amountInGJ
                        : item.transaction.amountInBook)
                    ? "#28B22E"
                    : "#FFCC16";
                navigateCallback(
                  item.transaction.id,
                  index + 1,
                  item.transaction.date,
                  item.transaction.customer == null
                    ? item.transaction.amountInGJ
                    : item.transaction.amountInBook,
                  item.transaction.amountInInvoice,
                  status
                );
              }}
            >
              <td>{index + 1}</td>
              {isBook && (
                <td className="text-left">
                  {item.transaction.customer ?? "Cash Sales"}
                </td>
              )}
              <td>{item.transaction.date}</td>
              {isBook && !isCashTable && (
                <td>{item.transaction.contractNumber ?? "N/A"}</td>
              )}
              <td>
                {item.transaction.customer == null
                  ? item.transaction.amountInGJ
                  : item.transaction.amountInBook}
              </td>
              <td>{item.transaction.amountInInvoice ?? "Unavailable"}</td>
              {(!isBook || isCashTable) && (
                <td>{item.transaction.isDebit ? "Debit" : "Credit"}</td>
              )}
              <td>
                {item.transaction.amountInInvoice === 0 ? (
                  <IoCloseSharp color="#FF5018" size="24" />
                ) : item.transaction.amountInInvoice ===
                  (item.transaction.customer == null
                    ? item.transaction.amountInGJ
                    : item.transaction.amountInBook) ? (
                  <IoCheckmarkSharp color="#28B22E" size="24" />
                ) : (
                  <IoWarningSharp color="#FFCC16" size="24" />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
