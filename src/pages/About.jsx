import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        About Me
      </h1>

      <p className="text-lg leading-relaxed mb-10">
        I am Pasula Shloka, a B.Tech student passionate
        about Web Development, React, Java and Python.
        I enjoy building user-friendly applications and
        continuously learning new technologies.
      </p>

      <h2 className="text-3xl font-semibold mb-5">
        Education
      </h2>

      <div className="mb-10">
        <p>
          <strong>B.Tech</strong>
        </p>
        <p>K L University, Hyderabad</p>
        <p>Computer Science Engineering</p>
      </div>

      <h2 className="text-3xl font-semibold mb-5">
        Skills
      </h2>

      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}

      <h2 className="text-3xl font-semibold mt-12 mb-5">
        Certifications
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Frontend Development</li>
        <li>Java Programming</li>
        <li>Python Programming</li>
      </ul>
    </div>
  );
}

export default About;