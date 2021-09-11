import { importInvoices } from "graphql/otherServices";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyDropzone from "../components/MyDropzone";

const InvoicesUpload = (props) => {
  const [file, setFile] = useState(null);
  let { id, transId } = useParams();
  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );

  const confirm = async () => {
    console.log("confirm");
    const accountName = id;
    if (file != null && file.length > 0 && file[0].name != "") {
      importInvoices(
        currentProjectId,
        accountName,
        file[0].name,
        props.location.state.account.id
      );
    }
    props.history.push({
      pathname: "/Accounts/" + props.location.state.account.name,
      // pathname: "/Accounts/" + subItem.name,
      state: {
        sales: props.location.state.account,
        // category: categories[item.name],
      },
    });
  };

  return (
    <div className="p-12 w-full h-full flex align-items-center justify-center flex-column">
      <div className="m-auto align-items-center flex flex-column w-100 h-1/2">
        <div className="text-3xl">Begin by uploading invoices for {id}</div>
        <div className="text-sm py-2 italic">
          Drag & Drop or Click below to upload (must be in zip format)
        </div>
        <MyDropzone
          className="p-5 w-100 h-100"
          callback={setFile}
          currentProjectId={currentProjectId}
          file={file}
          description="Invoices uploaded"
          prepend={id + "/"}
        ></MyDropzone>
      </div>
      <Button onClick={() => confirm()}>Confirm</Button>
    </div>
  );
};

export default InvoicesUpload;
