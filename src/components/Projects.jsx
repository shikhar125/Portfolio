import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Weather Forecast",
      description:
        "A responsive weather app built with HTML, Tailwind CSS, and JavaScript. It provides real-time weather updates and a 5-day forecast for any city..",
      tech: ["Html", "TailwindCSS", "JavaScript"],
      image: "/images/projects/weather.jpg",
      liveUrl: "https://shikhar125.github.io/Weather-Podcast/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: 2,
      title: "Typing Speed",
      description:"A responsive typing speed test built with HTML, CSS, and JavaScript. It calculates WPM (Words Per Minute), accuracy, and time taken.",
      tech: ["Html", "Css", "Javascript"],
      image: "/images/projects/typing.jpg",
      liveUrl: "https://shikhar125.github.io/Typing-speed/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Student Registration system",
      description: "A web-based student registration system built with HTML, CSS, and JavaScript. It allows users to register, view, and manage student records efficiently.",
      tech: ["Html", "Css", "Javascript"],
      image: "/images/projects/student.jpg",
      liveUrl: "https://shikhar125.github.io/Student-Registration-System/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-green-600 to-teal-600",
    },
    {
      id: 4,
      title: "Real State Website",
      description:"A modern real estate website built with React, TypeScript, Tailwind CSS, and HTML. It offers seamless property browsing with advanced search and filtering.",
      tech: ["React", "Typescript", "Tailwind CSS", "Html"],
      image: "/images/projects/realestate.jpg",
      liveUrl: "https://shikhar125.github.io/Dream-Home/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-5xl font-bold inline border-b-4 border-purple-500">
            Projects
          </p>
          <p className="py-6 text-purple-300">
            Showcasing my journey through code - Each project represents a
            learning milestone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-lg cursor-pointer overflow-hidden group shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-75`}
              />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            >
              <motion.div
                layoutId={selectedId}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find((p) => p.id === selectedId) && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      {projects.find((p) => p.id === selectedId).title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {projects.find((p) => p.id === selectedId).description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={projects.find((p) => p.id === selectedId).liveUrl}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={
                          projects.find((p) => p.id === selectedId).githubUrl
                        }
                        className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-4 py-2 rounded-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
