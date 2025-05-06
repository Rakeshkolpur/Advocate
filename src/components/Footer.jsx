import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 pb-6 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 md:items-start">
        {/* Branding & Social */}
        <div className="mb-8 md:mb-0 w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-2"><span className="text-blue-700">Lawyer</span><span className="text-black">.dev</span></h2>
          <p className="mb-4 max-w-xs">Showcasing legal expertise and offering consultation services. Let's build justice together.</p>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="bg-gray-200 hover:bg-blue-200 p-3 rounded-full text-xl transition text-black"><FaGithub /></a>
            <a href="#" className="bg-gray-200 hover:bg-blue-400 p-3 rounded-full text-xl transition text-black"><FaLinkedin /></a>
            <a href="#" className="bg-gray-200 hover:bg-blue-300 p-3 rounded-full text-xl transition text-black"><FaTwitter /></a>
            <a href="mailto:prakashraju721@gmail.com" className="bg-gray-200 hover:bg-yellow-300 p-3 rounded-full text-xl transition text-black"><FaEnvelope /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="mb-8 md:mb-0 w-full md:w-1/3">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline text-black">Home</a></li>
            <li><a href="#about" className="hover:underline text-black">About</a></li>
            <li><a href="#civil" className="hover:underline text-black">Civil Services</a></li>
            <li><a href="#criminal" className="hover:underline text-black">Criminal Services</a></li>
            <li><a href="#contact" className="hover:underline text-black">Contact</a></li>
          </ul>
        </div>
        {/* Contact & CTA */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Get In Touch</h3>
          <p className="mb-4 max-w-xs">Have a legal question or need advice? I'm always open to discussing new cases and opportunities.</p>
          <a href="mailto:prakashraju721@gmail.com" className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition">Contact Me</a>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-2 gap-2 md:gap-0">
        <span className="text-center">© {new Date().getFullYear()} Lawyer.dev. All rights reserved.</span>
        <span className="mt-2 md:mt-0 text-center">Made with <span className="text-red-500">♥</span> using React & TailwindCSS</span>
      </div>
    </footer>
  );
};

export default Footer; 