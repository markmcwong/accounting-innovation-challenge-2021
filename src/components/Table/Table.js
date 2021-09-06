import React from "react";
import Table from "react-bootstrap/table";
import "./Table.css";
import {
  IoCheckmarkSharp,
  IoCloseSharp,
  IoWarningSharp,
} from "react-icons/io5";

const CustomTable = ({ data }) => {
  return (
    <Table responsive="sm" hover className="w-100 custom-table">
      <thead className="py-2 border-1 theme-colour">
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Contract</th>
          <th>Amount Stated</th>
          <th>Amount Found</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="border-1 theme-colour">
        {data.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.customer}</td>
            <td>{item.date}</td>
            <td>{item.contract}</td>
            <td>{item.amountStated}</td>
            <td>{item.amountFound}</td>
            <td>
              {item.status === "warning" ? (
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
