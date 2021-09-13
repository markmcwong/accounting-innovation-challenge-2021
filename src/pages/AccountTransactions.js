import { API } from "aws-amplify";
import InvoiceTable from "components/Table/InvoiceTable";
import React, { Component, useEffect, useState } from "react";
import {
  IoCaretBack,
  IoCheckmarkSharp,
  IoCloseSharp,
  IoWarningSharp,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as queries from "../graphql/queries";

const AccountTransactions = (props) => {
  let { id, transId } = useParams();
  const [data, setData] = useState([]);
  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );

  const loadInvoices = async () => {
    const {
      data: {
        getTransaction: {
          Invoices: { items },
        },
      },
    } = await API.graphql({
      query: queries.getTransactiionInvoices,
      variables: { id: transId },
    });
    setData(items);
    console.log(items);
  };

  const confirm = async () => {
    console.log("confirm");
    // console.log(file[0]);
    // await generateAccountTransactionsFromURL(currentProjectId, file[0].name);
    props.history.push("/Categories");
  };

  useEffect(() => {
    console.log(props.location.state);
    loadInvoices();
  }, []);

  const sideColumn = () => {
    return (
      <div className="w-1/6 flex align-items-start flex-col h-full pl-8 ml-10 border-l-2">
        <div className="theme-colour text-3xl font-semibold mt-6">Amounts</div>
        <div className="flex-col align-items-start text-left flex">
          <div className="theme-colour pt-4 pb-2 font-medium">
            Amount Stated in Book
          </div>
          <div>{props.location.state.amountInGJ}</div>
        </div>
        <div className="flex-col align-items-start text-left flex">
          <div className="theme-colour pt-4 pb-2 font-medium">
            Current Amount Found
          </div>
          <div>{props.location.state.amountInInvoice ?? 0}</div>
        </div>
        <div className="flex-col align-items-start text-left flex">
          <div className="theme-colour pt-4 pb-2 font-medium">Status</div>
          {props.location.state.status === "#FF5018" ? (
            <IoCloseSharp color="#FF5018" size="24" />
          ) : props.location.state.status === "#28B22E" ? (
            <IoCheckmarkSharp color="#28B22E" size="24" />
          ) : (
            <IoWarningSharp color="#FFCC16" size="24" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 w-full h-full flex align-items-start justify-start flex-column">
      <div className="w-full flex border-b-2 pb-2 border-gray-300">
        <div className="flex align-items-center">
          <IoCaretBack
            onClick={() => props.history.goBack()}
            className="cursor-pointer mr-2"
            size="24"
          />
          <div className="text-3xl font-semibold">
            {id} - {props.location.state.index}
          </div>
        </div>
      </div>
      <div className="w-full flex align-items-start h-full">
        <div className="w-5/6 flex align-items-start flex-col mt-6">
          <div className="theme-colour text-3xl mb-3 font-semibold">
            Particulars
          </div>
          <div className="w-full flex align-items-start">
            <div className="flex-col flex justify-start text-left w-1/5">
              <div className="theme-colour font-medium">S/N</div>
              <div>{props.location.state.index}</div>
            </div>
            <div className="flex-col flex justify-start text-left">
              <div className="theme-colour font-medium">Date</div>
              <div>
                {new Date(props.location.state.date).toLocaleDateString(
                  "en-GB",
                  {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full align-items-center mb-3 pt-5 pr-6">
            <div className="theme-colour text-3xl font-semibold">Invoices</div>
            <div className="flex">
              <div className="pr-10 theme-colour">Edit</div>
              <div className="theme-colour">Download All</div>
            </div>
          </div>
          <div className="w-full">
            <InvoiceTable data={data} />
          </div>
        </div>
        {sideColumn()}
      </div>
    </div>
  );
};

export default AccountTransactions;
