import React from 'react';
import CivilLawImg from '../assets/civil-law.webp';

const CivilTestimonial = () => {
  return (
    <section id="civil" className="w-full bg-gradient-to-r from-gray-50 to-gray-200 py-12 px-4 md:px-0 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch shadow-xl rounded-3xl overflow-hidden">
        
         {/* Right: Image */}
         <div className="flex-1 flex items-center justify-center bg-gray-200">
          <img
            src={CivilLawImg}
            alt="Civil Law"
            className="w-full h-full object-cover md:max-w-[400px] md:max-h-[420px] rounded-none shadow-2xl"
            style={{ minHeight: '320px', maxHeight: '420px' }}
          />
        </div>
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2">🏛️</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800">Civil Law Section</h2>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2"> Iam Advocate Prakash Raju – Expert in Civil Litigation | Hyderabad</h3>
          <p className="text-gray-700 mb-4 text-lg">
            With over a decade of experience in civil law, And Iam successfully handled more than <span className='font-bold text-black'>200 civil cases</span> in Hyderabad. with deep understanding of property disputes, contract enforcement, family settlements, and civil suits has made him a go-to legal expert in the city.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Methodical approach and sharp legal acumen</li>
            <li>Strong documentation and clear legal strategy</li>
            <li>Trusted for integrity and transparency</li>
            <li>Strategic solutions for property, land, and injunction issues</li>
          </ul>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 mb-4">
            "Civil law isn't just about disputes—it's about restoring balance and rights."
          </blockquote>
          <div className="text-gray-600 text-sm">Iam practice is rooted in trust, professionalism, and a commitment to justice.</div>
        </div>
       
      </div>
    </section>
  );
};

export default CivilTestimonial; 