import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    desc: 'Creating modern, aesthetic, and functional designs tailored to your brand.',
    icon: <Layout className="w-10 h-10 text-neonBlue" />,
  },
  {
    title: 'Full Stack Development',
    desc: 'Building robust and scalable web applications using the MERN stack.',
    icon: <Code className="w-10 h-10 text-purpleGlow" />,
  },
  {
    title: 'Mobile Optimization',
    desc: 'Ensuring your website looks and works perfectly on all devices.',
    icon: <Smartphone className="w-10 h-10 text-neonBlue" />,
  },
  {
    title: 'Performance Tuning',
    desc: 'Optimizing speed and SEO for maximum engagement and reach.',
    icon: <Rocket className="w-10 h-10 text-purpleGlow" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 glow-text"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-400">Transforming ideas into high-performance digital products.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-morphism p-8 rounded-2xl border border-gray-800 hover:border-neonBlue transition-all group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neonBlue">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
