import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-lg font-medium mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Pasula Shloka
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Computer Science Student & React Developer
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Passionate about building responsive web applications using
            React, JavaScript, and Tailwind CSS. I enjoy solving
            real-world problems through technology and continuously
            improving my development skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
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
              className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="PHOTO.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        <div className="border rounded-xl p-6 text-center shadow">
          <h3 className="text-3xl font-bold">6+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>

        <div className="border rounded-xl p-6 text-center shadow">
          <h3 className="text-3xl font-bold">React</h3>
          <p className="text-gray-600">Frontend Development</p>
        </div>

        <div className="border rounded-xl p-6 text-center shadow">
          <h3 className="text-3xl font-bold">CSE</h3>
          <p className="text-gray-600">B.Tech Student</p>
        </div>
      </div>
    </section>
  );
}

export default Home;