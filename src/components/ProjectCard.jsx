import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, image, link, slug }) {
  return (
    <div className='project-card'>
      <Link to={`/projects/${slug}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
}
