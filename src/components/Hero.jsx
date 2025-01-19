import React from "react";
import { ArrowRight, Download } from "lucide-react";
import img from "./../assets/codedp.jpg";
import img2 from "./../assets/newdp.jpg";
import resume from "./../assets/MyResume1.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Kumara Swamy
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-white">
            Full Stack Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href={resume}
              download
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200"
            >
              Resume
              <Download className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400">
            <img
              src={img2}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
