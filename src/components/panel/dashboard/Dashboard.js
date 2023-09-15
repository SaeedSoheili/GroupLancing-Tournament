import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

export default function Dashboard({ userRole, loggedInUserEmail }) {
  return (
    <>
      {userRole === "admin" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard loggedInUserEmail={loggedInUserEmail} />
      )}
    </>
  );
}
