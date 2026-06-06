import ProjectCard from "./ProjectCard";

function ProjectsView({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  filteredProjects,
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        My Projects
      </h1>

      <input
        type="text"
        placeholder="Search projects..."
        className="w-full border p-3 rounded-lg mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg border ${
              category === cat
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center mt-10">
          No projects found.
        </p>
      )}
    </div>
  );
}

export default ProjectsView;