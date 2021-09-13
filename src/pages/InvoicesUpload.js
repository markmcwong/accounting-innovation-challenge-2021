import { books } from "../constants";
import {
  importInvoices,
  parseCashBook,
  parseDayBook,
} from "graphql/otherServices";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { IoCaretBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyDropzone from "../components/MyDropzone";
import Spinner from "react-bootstrap/Spinner";
import API from "@aws-amplify/api";
import * as queries from "../graphql/queries";

const InvoicesUpload = (props) => {
  const [file, setFile] = useState(null);
  const [statement, setStatement] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    "Currently matching invoices to transactions. This may take a while."
  );
  const [book, setBook] = useState(null);
  const [altId, setAltId] = useState(null);

  let { id, transId } = useParams();
  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );

  const loadAccounts = async (opposite) => {
    let filter = {
      projectID: { eq: currentProjectId },
      name: { eq: opposite },
    };
    const {
      data: {
        listAccounts: { items },
      },
    } = await API.graphql({
      query: queries.listAccounts,
      variables: { filter: filter },
    });
    setAltId(items[0].id);
  };

  useEffect(() => {
    if (id === "Bank") {
      loadAccounts("Cash");
    } else if (id === "Cash") {
      loadAccounts("Bank");
    }
  }, []);

  const confirm = async () => {
    console.log("confirm");
    const accountName = id;
    setLoading(true);
    let sum = 0;
    if (file != null && file.length > 0 && file[0].name != "") {
      await importInvoices(
        currentProjectId,
        accountName,
        file[0].name,
        props.location.state.account.id
      );
    }
    setMessage(
      "Successfully matched corresponding invoices to transactions.\nCurrently parsing respective day book. This may take a while."
    );
    if (
      book != null &&
      book.length > 0 &&
      book[0].name !== "" &&
      accountName !== "Bank" &&
      accountName !== "Cash"
    ) {
      sum = await parseDayBook(
        currentProjectId,
        accountName,
        book[0].name,
        props.location.state.account.id
      );
    }
    if (
      book != null &&
      book.length > 0 &&
      book[0].name !== "" &&
      (accountName === "Bank" || accountName === "Cash")
    ) {
      sum = await parseCashBook(
        currentProjectId,
        book[0].name,
        id !== "Bank" ? props.location.state.account.id : altId,
        id === "Bank" ? props.location.state.account.id : altId,
        id
      );
    }
    setMessage("Procses Complete.");
    setLoading(false);

    console.log(props.location.state.account);
    props.history.push({
      pathname: "/Accounts/" + props.location.state.account.name,
      // pathname: "/Accounts/" + subItem.name,
      state: {
        sales: {
          ...props.location.state.account,
          endBalance: sum === 0 ? props.location.state.account.endBalance : sum,
        },
        // category: categories[item.name],
      },
    });
  };

  return (
    <div className="py-12 w-full h-full flex align-items-center justify-center flex-column">
      <div className="cursor-pointer align-self-start flex text-xl">
        <IoCaretBack
          onClick={() => props.history.goBack()}
          className="mr-4"
          size="24"
        />
        Back
      </div>
      <div className="m-auto align-items-center flex flex-column w-4/5">
        {isLoading ? (
          <div className="flex flex-col w-64 align-items-center break-words">
            {message}
            <Spinner className="mt-8" animation="border" />
          </div>
        ) : (
          <>
            {books.includes(id) && (
              <div className="border-2 theme-colour rounded-3xl w-full mb-4">
                <div className="text-3xl pt-8">
                  Upload {id} {id !== "Cash" && "Day"} Book
                </div>
                <div className="text-sm py-2 italic">
                  Drag & Drop or Click below to upload
                  <span className="text-xl"> (.csv)</span>
                </div>
                <MyDropzone
                  className="p-5 w-100"
                  callback={setBook}
                  currentProjectId={currentProjectId}
                  file={book}
                  description="book uploaded"
                  prepend={id + "/"}
                  acceptedFormat={".csv"}
                ></MyDropzone>
              </div>
            )}
            {id !== "Bank" ? (
              <div className="border-2 theme-colour rounded-3xl w-full">
                <div className="text-3xl pt-8">Upload invoices for {id}</div>
                <div className="text-sm py-2 italic">
                  Drag & Drop or Click below to upload
                  <span className="text-xl"> (.zip)</span>
                </div>
                <MyDropzone
                  className="p-5 w-100"
                  callback={setFile}
                  currentProjectId={currentProjectId}
                  file={file}
                  description="Invoices uploaded"
                  prepend={id + "/"}
                  acceptedFormat={"application/zip"}
                ></MyDropzone>
              </div>
            ) : (
              <div className="border-2 theme-colour rounded-3xl w-full">
                <div className="text-3xl pt-8">Upload Bank Statements</div>
                <div className="text-sm py-2 italic">
                  Drag & Drop or Click below to upload
                  <span className="text-xl"> (.pdf)</span>
                </div>
                <MyDropzone
                  className="p-5 w-100"
                  callback={setStatement}
                  currentProjectId={currentProjectId}
                  file={statement}
                  description="Bank Statement uploaded"
                  prepend={id + "/"}
                  acceptedFormat={"application/pdf"}
                ></MyDropzone>
              </div>
            )}
          </>
        )}
      </div>
      <Button onClick={() => confirm()}>Confirm</Button>
    </div>
  );
};

export default InvoicesUpload;
