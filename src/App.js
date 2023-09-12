import React, { useState } from "react";
import Home from "./components/home/Home";
import Panel from "./components/panel/Panel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/panel/Login";
import Register from "./components/panel/Register";
import Dashboard from "./components/panel/dashboard/Dashboard";
import Projects from "./components/panel/projects/Projects";
import Users from "./components/panel/users/Users";
import Competitions from "./components/panel/competitions/Competitions";

function App() {
  const [isLogin, setIsLogin] = useState(false); // Initialize isLogin to false
  const [loggedInUserName, setloggedInUserName] = useState(""); // Initialize isLogin to false
  const [loggedInUserLastName, setloggedInUserLastName] = useState(""); // Initialize isLogin to false
  const [userRole, setuserRole] = useState("user"); // Initialize isLogin to false

  let isLoginHandler = (value) => {
    setIsLogin(value);
  };

  let loggedInUserNameHandler = (value) => {
    setloggedInUserName(value);
  };

  let loggedInUserLastNameHandler = (value) => {
    setloggedInUserLastName(value);
  };

  let userRoleHandler = (value) => {
    setuserRole(value);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="panel"
            element={
              isLogin ? (
                <Panel
                  loggedInUserName={loggedInUserName}
                  userRole={userRole}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route
              path="dashboard"
              element={<Dashboard userRole={userRole} />}
            />
            <Route path="projects" element={<Projects userRole={userRole} />} />
            <Route path="users" element={<Users />} />
            <Route path="competitions" element={<Competitions />} />
          </Route>
          <Route
            path="login"
            element={
              <Login
                isLoginHandler={isLoginHandler}
                loggedInUserNameHandler={loggedInUserNameHandler}
                loggedInUserLastNameHandler={loggedInUserLastNameHandler}
                userRoleHandler={userRoleHandler}
              />
            } // Pass setIsLogin to Login component
          />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
