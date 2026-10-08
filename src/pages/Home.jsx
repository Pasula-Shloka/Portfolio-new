import { Link } from "react-router-dom";
import profilePhoto from "../assets/PHOTO.jpg";

function Home({ darkMode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <p className={`text-lg font-medium mb-2 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Pasula Shloka
          </h1>

          <h2 className={`text-2xl md:text-3xl font-medium mb-6 ${darkMode ? "text-zinc-300" : "text-gray-600"}`}>
            Computer Science Student & React Developer
          </h2>

          <p className={`text-lg leading-relaxed mb-8 ${darkMode ? "text-zinc-400" : "text-gray-700"}`}>
            Passionate about building responsive web applications using
            React, JavaScript, and Tailwind CSS. I enjoy solving
            real-world problems through technology and continuously
            improving my development skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className={`px-6 py-3 rounded-lg font-medium transition ${
                darkMode
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-black text-white hover:bg-zinc-800"
              }`}
            >
              View Projects
            </Link>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Pasula_Shloka_Resume.pdf"
              className={`border-2 px-6 py-3 rounded-lg font-medium transition ${
                darkMode
                  ? "border-zinc-700 text-white hover:bg-zinc-800"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Pasula-Shloka"
              target="_blank"
              rel="noreferrer"
              className={`border px-4 py-2 rounded-lg text-sm font-medium transition ${
                darkMode
                  ? "border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pasula-shloka"
              target="_blank"
              rel="noreferrer"
              className={`border px-4 py-2 rounded-lg text-sm font-medium transition ${
                darkMode
                  ? "border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePhoto}
            alt="Pasula Shloka"
            className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 ${
              darkMode ? "border-zinc-800" : "border-gray-200"
            }`}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div
          className={`border rounded-xl p-6 text-center shadow-sm ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white"
          }`}
        >
          <h3 className="text-3xl font-bold">6+</h3>
          <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>Projects Completed</p>
        </div>

        <div
          className={`border rounded-xl p-6 text-center shadow-sm ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white"
          }`}
        >
          <h3 className="text-3xl font-bold">React</h3>
          <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>Frontend Development</p>
        </div>

        <div
          className={`border rounded-xl p-6 text-center shadow-sm ${
            darkMode ? "border-zinc-800 bg-zinc-900" : "border-gray-200 bg-white"
          }`}
        >
          <h3 className="text-3xl font-bold">CSE</h3>
          <p className={darkMode ? "text-zinc-400" : "text-gray-600"}>B.Tech Student</p>
        </div>
      </div>
    </section>
  );
}

export default Home;