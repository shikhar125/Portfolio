import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { 
      id: 1, 
      label: "Projects Built", 
      value: "4+",
      icon: "🚀",
      description: "Personal and course projects showcasing my skills",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbS5uSaD9BWFrWtRF7PZbJU4iSYO_TOOHVg&s"
    },
    { 
      id: 2, 
      label: "Learning Journey", 
      value: "1 year",
      icon: "📚",
      description: "Dedicated to continuous learning and improvement",
      image:"data:image/jpeg;base64,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"
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900 text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-5xl font-bold inline border-b-4 border-pink-500">About Me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-pink-900/30 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20"
            >
              <h2 className="text-2xl font-bold text-pink-300 mb-3">
                Passionate Frontend Developer | Fresh Graduate
              </h2>
              <p className="text-gray-300 leading-relaxed">
                As a fresh graduate with a strong foundation in web development, I bring enthusiasm,
                creativity, and a modern approach to frontend development. My journey in web development
                started with a deep curiosity for creating beautiful user interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-pink-900/30 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20"
            >
              <h3 className="text-xl font-bold text-pink-300 mb-3">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                Through intensive self-learning and structured courses, I've developed proficiency in
                React.js, modern JavaScript,Tailwind CSS and responsive design principles. I'm particularly excited
                about creating intuitive user experiences and learning new technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-pink-900/30 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20"
            >
              <h3 className="text-xl font-bold text-pink-300 mb-3">Career Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently seeking opportunities to contribute to innovative projects and grow alongside
                experienced developers. I'm committed to writing clean, maintainable code and staying
                updated with the latest frontend trends.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map(({ id, label, value, icon, description, image}) => {
              return (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 p-6 rounded-lg backdrop-blur-sm border border-pink-500/20 shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{icon}</span>
                    <div>
                      <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-3xl font-bold text-pink-400"
                      >
                        {value}
                      </motion.h4>
                      <p className="text-pink-200 text-lg">{label}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3 text-sm">{description}</p>
                  {image && (
                    <div className="mt-4">
                      <img src={image} alt={label} className="w-full h-40 object-cover rounded-lg" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;