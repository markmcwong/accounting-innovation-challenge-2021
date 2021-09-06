import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import MyDropzone from "../components/MyDropzone";

export default class Home extends Component {
  render() {
    return (
      <div className="p-12 w-full h-full flex align-items-center justify-center flex-column">
        <div className="m-auto align-items-center flex flex-column w-100 h-1/2">
          <div className="text-3xl">
            Begin by uploading the company’s accounting entries
          </div>
          <div className="text-sm py-2 italic">
            Drag & Drop or Click below to upload
          </div>
          <MyDropzone className="p-5 w-100 h-100"></MyDropzone>
        </div>
        <Button onClick={() => this.props.history.push("/list")}>Next</Button>
      </div>
    );
  }
}
