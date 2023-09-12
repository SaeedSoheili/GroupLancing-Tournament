import React from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

export default function Dashboard({ userRole }) {
  return <>{userRole === "admin" ? <AdminDashboard /> : <UserDashboard />}</>;
}
