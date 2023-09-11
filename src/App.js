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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="panel"
            element={isLogin ? <Panel /> : <Navigate to="/login" />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="users" element={<Users />} />
            <Route path="competitions" element={<Competitions />} />
          </Route>
          <Route
            path="login"
            element={<Login setIsLogin={setIsLogin} />} // Pass setIsLogin to Login component
          />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
