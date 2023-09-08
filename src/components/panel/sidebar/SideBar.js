import React from "react";
import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Outlet, useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const logout = () => {
    // Remove the "tekanesh_auto_login" cookie here
    document.cookie =
      "tekanesh_auto_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Navigate to the "/login" page
    navigate("/login");
  };

  let adminsMenuItems = [
    { name: "داشبورد", icon: <DashboardIcon className="icon-sidebar" /> },
    { name: "پروژه ها", icon: <ChecklistIcon className="icon-sidebar" /> },
    { name: "کاربران", icon: <GroupIcon className="icon-sidebar" /> },
    { name: "مسابقات", icon: <EmojiEventsIcon className="icon-sidebar" /> },
    {
      name: "خروج",
      icon: <ExitToAppIcon className="icon-sidebar" />,
      onClick: logout, // Add the onClick handler for logout
    },
  ];
  let usersMenuItems = [
    { name: "داشبورد", icon: <DashboardIcon className="icon-sidebar" /> },
    { name: "پروژه ها", icon: <ChecklistIcon className="icon-sidebar" /> },
    {
      name: "خروج",
      icon: <ExitToAppIcon className="icon-sidebar" />,
      onClick: logout, // Add the onClick handler for logout
    },
  ];

  return (
    <div className="container-sidebar">
      <img
        className="logo-sidebar"
        src="../assets/Logo-Tekanesh.png"
        alt="Logo"
      />
      <p className="welcome-message-sidebar">سلام سعید ! خوش اومدی</p>
      <ul className="ul-sidebar">
        {adminsMenuItems.map((item, index) => {
          return (
            <li key={index} className="li-sidebar" onClick={item.onClick}>
              {item.icon} {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
