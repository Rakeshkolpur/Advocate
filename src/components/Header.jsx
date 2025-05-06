import React from 'react';
import RajuPhoto from '../assets/Raju-removebg-preview.png';

const Header = ({ onBookConsultation }) => {
  return (
    <div id="home" className="relative bg-gradient-to-r from-gray-200 to-gray-400 min-h-[600px] flex flex-col md:flex-row items-center justify-between px-8 py-12 overflow-hidden">
      {/* Left: Text and Button */}
      <div className="flex-1 max-w-3xl z-10">
        <h1 className="text-5xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg">
        Top Civil & Criminal Lawyer <br /> In Hyderabad
        </h1>
        <p className="text-xl text-gray-700 mb-8 font-medium">
        Iam Advocate Advocate Prakash Raju (High Court) — Highly experienced in handling complex Civil and Criminal cases with dedication and expertise.

        </p>
        <button
          onClick={onBookConsultation}
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded shadow-lg transition mb-12"
        >
          BOOK MY FREE CONSULTATION
        </button>
        {/* Press Quotes */}
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mt-8">
          <div className="text-center">
            <div className="text-lg font-serif mb-2">"Trusted Legal Advisor in Hyderabad"</div>
            <div className="text-gray-500 text-sm">Legal Times</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-serif mb-2">"Over 500 Successful Cases"</div>
            <div className="flex justify-center space-x-2 text-gray-500 text-sm">
              <span className="bg-gray-300 px-2 rounded">PP Media</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-serif mb-2">“Reliable legal support when it matters most”</div>
            <div className="text-gray-500 text-sm">-Clients</div>
          </div>
        </div>
      </div>
      {/* Right: Raju's Photo */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
        <img
          src={RajuPhoto}
          alt="Raju Lawyer"
          className="w-[800px] h-[520px] object-cover rounded-3xl "
          style={{ maxWidth: '100%', maxHeight: '90vh' }}
        />
      </div>
      {/* Subtle background overlay for style */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-gray-300/60 pointer-events-none" />
    </div>
  );
};

export default Header; 