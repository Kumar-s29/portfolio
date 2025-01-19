import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Learning Hub",
      description:
        "A platform for students to Learn and Manage All their Tasks and Assignments at one place.",
      image:
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "Django", "Bootstarp", "API"],
      github: "https://github.com/Kumar-s29/Mini_Project",
      demo: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI content generator that helps you create human-like text content, powered by OpenAI",
      image:
        "https://plus.unsplash.com/premium_photo-1725907643556-e987fab4b09d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "MongoDB", "Nodejs", "Stripe"],
      github: "https://github.com/Kumar-s29/AI_Content_Generator",
      demo: "#",
    },
    {
      title: "Wishdom Hub",
      description:
        "The Wisdom Hub is a mentorship platform that connects retired professionals with individuals seeking guidance and knowledge. It provides a space for experienced mentors to share their wisdom and empower the next generation.",
      image:
        "https://plus.unsplash.com/premium_photo-1661774902950-c6d33d6a245e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "TailwindCss", "MongoDB", "Express", "NodeJS", "Stripe"],
      github: "https://github.com/Kumar-s29/WISDOM-HUB",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
