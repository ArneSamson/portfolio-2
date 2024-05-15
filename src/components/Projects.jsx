import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
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
  ];

  return (
    <div className='projects-section'>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
