import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#e6f2f8] relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4 text-[#1a2a5e] tracking-tight"
          >
            Let's work together
            <span className="text-[#8a56e8] inline-block transform hover:scale-110 transition-transform duration-300">.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-1 bg-[#8a56e8] mx-auto my-6"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#1a2a5e] mb-6 leading-relaxed"
          >
            I try to blend AI and Automation in every task. Data science is all about
            getting better with what you have as the data. I have made creative search
            portals and trained complex models in order to make the most effective
            outcome.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl text-[#1a2a5e] font-semibold mb-8"
          >
            Data science according to me is future
          </motion.p>
          
          <motion.a 
            href="#projects"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#8a56e8] text-white rounded-lg hover:bg-[#7648d1] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Projects
          </motion.a>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-[#8a56e8]/10 to-[#1a2a5e]/10 blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-[#8a56e8]/10 to-[#1a2a5e]/10 blur-3xl"
      />
    </section>
  );
};

export default Hero;