import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoDocument, IoCloseCircleOutline } from "react-icons/io5";
import { Storage } from "aws-amplify";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";

export default function MyDropzone({
  children,
  className,
  callback,
  currentProjectId,
  file,
  prepend = "project/",
  description = "Accounting Entries",
  acceptedFormat = ".csv",
}) {
  // @ts-ignore
  // const uid = useSelector((state) => state.userState.user.attributes.sub);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState([]);
  const test = useSelector(
    // @ts-ignore
    (state) => state.userState.currentProject
  );

  const uploadToS3 = async (file) => {
    try {
      await Storage.put(currentProjectId + "/" + prepend + file.name, file);
      setLoading(loading.filter((item) => item !== file.name));
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      if (acceptedFiles) {
        setLoading([...loading, ...acceptedFiles.map((file) => file.name)]);
        if (Array.isArray(acceptedFiles)) {
          setSelectedFiles([...selectedFiles, ...acceptedFiles]);
          callback([...selectedFiles, ...acceptedFiles]);
        } else {
          setSelectedFiles([...selectedFiles, acceptedFiles]);
          callback([...selectedFiles, acceptedFiles]);
        }
      }
    },
    [selectedFiles, loading]
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: acceptedFormat,
  });

  useEffect(() => {
    console.log(currentProjectId);
    if (file) uploadToS3(file[file.length - 1]);
  }, [file]);

  return (
    <div
      {...getRootProps()}
      className={
        (className != null ? className + " " : "") +
        (isDragActive ? "border-2 theme-colour" : "")
      }
      onClick={(event) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
          open();
        }
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-xl theme-colour font-medium">Drop your files here</p>
      ) : (
        <p className="text-xl theme-colour font-medium">
          {selectedFiles.length === 0 && "No "} {description}
        </p>
      )}
      {children}
      {selectedFiles.length > 0 &&
        selectedFiles.map((file, index) => (
          <div
            key={index}
            className="theme-colour flex align-items-center justify-center z-1 py-2"
          >
            {loading.includes(file.name) && <Spinner animation="border" />}
            <IoDocument size="32" />
            <p className="mx-3 mb-0">{file.name}</p>
            <IoCloseCircleOutline
              size="24"
              className="cursor-pointer"
              onClick={() => {
                setSelectedFiles(selectedFiles.filter((obj) => obj !== file));
                Storage.remove(currentProjectId + "/" + prepend + file.name);
              }}
            />
          </div>
        ))}
    </div>
  );
}
