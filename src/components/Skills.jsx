import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
   FaGitAlt, FaFigma 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 size={40} />, level: 80, color: 'from-orange-500' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt size={40} />, level: 80, color: 'from-blue-500' },
    { id: 3, name: 'JavaScript', icon: <FaJs size={40} />, level: 65, color: 'from-yellow-500' },
    { id: 4, name: 'React', icon: <FaReact size={40} />, level: 60 , color: 'from-cyan-500' },
   
    { id: 6, name: 'TypeScript', icon: <SiTypescript size={40} />, level: 70, color: 'from-blue-600' },
    { id: 7, name: 'Tailwind', icon: <SiTailwindcss size={40} />, level: 70, color: 'from-teal-500' },
  
    { id: 9, name: 'Git', icon: <FaGitAlt size={40} />, level: 75, color: 'from-orange-600' },
    { id: 10, name: 'Figma', icon: <FaFigma size={40} />, level: 60, color: 'from-purple-500' },
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-5xl font-bold inline border-b-4 border-cyan-500">Skills</p>
          <p className="py-6 text-cyan-300">These are the technologies I work with</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, name, icon, level, color }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">{icon}</span>
                    <span className="text-xl font-bold">{name}</span>
                  </div>
                  <span className="text-lg font-semibold text-cyan-400">{level}%</span>
                </div>
                
                <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-700 absolute"></div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full ${color} to-cyan-500 bg-gradient-to-r relative`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;