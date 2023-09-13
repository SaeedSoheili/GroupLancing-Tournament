import React from "react";
import AdminProjects from "./AdminProjects";
import UserProjects from "./UserProjects";

export default function Projects({ userRole, loggedInUserEmail }) {
  return (
    <>
      {userRole === "admin" ? (
        <AdminProjects />
      ) : (
        <UserProjects loggedInUserEmail={loggedInUserEmail} />
      )}
    </>
  );
}
