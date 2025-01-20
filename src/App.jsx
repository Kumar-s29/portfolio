import React, { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Timeline from "./components/Timeline";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Toggle dark class on the document element
    document.documentElement.classList.toggle("dark", newMode);

    // Save preference in localStorage
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);

    console.log("Dark Mode Loaded:", savedMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Dark Mode Toggle Button */}
{/*       <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
        title="Toggle dark mode"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button> */}

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/Kumar-s29"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/kumara-swamy-swayamvarapu-381587270"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:swamykumar2906@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Kumara Swamy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
