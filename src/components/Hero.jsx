import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../assets/headshot.jpeg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))',
              'linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
              'linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            I'M <span className="text-blue-600 dark:text-blue-400">AMELIA RIDER</span> — SOFTWARE ENGINEER.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            I solve real-world problems with code.
          </motion.p>
        </div>

        {/* Right Content - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
              {/* TODO: Replace with actual profile photo */}
              <img 
                src={headshot}
                alt="Amelia Rider - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-blue-200 dark:border-blue-800 opacity-50"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;