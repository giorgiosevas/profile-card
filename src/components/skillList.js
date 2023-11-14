import React from "react";

export const SkillList = () => {
  const skills = [
    { name: "HTML & CSS", emoji: "🌐", backgroundColor: "blue" },
    { name: "Vanilla JavaScript", emoji: "🔥", backgroundColor: "yellow" },
    { name: "React", emoji: "⚛️", backgroundColor: "lightblue" },
    { name: "Web Design", emoji: "🎨", backgroundColor: "green" },
    { name: "Git", emoji: "🔧", backgroundColor: "purple" },
    { name: "Python", emoji: "🐍", backgroundColor: "red" },
  ];

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <h3
          className="skills-round-corners"
          key={skill.name}
          style={{ backgroundColor: skill.backgroundColor }}
        >
          {skill.name} {skill.emoji}
        </h3>
      ))}
    </div>
  );
};
