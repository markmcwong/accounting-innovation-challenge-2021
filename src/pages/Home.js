import { generateAccountTransactionsFromURL } from "graphql/otherServices";
import React, { Component, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import MyDropzone from "../components/MyDropzone";

const Home = (props) => {
  const [file, setFile] = useState(null);
  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );

  const confirm = async () => {
    console.log("confirm");
    // console.log(file[0]);
    // await generateAccountTransactionsFromURL(currentProjectId, file[0].name);
    props.history.push("/Categories");
  };

  return (
    <div className="p-12 w-full h-full flex align-items-center justify-center flex-column">
      <div className="m-auto align-items-center flex flex-column w-100 h-1/2">
        <div className="text-3xl">
          Begin by uploading the company’s accounting entries
        </div>
        <div className="text-sm py-2 italic">
          Drag & Drop or Click below to upload
        </div>
        <MyDropzone
          className="p-5 w-100 h-100"
          callback={setFile}
          currentProjectId={currentProjectId}
          file={file}
        ></MyDropzone>
      </div>
      <Button onClick={() => confirm()}>Next</Button>
    </div>
  );
};

export default Home;
