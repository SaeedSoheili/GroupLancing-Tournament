import React, { useState } from "react";

import "./UserProjects.css";
import UserProjectsTable from "./UserProjectsTable";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Form, FormControl } from "react-bootstrap";

export default function UserProjects() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div className="userprojects-div-container">
      <div className="header-dov-userprojects">
        <div className="box-left-userprojects">
          <img
            src="../assets/icons8-tick-96.png"
            className="header-icon-userprojects"
          />
          <p className="header-title-userprojects">
            پروژه های تایید شده:
            <span className="header-count-userprojects">10</span>
          </p>
        </div>
        <div className="box-center-userprojects">
          <img
            src="../assets/icons8-pending-96.png"
            className="header-icon-userprojects"
          />
          <p className="header-title-userprojects">
            پروژ های در انتظار بررسی:
            <span className="header-count-userprojects">20</span>
          </p>
        </div>
        <div className="box-right-userprojects">
          <img
            src="../assets/icons8-cancel-96.png"
            className="header-icon-userprojects"
          />
          <p className="header-title-userprojects">
            پروژه های رد شده:
            <span className="header-count-userprojects">30</span>
          </p>
        </div>
      </div>
      <div className="button-create-new-project" onClick={handleShow}>
        <AddIcon fontSize="medium" />
        پروژه جدید
      </div>
      <div className="table-userprojects">
        <UserProjectsTable />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">ثبت پروژه جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="competitionName">
              <Form.Label>مقدار درآمد</Form.Label>
              <Form.Control type="text" placeholder="مقدار درآمد به دلار" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ثبت پروژه
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
