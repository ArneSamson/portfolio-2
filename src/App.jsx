import "./style.css";
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import ProjectDetailPage from "./components/ProjectDetailPage.jsx";

import MainPage from "./MainPage.jsx";

const projects = [
  {
    title: "Swear",
    description: "A sneaker configurator for shoe brand Swear London.",
    image: "/images/projects/swear.jpg",
    slug: "swear",
  },
  {
    title: "Yogism",
    description:
      "An AI-powered Yoga app that checks your posture and gives you a tailored workout.",
    image: "/images/projects/yogism.jpg",
    slug: "yogism",
  },
  // Add more projects here
];

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<p>404 Not Found</p>} />
          <Route
            path='/projects/:slug'
            element={<ProjectDetailPage projects={projects} />} // Pass projects as props
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

root.render(<App />);
