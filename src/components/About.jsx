import React from "react";
import { Code, Palette, Globe } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Development",
      description:
        "Passionate about building scalable applications with modern technologies.",
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Design",
      description: "Creating beautiful, intuitive interfaces that users love.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description:
        "Always learning and exploring new technologies and methodologies.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-600 mb-12 text-center">
          I'm a passionate developer . I love turning complex problems into
          simple, beautiful, and intuitive solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                {card.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
