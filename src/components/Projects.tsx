import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const filterButtons = [
    { label: 'All', value: 'all' },
    { label: 'Machine Learning', value: 'ml' },
    { label: 'Deep Learning', value: 'dl' },
    { label: 'Computer Vision', value: 'cv' },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'ml' && project.technologies.some(tech => 
      ['Machine Learning', 'XGBoost', 'Random Forest', 'SVM'].includes(tech))) return true;
    if (filter === 'dl' && project.technologies.some(tech => 
      ['Deep Learning', 'RNN', 'TensorFlow'].includes(tech))) return true;
    if (filter === 'cv' && project.technologies.some(tech => 
      ['Computer Vision', 'Object Detection'].includes(tech))) return true;
    return false;
  });

  return (
    <section className="py-32 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden" id="projects">
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-300/30 blur-3xl"
        style={{ rotate }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl"
        style={{ rotate }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Exploring the intersection of AI, Machine Learning, and real-world applications
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.value}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium transform hover:shadow-xl ${
                filter === button.value 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setFilter(button.value)}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;