import React, { useRef, useState } from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.1
];

const trans = (x: number, y: number, s: number) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      className="relative"
    >
      <animated.div
        onMouseMove={({ clientX, clientY }) => {
          const rect = cardRef.current?.getBoundingClientRect();
          if (rect) {
            set({ xys: calc(clientX, clientY, rect) });
          }
        }}
        onMouseLeave={() => {
          set({ xys: [0, 0, 1] });
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          transform: props.xys.to(trans)
        }}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300"
      >
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 z-10 mix-blend-overlay"
            animate={{
              opacity: isHovered ? 0 : 0.7
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent z-20"
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.8
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-white"
              animate={{
                scale: isHovered ? 1.1 : 1,
                x: isHovered ? 10 : 0
              }}
            >
              {project.title}
            </motion.h3>
          </motion.div>
        </div>

        <div className="p-6 bg-white">
          <p className="text-blue-900 mb-6 text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:bg-blue-200 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            className="flex justify-between items-center"
            animate={{
              y: isHovered ? -5 : 0
            }}
          >
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
              whileHover={{
                scale: 1.1,
                x: 10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <span className="mr-2 font-medium">View Project</span>
              <ExternalLink className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>

            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.2,
                transition: { duration: 0.5 }
              }}
            >
              <Github className="w-6 h-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>
      </animated.div>
    </motion.div>
  );
};

export default ProjectCard;