import "./style.css";
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";

import MainPage from "./MainPage.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<p>404 Not Found</p>} />
          <Route
            path='/projects/:slug'
            element={<ProjectDetailPage projects={projectsData} />} // Pass projects as props
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

root.render(<App />);
