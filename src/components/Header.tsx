import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 md:py-10 bg-gradient-to-r from-[#e6f2f8] to-[#eef6fa] border-b border-[#d3e3ec]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <BrainCircuit className="w-10 h-10 text-[#1a2a5e] mr-3" />
          <h1 className="text-3xl font-bold text-[#1a2a5e]">Data Science Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-[#1a2a5e] hover:text-[#8a56e8] transition-colors">About</a></li>
            <li><a href="#projects" className="text-[#1a2a5e] hover:text-[#8a56e8] transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-[#1a2a5e] hover:text-[#8a56e8] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;