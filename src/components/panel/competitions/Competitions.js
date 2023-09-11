import React, { useState } from "react";
import { Button, Modal, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Competitions.css";
import CompetitionsTable from "./CompetitionsTable.js";
import AddIcon from "@mui/icons-material/Add";

export default function Competitions() {
  const [showModal, setShowModal] = useState(false);
  const [milestone1Enabled, setMilestone1Enabled] = useState(false);
  const [milestone2Enabled, setMilestone2Enabled] = useState(false);
  const [milestone3Enabled, setMilestone3Enabled] = useState(false);
  const [milestone4Enabled, setMilestone4Enabled] = useState(false);
  const [milestone5Enabled, setMilestone5Enabled] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container-div-competitions">
      <div className="button-create-new-comp" onClick={handleShow}>
        <AddIcon fontSize="medium" />
        مسابقه جدید
      </div>
      <div className="table-container-competitions">
        <CompetitionsTable />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">ساخت مسابقه جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="competitionName">
              <Form.Label>نام مسابقه</Form.Label>
              <Form.Control type="text" placeholder="نام مسابقه" />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>تاریخ شروع</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>تاریخ پایان</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <hr className="milestones-hr-comp" />
            <Form.Group
              className="milestones-form-group-comp"
              controlId="milestones"
            >
              <Form.Label className="milestones-title-comp">اهداف</Form.Label>
              <div className="milestones-div-comp">
                <Form.Check
                  className="milestones-check-comp"
                  type="checkbox"
                  id="milestone1"
                  onChange={() => setMilestone1Enabled(!milestone1Enabled)}
                />
                <FormControl
                  className="milestones-inputs-comp"
                  type="number"
                  placeholder="مرحله 1"
                  disabled={!milestone1Enabled}
                />
              </div>
              <div className="milestones-div-comp">
                <Form.Check
                  className="milestones-check-comp"
                  type="checkbox"
                  id="milestone2"
                  onChange={() => setMilestone2Enabled(!milestone2Enabled)}
                />
                <FormControl
                  className="milestones-inputs-comp"
                  type="number"
                  placeholder="مرحله 2"
                  disabled={!milestone2Enabled}
                />
              </div>
              <div className="milestones-div-comp">
                <Form.Check
                  className="milestones-check-comp"
                  type="checkbox"
                  id="milestone3"
                  onChange={() => setMilestone3Enabled(!milestone3Enabled)}
                />
                <FormControl
                  className="milestones-inputs-comp"
                  type="number"
                  placeholder="مرحله 3"
                  disabled={!milestone3Enabled}
                />
              </div>
              <div className="milestones-div-comp">
                <Form.Check
                  className="milestones-check-comp"
                  type="checkbox"
                  id="milestone4"
                  onChange={() => setMilestone4Enabled(!milestone4Enabled)}
                />
                <FormControl
                  className="milestones-inputs-comp"
                  type="number"
                  placeholder="مرحله 4"
                  disabled={!milestone4Enabled}
                />
              </div>
              <div className="milestones-div-comp">
                <Form.Check
                  className="milestones-check-comp"
                  type="checkbox"
                  id="milestone5"
                  onChange={() => setMilestone5Enabled(!milestone5Enabled)}
                />
                <FormControl
                  className="milestones-inputs-comp"
                  type="number"
                  placeholder="مرحله 5"
                  disabled={!milestone5Enabled}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ایجاد مسابقه
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
