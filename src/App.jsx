import "./style.css";
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";

import MainPage from "./MainPage.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Blog() {
  useEffect(() => {
    window.location.href = "/blog/index.html"; // Redirect to the blog's index.html
  }, []);

  return <Navigate to='/blog/index.html' />;
}

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
          <Route path='/blog/' element={<Blog />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

root.render(<App />);
