import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Home = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={25} />,
      href: "https://github.com/shikhar125",
    },
    {
      id: 2,
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/shikhar-upadhyay-a25793294/ ",
    },
    // { id: 3, icon: <FaCode size={25} />, href: "https://codepen.io/yourusername" },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center h-full"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-pink-300 py-4 max-w-md"
          >
            A passionate and motivated frontend developer with hands-on
            experience in building responsive and dynamic web applications using
            HTML, CSS, JavaScript, and React.js. Eager to learn and contribute
            to innovative projects, with a focus on delivering user-friendly and
            visually appealing interfaces. Familiar with modern development
            tools like Git, TailwindCSS.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            {socialLinks.map(({ id, icon, href }) => (
              <motion.a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-white hover:text-pink-400 cursor-pointer"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <img
              src="src/components/shikhar.jpg"
              alt="my profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-pink-500 shadow-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-lg opacity-50"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
