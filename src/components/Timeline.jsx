import React from "react";
import { GraduationCap, Award, Code } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      year: "2026",
      title: "Bachelor of Technology in Computer Science",
      company: "Vignan's Institute of Information Technology",
      description: "Pursuing B.Tech in CSE, expected graduation.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "MERN Stack Web Development",
      company: "Udemy",
      description: "Completed full-stack development course.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "JavaScript Essentials",
      company: "Cisco",
      description: "Completed JavaScript essentials course.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Python Essentials",
      company: "Cisco",
      description: "Completed Python essentials course.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "Present",
      title: "GitHub Profile",
      company: "GitHub",
      description: "Explore my projects and contributions.",
      icon: <Code className="w-6 h-6" />,
      link: "https://github.com/Kumar-s29",
    },
    {
      year: "Present",
      title: "LinkedIn Profile",
      company: "LinkedIn",
      description: "Connect with me on LinkedIn for professional updates.",
      icon: <Code className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/kumara-swamy-swayamvarapu-381587270/",
    },
    {
      year: "Present",
      title: "CodeChef Profile",
      company: "CodeChef",
      description: "3 ⭐ coder || Highest Rating :1644.",
      icon: <Code className="w-6 h-6" />,
      link: "https://www.codechef.com/users/Kumar_s29",
    },
    {
      year: "Present",
      title: "LeetCode Profile",
      company: "LeetCode",
      description: "Check out my problem-solving skills and submissions.",
      icon: <Code className="w-6 h-6" />,
      link: "https://leetcode.com/Kumar_s29/",
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-center items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  {event.icon}
                </div>
              </div>
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "pl-8"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {event.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {event.description}
                  </p>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 mt-3 inline-block"
                    >
                      View Profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
