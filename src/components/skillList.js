import React from "react";

export const SkillList = () => {
  const skills = [
    { name: "HTML & CSS",level: "🦾", backgroundColor: "blue" },
    { name: "Vanilla JavaScript", level: "🦾", backgroundColor: "yellow" },
    { name: "React", level: "👍", backgroundColor: "lightblue" },
    { name: "Web Design", level: "👍", backgroundColor: "green" },
    { name: "Git", level: "👶", backgroundColor: "purple" },
    { name: "Python", level: "👶", backgroundColor: "red" },
  ];

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <h3
          className="skills-round-corners"
          key={skill.name}
          style={{ backgroundColor: skill.backgroundColor }}
        >
          {skill.name} {skill.level}
        </h3>
      ))}
    </div>
  );
};
