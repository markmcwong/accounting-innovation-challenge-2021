import CustomTable from "components/Table";
import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";

const Sales = () => {
  const history = useHistory();
  const data = [
    {
      customer: "peter",
      date: "2019-01-01",
      contract: "contract1",
      amountStated: 100,
      amountFound: 1000,
      status: "pending",
    },
    {
      customer: "peter",
      date: "2019-01-01",
      contract: "contract1",
      amountStated: 100,
      amountFound: 1000,
      status: "warning",
    },
    {
      customer: "peter",
      date: "2019-01-01",
      contract: "contract1",
      amountStated: 100,
      amountFound: 1000,
      status: "matched",
    },
    {
      customer: "peter",
      date: "2019-01-01",
      contract: "contract1",
      amountStated: 100,
      amountFound: 1000,
      status: "pending",
    },
  ];

  return (
    <div className="py-8 w-full h-full flex align-items-center justify-start flex-column">
      <div className="w-full flex justify-between align-items-center border-b-2 pb-2 border-gray-300">
        <div className="flex align-items-center">
          <IoCaretBack
            onClick={() => history.goBack()}
            className="cursor-pointer mr-2"
            size="24"
          />
          <div className="text-3xl font-semibold">Sales</div>
        </div>

        <div className="text-3xl font-semibold">USD $100000</div>
      </div>
      <div className="w-full mt-4">
        <CustomTable data={data} />
      </div>
    </div>
  );
};

export default Sales;
