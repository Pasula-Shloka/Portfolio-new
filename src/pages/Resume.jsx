function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Resume
      </h1>

      <div className="border rounded-xl p-8 shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Pasula Shloka
        </h2>

        <p className="mb-3">
          Computer Science Engineering Student
        </p>

        <p className="mb-3">
          Passionate about React Development, Java,
          Python, and building responsive web applications.
        </p>

        <h3 className="font-semibold mt-6 mb-2">
          Skills
        </h3>

        <ul className="list-disc pl-6 mb-6">
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Java</li>
          <li>Python</li>
        </ul>

        <a
          href="/resume.pdf"
          download
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;