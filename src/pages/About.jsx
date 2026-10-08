import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function About({ darkMode }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">About Me</h1>
      <p className={`text-lg leading-relaxed mb-12 ${darkMode ? "text-zinc-300" : "text-gray-700"}`}>
        I am Pasula Shloka, a Computer Science Engineering student passionate
        about Web Development, React, Java, and Python. I enjoy building clean,
        responsive, user-friendly applications and continuously learning modern
        software engineering practices.
      </p>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          Education
        </h2>
        <div
          className={`border rounded-xl p-6 ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-2">
            <h3 className="text-xl font-bold">
              Bachelor of Technology (B.Tech) - CSE
            </h3>
            <span className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
              2023 – 2027
            </span>
          </div>
          <p className="font-medium text-blue-600 dark:text-blue-400 mb-1">
            K L University, Hyderabad
          </p>
          <p className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            Focusing on Software Engineering, Data Structures, Algorithms, and Full-Stack Development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          Technical Skills
        </h2>
        <div
          className={`border rounded-xl p-6 ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-x-8">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          Certifications & Learning
        </h2>
        <div
          className={`border rounded-xl p-6 ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Frontend Web Development (HTML5, CSS3, JavaScript, React.js)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Java Programming & Object-Oriented Software Design</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500">✓</span>
              <span>Python for Computational Thinking & Problem Solving</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;