import React from 'react';
import OfficeImg1 from '../assets/Office-Image1.jpg';
import OfficeImg2 from '../assets/Office-Image2.jpg';

const address = `Plot no. 5, road no 2/1, Besides Suryodaya Colony community hall, Suryodaya Colony, Lb Nagar, Hyderabad, Telangana, India`;

const OfficeSection = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Left: Images with creative layout */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 items-center justify-center relative">
          <div className="relative group">
            <img src={OfficeImg1} alt="Office 1" className="w-64 h-44 md:w-80 md:h-56 object-cover rounded-2xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-bold">Main Office</div>
          </div>
          <div className="relative group md:-ml-12 mt-6 md:mt-20 z-10">
            <img src={OfficeImg2} alt="Office 2" className="w-56 h-40 md:w-64 md:h-48 object-cover rounded-2xl shadow-xl border-4 border-white transform group-hover:scale-105 transition duration-300" />
            <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-bold">Reception</div>
          </div>
        </div>
        {/* Right: Address and info */}
        <div className="flex-1 flex flex-col justify-center items-start bg-white/80 rounded-3xl shadow-xl p-10 md:ml-8">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-blue-900 mb-4 flex items-center gap-2">
            <span role="img" aria-label="office">🏢</span> Our Office
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Visit us at our modern, welcoming office for a confidential consultation. We believe a great environment inspires great results!
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl text-blue-700">📍</span>
            <span className="text-base md:text-lg font-semibold text-gray-800">{address}</span>
          </div>
          <div className="mt-4 text-gray-500 text-sm italic">Walk-ins welcome. Appointments recommended for personalized attention.</div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection; 