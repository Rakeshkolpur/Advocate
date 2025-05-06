import React from 'react';
import CriminalLawImg from '../assets/Criminal-law.jpg';

const CriminalTestimonial = () => {
  return (
    <section id="criminal" className="w-full bg-gradient-to-r from-gray-100 to-gray-200 py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch shadow-xl rounded-3xl overflow-hidden">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2">⚖️</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800">Criminal Law Section </h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-red-700 mb-2"> Iam Advocate Prakash Raju – Leading Criminal Defense Lawyer | Hyderabad</h3>
          <p className="text-gray-700 mb-4 text-lg">
            With a strong courtroom presence and over <span className="font-bold text-black">500+ criminal cases</span> successfully handled, And Iam stands as one of Hyderabad's most trusted criminal defense lawyers. Defended clients across a wide range of criminal matters including bail, FIR quashing, IPC offenses, and trial representation.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Expert in building strong defense strategies for fair trials</li>
            <li>Relentless focus and fearless advocacy for clients</li>
            <li>Complete legal support from pre-arrest to acquittal</li>
            <li>Quick response, clear communication, and powerful representation</li>
          </ul>
          <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-800 mb-4">
            "If you or your loved ones are facing criminal charges, trust Advocate Prakash Raju to provide expert legal defense backed by results and reputation."
          </blockquote>
          <div className="text-gray-600 text-sm">Clients commend him for his quick response, clarity in communication, and powerful representation in courtrooms across Hyderabad.</div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-300">
          <img
            src={CriminalLawImg}
            alt="Criminal Law"
            className="w-full h-full object-cover md:max-w-[400px] md:max-h-[420px] rounded-none shadow-2xl"
            style={{ minHeight: '320px', maxHeight: '420px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CriminalTestimonial; 