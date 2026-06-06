import { useState } from "react";

import projectsData from "../data/projects";
import ProjectsView from "../components/ProjectsView";

function ProjectsContainer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "React",
    "Web Development",
    "Full Stack",
    "Java",
    "Python",
  ];

  const filteredProjects = projectsData.filter(
    (project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        project.category === category;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <ProjectsView
      search={search}
      setSearch={setSearch}
      category={category}
      setCategory={setCategory}
      categories={categories}
      filteredProjects={filteredProjects}
    />
  );
}

export default ProjectsContainer;