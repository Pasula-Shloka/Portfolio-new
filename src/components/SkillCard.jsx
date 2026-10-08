function SkillCard({ skill, darkMode }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5 text-sm font-medium">
        <span>{skill.name}</span>
        <span className={darkMode ? "text-zinc-400" : "text-gray-500"}>
          {skill.level}%
        </span>
      </div>

      <div
        className={`w-full rounded-full h-2.5 overflow-hidden ${
          darkMode ? "bg-zinc-800" : "bg-gray-200"
        }`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            darkMode ? "bg-white" : "bg-black"
          }`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;