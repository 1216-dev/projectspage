import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Get In Touch</h2>
          <p className="text-lg text-blue-200 mb-10 animate-fade-in delay-100">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:divyasnhpradhan14@gmail.com" className="flex flex-col items-center group animate-fade-in delay-200">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-blue-100 transform transition-all duration-300 hover:scale-110">
                <Mail className="w-8 h-8 text-blue-900 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-blue-200 font-medium">Email</span>
            </a>
            
            <a href="https://github.com/Divyansh1414" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-fade-in delay-300">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-blue-100 transform transition-all duration-300 hover:scale-110">
                <Github className="w-8 h-8 text-blue-900 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-blue-200 font-medium">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/divyanshpradhan14/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group animate-fade-in delay-400">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-blue-100 transform transition-all duration-300 hover:scale-110">
                <Linkedin className="w-8 h-8 text-blue-900 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="mt-2 text-blue-200 font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact