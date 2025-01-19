import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "Java Script", level: 80 },
        { name: "CSS/Tailwind", level: 88 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.JS", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 75 },
        { name: "Docker", level: 30 },
        // { name: "AWS", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      {/* <span className="text-gray-600 dark:text-gray-400"> */}
                      {/* {skill.level}% */}
                      {/* </span> */}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
