import React from "react";
import "./Users.css";
import UsersTable from "./UsersTable.js";

export default function Users() {
  return (
    <div className="container-div-users">
      <div className="table-container-div">
        <UsersTable />
      </div>
    </div>
  );
}
