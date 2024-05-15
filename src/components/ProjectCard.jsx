export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className='project-card'>
      <a>
        <img src={image} alt={title} />
      </a>
    </div>
  );
}
