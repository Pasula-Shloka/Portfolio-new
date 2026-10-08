import { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects({ darkMode }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "React", "Web Development", "Java"];

  const filteredProjects = projectsData.filter((project) => {
    const query = search.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      (project.tech && project.tech.toLowerCase().includes(query));

    const matchesCategory =
      category === "All" ||
      project.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 tracking-tight">My Projects</h1>
        <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>
          A showcase of my web development, frontend applications, and academic projects.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, technology, or keywords..."
          className={`w-full p-3.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
            darkMode
              ? "bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500 focus:ring-zinc-500"
              : "bg-white border-gray-300 text-black placeholder-gray-400 focus:ring-black"
          }`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => {
          const isActive = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                isActive
                  ? darkMode
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-black"
                  : darkMode
                  ? "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
      ) : (
        <div className={`text-center py-16 border rounded-xl ${darkMode ? "border-zinc-800 text-zinc-400" : "border-gray-200 text-gray-500"}`}>
          <p className="text-lg">No projects found matching your criteria.</p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
            className="mt-4 text-sm underline hover:opacity-80"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;