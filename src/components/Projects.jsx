import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'AI Dashboard',
    category: 'Full Stack',
    description: 'An advanced analytics platform powered by AI for real-time data visualization and insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'Tailwind'],
    isUpcoming: true,
  },
  {
    title: 'Crypto Wallet',
    category: 'Web3',
    description: 'A secure and decentralized wallet for managing digital assets across multiple blockchains.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60',
    tags: ['Next.js', 'Solidity', 'GSAP'],
    isUpcoming: true,
  },
  {
    title: 'E-Commerce Pro',
    category: 'E-Commerce',
    description: 'A feature-rich e-commerce solution with seamless checkout and inventory management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    tags: ['MongoDB', 'Express', 'React'],
    isUpcoming: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto flex justify-between items-end mb-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 purple-glow-text"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400">Selected work that showcases my skills and passion.</p>
        </div>
        <button className="hidden md:block text-neonBlue border border-neonBlue px-6 py-2 rounded-full hover:bg-neonBlue hover:text-black transition-all">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass-morphism border border-gray-800"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-neonBlue text-sm font-semibold tracking-wider uppercase">{project.category}</span>
                {project.isUpcoming && (
                  <span className="px-3 py-1 bg-purpleGlow/20 text-purpleGlow text-[10px] font-black uppercase tracking-widest rounded-full border border-purpleGlow/30 animate-pulse">
                    Upcoming
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-xs text-gray-300 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-neonBlue/10 text-neonBlue rounded-lg hover:bg-neonBlue hover:text-black transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 text-white rounded-lg hover:bg-purpleGlow transition-colors">
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
