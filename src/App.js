import React, { useState } from "react";
import Home from "./components/home/Home";
import Panel from "./components/panel/Panel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/panel/Login";
import Register from "./components/panel/Register";

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
          />
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
