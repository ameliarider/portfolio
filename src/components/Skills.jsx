import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -3, 
                backgroundColor: 'rgb(2 132 199)', 
                color: 'white',
                scale: 1.05 
              }}
              className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-default font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;