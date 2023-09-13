import React, { useState, useEffect } from "react";
import "./AdminProjects.css";
import AdminProjectsTable from "./AdminProjectsTable";

export default function AdminProjects() {
  const [statusCounts, setStatusCounts] = useState({
    accepted: 0,
    pending: 0,
    declined: 0,
  });

  useEffect(() => {
    // Fetch project status counts from your API
    fetch("http://localhost:4000/getprojectsstatusadmin")
      .then((response) => response.json())
      .then((data) => {
        setStatusCounts(data);
      })
      .catch((error) => {
        console.error("Error fetching project status counts:", error);
      });
  }, []);

  return (
    <div className="adminprojects-div-container">
      <div className="header-dov-adminprojects">
        <div className="box-left-adminprojects">
          <img
            src="../assets/icons8-tick-96.png"
            className="header-icon-adminprojects"
          />
          <p className="header-title-adminprojects">
            پروژه های تایید شده:
            <span className="header-count-adminprojects">
              {statusCounts.accepted}
            </span>
          </p>
        </div>
        <div className="box-center-adminprojects">
          <img
            src="../assets/icons8-pending-96.png"
            className="header-icon-adminprojects"
          />
          <p className="header-title-adminprojects">
            پروژ های در انتظار بررسی:
            <span className="header-count-adminprojects">
              {statusCounts.pending}
            </span>
          </p>
        </div>
        <div className="box-right-adminprojects">
          <img
            src="../assets/icons8-cancel-96.png"
            className="header-icon-adminprojects"
          />
          <p className="header-title-adminprojects">
            پروژه های رد شده:
            <span className="header-count-adminprojects">
              {statusCounts.declined}
            </span>
          </p>
        </div>
      </div>
      <div className="table-adminprojects">
        <AdminProjectsTable />
      </div>
    </div>
  );
}
