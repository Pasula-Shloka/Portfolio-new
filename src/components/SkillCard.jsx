function SkillCard({ skill }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-black h-3 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;