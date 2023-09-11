import React from "react";
import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Outlet, useNavigate } from "react-router-dom";

export default function SideBar({ loggedInUserName, userRoleMain }) {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const logout = () => {
    // Remove the "tekanesh_auto_login" cookie here
    document.cookie =
      "tekanesh_auto_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Navigate to the "/login" page
    navigate("/login");
  };

  const changeMenu = (menu) => {
    navigate(menu);
  };

  const adminsMenuItems = [
    {
      name: "داشبورد",
      icon: <DashboardIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/dashboard"),
    },
    {
      name: "پروژه ها",
      icon: <ChecklistIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/projects"),
    },
    {
      name: "کاربران",
      icon: <GroupIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/users"),
    },
    {
      name: "مسابقات",
      icon: <EmojiEventsIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/competitions"),
    },
    {
      name: "خروج",
      icon: <ExitToAppIcon className="icon-sidebar" />,
      onClick: logout,
    },
  ];

  const usersMenuItems = [
    {
      name: "داشبورد",
      icon: <DashboardIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/dashboard"),
    },
    {
      name: "پروژه ها",
      icon: <ChecklistIcon className="icon-sidebar" />,
      onClick: () => changeMenu("/panel/projects"),
    },
    {
      name: "خروج",
      icon: <ExitToAppIcon className="icon-sidebar" />,
      onClick: logout,
    },
  ];

  // Define menu items based on user role
  const userRole = userRoleMain; // Replace with actual user role or logic
  const menuItems = userRole === "admin" ? adminsMenuItems : usersMenuItems;
  let userFirstName = loggedInUserName;
  return (
    <div className="container-sidebar">
      <img
        className="logo-sidebar"
        src="../assets/Logo-Tekanesh.png"
        alt="Logo"
      />
      <p className="welcome-message-sidebar">
        سلام {userFirstName} ! خوش اومدی
      </p>
      <ul className="ul-sidebar">
        {menuItems.map((item, index) => {
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
