import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import useStore from "../store/useStore";
import { useShallow } from "zustand/react/shallow";

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  // const { projects } = useShallow((state) => ({
  //   projects: state.projectData,
  // }));

  return (
    <div className='projects-section'>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
