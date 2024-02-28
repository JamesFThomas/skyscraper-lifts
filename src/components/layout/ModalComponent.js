import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../styles/modalComponent.css";

const ModalComponent = ({ data }) => {
  //destructure props
  const { id, Title, Desc, List } = data;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /** 
   //TODO update component to use MUI styles components
   
   */

  return (
    <div className="modalC" style={{ maxWidth: "fit-content" }}>
      <Button variant="primary" onClick={handleShow}>
        {Title}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Desc}</Modal.Body>
        {List && (
          <ul>
            {List.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
