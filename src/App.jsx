import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import Header from './components/Header';
import CriminalTestimonial from './components/CriminalTestimonial';
import CivilTestimonial from './components/CivilTestimonial';
import OfficeSection from './components/OfficeSection';
import OfficeMap from './components/OfficeMap';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar onBookConsultation={() => setShowModal(true)} />
      <Header onBookConsultation={() => setShowModal(true)} />
      <CriminalTestimonial />
      <CivilTestimonial />
      <OfficeSection />
      <OfficeMap />
      <Contact />
      <Footer />
      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;