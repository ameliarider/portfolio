import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { funFacts } from '../data/portfolioData';

const About = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I was born and raised on the central coast of California, and I currently live in San Francisco, CA. 
            I work as a software engineer in health tech at Omada Health. In my free time, I run marathons, cook, 
            and explore the bay area food scene.
          </motion.p>
        </motion.div>

        {/* Fun Facts */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Fun Facts
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;