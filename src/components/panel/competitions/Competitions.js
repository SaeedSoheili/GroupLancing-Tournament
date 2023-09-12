import React, { useState } from "react";
import { Button, Modal, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Competitions.css";
import CompetitionsTable from "./CompetitionsTable.js";
import AddIcon from "@mui/icons-material/Add";

export default function Competitions() {
  const [showModal, setShowModal] = useState(false);
  const [competitionName, setCompetitionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [milestones, setMilestones] = useState([
    { name: "مرحله 1", value: "", enabled: false },
    { name: "مرحله 2", value: "", enabled: false },
    { name: "مرحله 3", value: "", enabled: false },
    { name: "مرحله 4", value: "", enabled: false },
    { name: "مرحله 5", value: "", enabled: false },
  ]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleMilestoneChange = (index) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index].enabled = !updatedMilestones[index].enabled;
    setMilestones(updatedMilestones);
  };

  const handleCreateCompetition = () => {
    // Filter out milestones with enabled and non-empty values
    const validMilestones = milestones.filter(
      (milestone) => milestone.enabled && milestone.value !== ""
    );

    // Prepare data for POST request
    const data = {
      competitionName,
      startDate,
      endDate,
      milestones: validMilestones,
    };

    // Perform the POST request to your API endpoint here
    fetch("http://localhost:4000/newcomp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server as needed
        console.log("Competition created successfully:", result);
        // Optionally, you can close the modal or perform other actions
        handleClose();
      })
      .catch((error) => {
        // Handle any errors that occur during the POST request
        console.error("Error creating competition:", error);
      });
  };

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
              <Form.Control
                type="text"
                placeholder="نام مسابقه"
                value={competitionName}
                onChange={(e) => setCompetitionName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>تاریخ شروع</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>تاریخ پایان</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
            <hr className="milestones-hr-comp" />
            <Form.Group
              className="milestones-form-group-comp"
              controlId="milestones"
            >
              <Form.Label className="milestones-title-comp">اهداف</Form.Label>
              {milestones.map((milestone, index) => (
                <div className="milestones-div-comp" key={index}>
                  <Form.Check
                    className="milestones-check-comp"
                    type="checkbox"
                    id={`milestone${index + 1}`}
                    checked={milestone.enabled}
                    onChange={() => handleMilestoneChange(index)}
                  />
                  <FormControl
                    className="milestones-inputs-comp"
                    type="number"
                    placeholder={`مرحله ${index + 1}`}
                    value={milestone.value}
                    onChange={(e) => {
                      const updatedMilestones = [...milestones];
                      updatedMilestones[index].value = e.target.value;
                      setMilestones(updatedMilestones);
                    }}
                    disabled={!milestone.enabled}
                  />
                </div>
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleCreateCompetition}>
            ایجاد مسابقه
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
