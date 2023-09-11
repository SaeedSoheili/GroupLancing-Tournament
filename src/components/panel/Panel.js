import React from "react";
import SideBar from "./sidebar/SideBar";
import "./Panel.css";
import { Outlet } from "react-router-dom";

export default function Panel({ loggedInUserName, userRole }) {
  return (
    <>
      <div className="container-div-panel">
        <SideBar loggedInUserName={loggedInUserName} userRoleMain={userRole} />
        <Outlet />
      </div>
    </>
  );
}
