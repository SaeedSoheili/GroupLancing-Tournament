import React, { useState, useEffect } from "react";
import "./UserProjects.css";
import UserProjectsTable from "./UserProjectsTable";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Form, FormControl } from "react-bootstrap";

export default function UserProjects({ loggedInUserEmail }) {
  const [showModal, setShowModal] = useState(false);
  const [incomeValue, setIncomeValue] = useState(""); // State to store the income input value
  const [projectStatusCounts, setProjectStatusCounts] = useState({
    accepted: 0,
    pending: 0,
    declined: 0,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSaveProject = async () => {
    try {
      const response = await fetch("http://localhost:4000/newproject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loggedInUserEmail,
          income: incomeValue,
        }),
      });

      if (response.ok) {
        // Handle success (e.g., close the modal)
        handleClose();
        // After saving the project, update the project status counts
        updateProjectStatusCounts();
      } else {
        // Handle error (e.g., display an error message)
        console.error("Failed to save project.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Function to fetch and update project status counts
  const updateProjectStatusCounts = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/getuserprojectsstatus?email=${loggedInUserEmail}`
      );

      if (response.ok) {
        const data = await response.json();
        setProjectStatusCounts(data);
      } else {
        console.error("Failed to fetch project status counts.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch project status counts when the component mounts
  useEffect(() => {
    updateProjectStatusCounts();
  }, [loggedInUserEmail]);

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
            <span className="header-count-userprojects">
              {projectStatusCounts.accepted}
            </span>
          </p>
        </div>
        <div className="box-center-userprojects">
          <img
            src="../assets/icons8-pending-96.png"
            className="header-icon-userprojects"
          />
          <p className="header-title-userprojects">
            پروژ های در انتظار بررسی:
            <span className="header-count-userprojects">
              {projectStatusCounts.pending}
            </span>
          </p>
        </div>
        <div className="box-right-userprojects">
          <img
            src="../assets/icons8-cancel-96.png"
            className="header-icon-userprojects"
          />
          <p className="header-title-userprojects">
            پروژه های رد شده:
            <span className="header-count-userprojects">
              {projectStatusCounts.declined}
            </span>
          </p>
        </div>
      </div>
      <div className="button-create-new-project" onClick={handleShow}>
        <AddIcon fontSize="medium" />
        پروژه جدید
      </div>
      <div className="table-userprojects">
        <UserProjectsTable loggedInUserEmail={loggedInUserEmail} />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">ثبت پروژه جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="competitionName">
              <Form.Label>مقدار درآمد</Form.Label>
              <Form.Control
                type="number"
                placeholder="مقدار درآمد به دلار"
                value={incomeValue}
                onChange={(e) => setIncomeValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="primary" onClick={handleSaveProject}>
            ثبت پروژه
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
