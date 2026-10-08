function ProjectCard({ project, darkMode }) {
  return (
    <div
      className={`border rounded-xl p-6 transition flex flex-col justify-between ${
        darkMode
          ? "border-zinc-800 bg-zinc-900 shadow-sm hover:border-zinc-600"
          : "border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-xl font-bold tracking-tight">
            {project.title}
          </h2>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              darkMode
                ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {project.category}
          </span>
        </div>

        <p className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {project.tech && (
          <p className={`text-xs font-mono mb-4 ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>
            {project.tech}
          </p>
        )}
      </div>

      <div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition ${
            darkMode
              ? "bg-white text-black hover:bg-zinc-200"
              : "bg-black text-white hover:bg-zinc-800"
          }`}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;