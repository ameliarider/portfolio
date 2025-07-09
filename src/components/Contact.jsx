import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { resumeURL } from '../data/portfolioData';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            whileInView={{
              x: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.5, delay: 0.2 }
            }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          >
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and see what we can build together!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
        >
          <motion.a
            href="mailto:amelia.grace.rider@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/amelia-rider"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
          
          <motion.a
            href={resumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Résumé
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;