import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layers, Menu, ArrowRight, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Components
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { SplineScene } from './components/SplineScene';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue via-purple-500 to-neonBlue z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="fixed top-6 left-1/2 w-[95%] max-w-6xl z-50 bg-transparent border-none rounded-full"
  >
    <div className="px-6 py-3 md:py-4 flex justify-between items-center">
      {/* Premium Logo */}
      <a href="#home" className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-neonBlue via-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] group-hover:scale-105 transition-all duration-300">
          <Layers className="text-white w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </div>
        <h1 className="text-xl md:text-2xl font-outfit font-black text-white tracking-widest hidden sm:block group-hover:opacity-90 transition-opacity">
          ANIMATED<span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-purple-400">HUB</span>
        </h1>
      </a>
      
      {/* Links */}
      <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-[0.25em] text-gray-300">
        {['Home', 'About', 'Services', 'Projects'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="relative group hover:text-white transition-colors duration-300 py-2"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neonBlue to-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-neonBlue hover:text-black hover:shadow-[0_0_25px_rgba(56,189,248,0.8)] transition-all duration-300 transform hover:-translate-y-0.5">
          Let's Talk
        </button>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neonBlue hover:text-black hover:border-neonBlue transition-all">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32">
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purpleGlow/20 blur-[120px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="z-10 w-full px-4"
    >
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-neonBlue font-mono tracking-[0.5em] text-xs mb-6 block uppercase drop-shadow-[0_2px_10px_rgba(56,189,248,0.8)]"
      >
        Welcome to the Future
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-outfit text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      >
        CRAFTING <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-purple-400 to-neonBlue bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
          EXPERIENCES
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="font-sans text-white text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] opacity-90"
      >
        We are a digital agency pushing the boundaries of web development with premium 3D animations and cutting-edge design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center"
      >
        <a href="#projects" className="group px-8 py-4 font-outfit bg-gradient-to-r from-neonBlue to-blue-500 text-black font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-3">
          View Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#contact" className="group px-8 py-4 font-outfit bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-black uppercase tracking-widest hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300 flex items-center gap-3">
          Contact Us
          <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </motion.div>


  </section>
);

function App() {
  return (
    <Router>
      <ScrollProgress />
      <div id="foreground-content" className="bg-transparent text-white selection:bg-neonBlue selection:text-black relative min-h-screen">
        {/* Dark Gradient Overlay to improve text contrast without blurring the background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-black/80 via-black/20 to-black/90"></div>

        {/* Global Spline 3D Background */}
        <div id="spline-background" className="fixed inset-0 z-[-2] opacity-100 pointer-events-auto">
          <SplineScene 
            scene="https://prod.spline.design/lZbyDtUKFDvZrX-o/scene.splinecode" 
            className="w-full h-full"
          />
        </div>
        
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Services />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </main>

        <footer className="py-20 px-8 border-t border-gray-900 bg-black/50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h2 className="text-3xl font-bold mb-6 tracking-tighter">
                ANIMATED<span className="text-neonBlue">HUB</span>
              </h2>
              <p className="text-gray-500 max-w-sm mb-8">
                Building the digital future with passion, precision, and a lot of pixels.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/viral-patanvadiya/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/917285870201?text=Hello%20Viral!%20I%20just%20saw%20your%20portfolio%20and%20I%27d%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-neonBlue hover:text-black transition-all cursor-pointer">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gray-300">Quick Links</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gray-300">Contact</h4>
              <ul className="space-y-4 text-gray-500">
                <li>viralpatanvadiya24@gmail.com</li>
                <li>+91 72858 70201</li>
                <li>Gujarat, India</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            © 2026 Animated Hub. All rights reserved. Made with ✨ by AI.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
