import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Properties from "./properties";
import Projects from "./projects";
import Blogs from "./blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="appWrapper">
    <Navbar />
    <div className="appContent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
