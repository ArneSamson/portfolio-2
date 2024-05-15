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

function BlogPost({ ext }) {
  useEffect(() => {
    window.location.href = `/blog/stage-week${ext}/index.php`;
  }, [ext]);

  return <Navigate to={`/blog/stage-week${ext}/index.php`} />;
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
          <Route
            path='/blog/stage-week1&2'
            element={<BlogPost ext={"1&2"} />}
          />
          <Route
            path='/blog/stage-week3&4'
            element={<BlogPost ext={"3&4"} />}
          />
          <Route
            path='/blog/stage-week5&6'
            element={<BlogPost ext={"5&6"} />}
          />
          <Route
            path='/blog/stage-week7&8'
            element={<BlogPost ext={"7&8"} />}
          />
          <Route
            path='/blog/stage-week9&10'
            element={<BlogPost ext={"9&10"} />}
          />
          <Route
            path='/blog/stage-week11&12'
            element={<BlogPost ext={"11&12"} />}
          />
          <Route path='/blog/stage-week13' element={<BlogPost ext={"13"} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

root.render(<App />);
