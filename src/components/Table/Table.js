import React from "react";
import Table from "react-bootstrap/table";
import "./Table.css";
import {
  IoCheckmarkSharp,
  IoCloseSharp,
  IoWarningSharp,
} from "react-icons/io5";

const CustomTable = ({ data, type = "Not sales", navigateCallback }) => {
  return (
    <Table responsive="sm" hover className="w-100 custom-table">
      <thead className="py-2 border-1 theme-colour">
        <tr>
          <th>#</th>
          {type == "sales" && <th>Customer</th>}
          <th>Date</th>
          {type == "sales" && <th>Contract</th>}
          <th>Amount Stated</th>
          <th>Amount Found</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="border-1 theme-colour">
        {data &&
          data.map((item, index) => (
            <tr
              key={index}
              onClick={() =>
                navigateCallback(
                  item.transaction.id,
                  index + 1,
                  item.transaction.date,
                  item.transaction.amountInGJ,
                  item.transaction.amountFound,
                  item.transaction.status
                )
              }
            >
              <td>{index + 1}</td>
              {type == "sales" && <td>{item.transaction.customer}</td>}
              <td>{item.transaction.date}</td>
              {type == "sales" && <td>{item.transaction.contract}</td>}
              <td>{item.transaction.amountInGJ}</td>
              <td>{item.transaction.amountInInvoice ?? "Unavaiable"}</td>
              <td>
                {item.transaction.status === "warning" ? (
                  <IoWarningSharp color="#FFCC16" size="24" />
                ) : item.status === "matched" ? (
                  <IoCheckmarkSharp color="#28B22E" size="24" />
                ) : (
                  <IoCloseSharp color="#FF5018" size="24" />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
