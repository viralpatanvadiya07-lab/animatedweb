import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8 glow-text"
          >
            Let's Talk
          </motion.h2>
          <p className="text-gray-400 text-lg mb-10">
            Have a project in mind? Or just want to say hi? Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-secondary rounded-2xl text-neonBlue">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Me</p>
                <p className="text-lg font-medium">viralpatanvadiya24@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-secondary rounded-2xl text-purpleGlow">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Me</p>
                <p className="text-lg font-medium">+91 72858 70201</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-secondary rounded-2xl text-neonBlue">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium">Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          action="https://api.web3forms.com/submit"
          method="POST"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-morphism p-10 rounded-3xl space-y-6 border border-gray-800"
        >
          {/* Replace with your Access Key from https://web3forms.com/ */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="to" value="viralpatanvadiya24@gmail.com" />
          <input type="checkbox" name="botcheck" className="hidden" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Name</label>
              <input type="text" name="name" required placeholder="John Doe" className="w-full bg-primary/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-primary/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Subject</label>
            <input type="text" name="subject" required placeholder="Project Inquiry" className="w-full bg-primary/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Message</label>
            <textarea name="message" rows="4" required placeholder="Tell me about your project..." className="w-full bg-primary/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-neonBlue focus:outline-none transition-colors"></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-neonBlue text-black font-bold rounded-xl flex justify-center items-center space-x-2 shadow-neon"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
