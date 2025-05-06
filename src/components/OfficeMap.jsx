import React, { useRef, useEffect, useState } from 'react';

const OfficeMap = () => {
  const mapRef = useRef(null);
  const [animateMarker, setAnimateMarker] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateMarker(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-10 flex justify-center">
      <div className="max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-blue-900 mb-4 px-6 pt-6">Find Us on Google Maps</h2>
        <div ref={mapRef} className="w-full aspect-w-16 aspect-h-9 relative flex items-center justify-center">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.43968468323476!2d78.55486976563294!3d17.350334036528988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98affddc33f3%3A0xbb5feea617c72ad5!2sSarvodaya%20Colony%2C%20Central%20Bank%20Colony%2C%20L.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500074!5e1!3m2!1sen!2sin!4v1746557461490!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
          {/* Animated blue marker overlay */}
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 ${animateMarker ? 'animate-zoomout-marker' : 'scale-0 opacity-0'}`}
          >
            <div className="relative flex items-center justify-center">
              {/* Blue dot */}
              <div className="w-8 h-8 bg-blue-600 rounded-full shadow-lg border-4 border-white"></div>
              {/* Pulse */}
              <div className="absolute w-16 h-16 rounded-full border-4 border-blue-400 opacity-60 animate-ping"></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="https://maps.app.goo.gl/j4xs3CtUaHWPCeKd7" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">Open in Google Maps</a>
        </div>
        <style>{`
          @keyframes zoomout-marker {
            0% { transform: scale(2); opacity: 0; }
            40% { opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-zoomout-marker {
            animation: zoomout-marker 0.8s cubic-bezier(0.4,0,0.2,1) 1;
            opacity: 1 !important;
            transform: scale(1) translate(-50%, -50%);
          }
        `}</style>
      </div>
    </section>
  );
};

export default OfficeMap; 