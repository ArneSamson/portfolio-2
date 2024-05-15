import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, hero, slug }) {
  return (
    <div className='project-card'>
      <Link to={`/projects/${slug}`}>
        <img src={hero} alt={title} />
      </Link>
    </div>
  );
}
