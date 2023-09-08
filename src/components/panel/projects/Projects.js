import React from "react";
import "./Projects.css";
import ProjectsTable from "./ProjectsTable";

export default function Projects() {
  return (
    <div className="projects-div-container">
      <div className="header-dov-projects">
        <div className="box-left-projects">
          <img
            src="../assets/icons8-tick-96.png"
            className="header-icon-projects"
          />
          <p className="header-title-projects">
            پروژه های تایید شده:
            <span className="header-count-projects">10</span>
          </p>
        </div>
        <div className="box-center-projects">
          <img
            src="../assets/icons8-pending-96.png"
            className="header-icon-projects"
          />
          <p className="header-title-projects">
            پروژ های در انتظار بررسی:
            <span className="header-count-projects">20</span>
          </p>
        </div>
        <div className="box-right-projects">
          <img
            src="../assets/icons8-cancel-96.png"
            className="header-icon-projects"
          />
          <p className="header-title-projects">
            پروژه های رد شده:
            <span className="header-count-projects">30</span>
          </p>
        </div>
      </div>
      <div className="table-projects">
        <ProjectsTable />
      </div>
    </div>
  );
}
