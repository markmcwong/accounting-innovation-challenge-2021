import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const CustomModal = ({ show, handleClose, confirm }) => {
  const [projectName, setProjectName] = useState(null);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new project</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Project Name</InputGroup.Text>
          <FormControl
            placeholder="Project Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              console.log(e);
              setProjectName(e.target.value);
            }}
          />
        </InputGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={async () => {
            await confirm(projectName);
            handleClose();
          }}
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CustomModal;
