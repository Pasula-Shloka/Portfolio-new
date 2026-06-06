function ProjectCard({ project }) {
  return (
    <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">
        {project.title}
      </h2>

      <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm mb-3">
        {project.category}
      </span>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-black text-white px-4 py-2 rounded"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;