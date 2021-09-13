import API from "@aws-amplify/api";
import { generateAccountTransactionsFromURL } from "graphql/otherServices";
import React, { Component, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import MyDropzone from "../components/MyDropzone";
import * as mutations from "../graphql/mutations";

const Home = (props) => {
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const userId = useSelector((state) => state.userState.user.attributes.sub);

  const currentProjectId = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );
  const confirm = async () => {
    console.log("confirm");
    // console.log(file[0]);
    if (file != null) {
      setLoading(true);

      console.log("current project id " + currentProjectId);
      await generateAccountTransactionsFromURL(
        currentProjectId,
        file[0].name,
        userId
      );
      await API.graphql({
        query: mutations.updateProject,
        variables: {
          input: {
            id: currentProjectId,
            entriesURL: encodeURI(
              "https://aic2021ad68ba2274874a1f9253848fe04737bd00904-dev.s3.ap-southeast-1.amazonaws.com/" +
                "public/project/" +
                file[0].name
            ),
          },
        },
      });
      setLoading(false);
    }
    props.history.push("/Categories");
  };

  return (
    <div className="p-12 w-full h-full flex align-items-center justify-center flex-column">
      {isLoading ? (
        <div className="flex flex-col w-64 align-items-center break-words">
          {
            "Currently converting your CSV to transactions.\nThis may take a while."
          }
          <Spinner className="mt-8" animation="border" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;
