import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Screens
import Landing from "./screens/Landing.jsx";
// Rutas
import Login from "./components/Elements/Login";
import Register from "./components/Elements/Register";

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </Router>
  );
}
