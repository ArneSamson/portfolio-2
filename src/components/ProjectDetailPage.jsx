import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage({ projects }) {
  const { slug } = useParams(); // Get the slug parameter from the URL

  // Find the project with the matching slug
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p>Project not found</p>; // Handle the case where the project is not found
  }

  const { title, description, image } = project;

  return (
    <div className='project-detail'>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}
