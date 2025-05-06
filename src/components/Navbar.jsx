import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { FaWhatsapp, FaEnvelope, FaPhone, FaUserCheck, FaBars, FaTimes } from 'react-icons/fa';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ onBookConsultation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full shadow-lg border-4 border-white object-cover bg-white" />
          </div>
          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 font-bold text-xl">
            <a href="#home" onClick={e => scrollToSection(e, 'home')}>Home</a>
            <a href="#civil" onClick={e => scrollToSection(e, 'civil')}>Civil Services</a>
            <a href="#criminal" onClick={e => scrollToSection(e, 'criminal')}>Criminal Services</a>
            <a href="#about" onClick={e => scrollToSection(e, 'about')}>About</a>
            <a href="#contact" onClick={e => scrollToSection(e, 'contact')}>Contact</a>
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden md:flex flex-col items-end ml-4">
            <span className="font-bold">9346457270</span>
            <span className="text-xs">24 Hours Available</span>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
            <a href="#home" onClick={e => {scrollToSection(e, 'home'); setMenuOpen(false);}} className="block py-2">Home</a>
            <a href="#civil" onClick={e => {scrollToSection(e, 'civil'); setMenuOpen(false);}} className="block py-2">Civil Services</a>
            <a href="#criminal" onClick={e => {scrollToSection(e, 'criminal'); setMenuOpen(false);}} className="block py-2">Criminal Services</a>
            <a href="#about" onClick={e => {scrollToSection(e, 'about'); setMenuOpen(false);}} className="block py-2">About</a>
            <a href="#contact" onClick={e => {scrollToSection(e, 'contact'); setMenuOpen(false);}} className="block py-2">Contact</a>
            <div className="flex flex-col items-start mt-2 space-y-1">
              <span className="font-bold">9346457270</span>
              <span className="text-xs">24 Hours Available</span>
            </div>
          </div>
        )}
        {/* Action bar */}
        <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 py-3 shadow-md">
          <div className="grid grid-cols-2 md:flex md:flex-row md:space-x-6 gap-2 md:gap-0 justify-center">
            <button onClick={onBookConsultation} className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white transition focus:outline-none w-full md:w-auto justify-center">
              <FaUserCheck className="text-lg text-blue-400" />
              <span className="text-sm font-medium">Book Consultation</span>
            </button>
            <a href="https://wa.me/9346457270" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-700 hover:bg-green-600 text-white transition w-full md:w-auto justify-center">
              <FaWhatsapp className="text-lg text-green-400" />
              <span className="text-sm font-medium">WhatsApp Us</span>
            </a>
            <a href="mailto:prakashraju721@gmail.com" className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-700 hover:bg-yellow-600 text-white transition w-full md:w-auto justify-center">
              <FaEnvelope className="text-lg text-yellow-400" />
              <span className="text-sm font-medium">Message Us</span>
            </a>
            <a href="tel:9346457270" className="flex items-center space-x-2 px-4 py-2 rounded bg-gray-700 hover:bg-red-600 text-white transition w-full md:w-auto justify-center">
              <FaPhone className="text-lg text-red-400" />
              <span className="text-sm font-medium">Phone Us</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 