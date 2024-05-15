import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className='projects-section'>
      <ProjectCard
        title='Swear'
        description='A sneaker configurator for shoe brand Swear London.'
        image='/images/projects/swear.jpg'
      />
      <ProjectCard
        title='Yogism'
        description='An AI-powered Yoga app that checks your posture and gives you a tailored workout.'
        image='/images/projects/yogism.jpg'
      />
    </div>
  );
}
