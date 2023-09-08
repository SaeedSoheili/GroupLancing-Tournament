import React from "react";
import SideBar from "./sidebar/SideBar";
import "./Panel.css";
import { Outlet } from "react-router-dom";

export default function Panel() {
  return (
    <>
      <div className="container-div-panel">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
