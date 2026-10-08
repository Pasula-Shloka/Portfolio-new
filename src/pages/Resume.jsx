function Resume({ darkMode }) {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Resume</h1>
          <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>
            Curriculum Vitae & Professional Background
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition ${
              darkMode
                ? "border-zinc-700 text-zinc-300 hover:border-zinc-500"
                : "border-gray-300 text-gray-700 hover:border-black"
            }`}
          >
            Open PDF ↗
          </a>

          <a
            href={resumeUrl}
            download="Pasula_Shloka_Resume.pdf"
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition ${
              darkMode
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-black text-white hover:bg-zinc-800"
            }`}
          >
            Download PDF ↓
          </a>
        </div>
      </div>

      <div
        className={`border rounded-2xl p-8 sm:p-10 shadow-sm ${
          darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white"
        }`}
      >
        <div className="border-b pb-6 mb-6 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-1">Pasula Shloka</h2>
          <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
            Computer Science Engineering Student & Frontend Developer
          </p>
          <p className={`text-sm mt-2 ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
            Hyderabad, Telangana, India • pasulashlokareddy@gmail.com • github.com/Pasula-Shloka
          </p>
        </div>

        <div className="space-y-8">
          {/* Summary */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-2 text-zinc-400">
              Profile Summary
            </h3>
            <p className={`leading-relaxed ${darkMode ? "text-zinc-300" : "text-gray-700"}`}>
              Enthusiastic and motivated Computer Science student with strong foundations
              in React, modern JavaScript, Tailwind CSS, Java, and Python. Passionate about
              building intuitive, responsive user experiences and scalable software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-zinc-400">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <h4 className="font-bold text-base">
                B.Tech in Computer Science and Engineering
              </h4>
              <span className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
                2023 – 2027
              </span>
            </div>
            <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>
              K L University, Hyderabad, Telangana
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-zinc-400">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <strong>Languages:</strong> JavaScript (ES6+), Java, Python, HTML5, CSS3
              </div>
              <div>
                <strong>Frameworks & Tools:</strong> React.js, Tailwind CSS, Vite, Git, GitHub
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-3 text-zinc-400">
              Key Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">1. Recipe Finder Application</h4>
                <p className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
                  Interactive React web app featuring recipe search, dynamic categories, and responsive layout.
                </p>
              </div>
              <div>
                <h4 className="font-bold">2. Lost & Found Campus Portal</h4>
                <p className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
                  Web portal enabling campus students to report, track, and recover misplaced items.
                </p>
              </div>
              <div>
                <h4 className="font-bold">3. Animal & Conservation Website</h4>
                <p className={`text-sm ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
                  Educational web project dedicated to wildlife awareness and conservation with responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;