import React from "react";
import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function SideBar() {
  let adminsMenuItems = [
    { name: "داشبورد", icon: <DashboardIcon className="icon-sidebar" /> },
    { name: "پروژه ها", icon: <ChecklistIcon className="icon-sidebar" /> },
    { name: "کاربران", icon: <GroupIcon className="icon-sidebar" /> },
    { name: "خروج", icon: <ExitToAppIcon className="icon-sidebar" /> },
  ];
  let usersMenuItems = [
    { name: "داشبورد", icon: <DashboardIcon className="icon-sidebar" /> },
    { name: "پروژه ها", icon: <ChecklistIcon className="icon-sidebar" /> },
    { name: "خروج", icon: <ExitToAppIcon className="icon-sidebar" /> },
  ];

  return (
    <div className="container-sidebar">
      <img className="logo-sidebar" src="./assets/Logo-Tekanesh.png" />
      <p className="welcome-message-sidebar">سلام سعید ! خوش اومدی</p>
      <ul className="ul-sidebar">
        {adminsMenuItems.map((item, index) => {
          return (
            <li key={index} className="li-sidebar">
              {item.icon} {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
