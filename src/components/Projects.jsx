import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { capstone, miniCapstone, projects } from '../data/portfolioData';

const ProjectCard = ({ project, index, isLarge = false }) => {
  const { ref, isInView } = useScrollAnimation(0.2);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isLarge ? 'h-auto' : 'h-full'
      }`}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          
          {project.repoUrl && (
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
          
          {project.repoUrls && project.repoUrls.map((url, urlIndex) => (
            <motion.a
              key={urlIndex}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              GitHub {urlIndex + 1}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const LargeProjectCard = ({ project, imageRight = false, index }) => {
  const { ref, isInView } = useScrollAnimation(0.2);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${
        imageRight ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      <div className={`${imageRight ? 'lg:col-start-2' : ''}`}>
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={`https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800`}
            alt={project.imageAlt}
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </div>
      
      <div className={`${imageRight ? 'lg:col-start-1' : ''}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
          
          {project.repoUrl && (
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          )}
          
          {project.repoUrls && project.repoUrls.map((url, urlIndex) => (
            <motion.a
              key={urlIndex}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub {urlIndex + 1}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work and the technologies I've used to solve real problems.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Capstone Project */}
          <LargeProjectCard project={capstone} index={0} />
          
          {/* Mini-Capstone Project */}
          <LargeProjectCard project={miniCapstone} imageRight={true} index={1} />
          
          {/* Other Projects */}
          {projects.length > 0 && (
            <div className="space-y-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center"
              >
                Other Projects
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;