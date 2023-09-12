import React from "react";
import "./AdminProjects.css";
import AdminProjectsTable from "./AdminProjectsTable";

export default function AdminProjects() {
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
            <span className="header-count-adminprojects">10</span>
          </p>
        </div>
        <div className="box-center-adminprojects">
          <img
            src="../assets/icons8-pending-96.png"
            className="header-icon-adminprojects"
          />
          <p className="header-title-adminprojects">
            پروژ های در انتظار بررسی:
            <span className="header-count-adminprojects">20</span>
          </p>
        </div>
        <div className="box-right-adminprojects">
          <img
            src="../assets/icons8-cancel-96.png"
            className="header-icon-adminprojects"
          />
          <p className="header-title-adminprojects">
            پروژه های رد شده:
            <span className="header-count-adminprojects">30</span>
          </p>
        </div>
      </div>
      <div className="table-adminprojects">
        <AdminProjectsTable />
      </div>
    </div>
  );
}
