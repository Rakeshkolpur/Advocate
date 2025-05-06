import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '9346457270'; // Change to your WhatsApp number if needed

const ConsultationModal = ({ onClose }) => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [message, setMessage] = useState('');
  const [whatsappConsent, setWhatsappConsent] = useState(false);
  const [error, setError] = useState('');

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Fade-in animation classes
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 10); }, []);

  // New: handle form submit for email
  const [formRef, setFormRef] = useState(null);
  const handleEmailSubmit = (e) => {
    if (!name.trim()) {
      setError('Please enter your name.');
      e.preventDefault();
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setError('Please enter either email or phone number.');
      e.preventDefault();
      return;
    }
    setError('');
    // Allow form to submit
    onClose();
  };

  // Handle send
  const handleSend = () => {
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setError('Please enter either email or phone number.');
      return;
    }
    setError('');
    // Build WhatsApp message
    let msg = `Consultation Request%0A`;
    msg += `Name: ${name}%0A`;
    if (email) msg += `Email: ${email}%0A`;
    if (phone) msg += `Phone: ${countryCode} ${phone}%0A`;
    if (message) msg += `Message: ${encodeURIComponent(message)}%0A`;
    if (whatsappConsent) msg += `Consent: Happy to be contacted by WhatsApp.%0A`;
    // WhatsApp link
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 top-2 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gray-100 rounded-lg shadow-2xl w-[800px] h-[600px] max-w-full max-h-full p-8 relative transform transition-all duration-300 flex flex-col ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600">&times;</button>
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-2 font-normal">Request discreet follow-up</h2>
        <p className="text-center text-gray-600 mb-4">We aim to get back to you within 10 minutes.</p>
        <form
          ref={setFormRef}
          action="https://formsubmit.co/prakashraju721@gmail.com"
          method="POST"
          target="_blank"
          className="flex-1 flex flex-col md:flex-row gap-4 mb-4 overflow-auto"
          onSubmit={handleEmailSubmit}
        >
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">NAME</label>
              <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">EMAIL</label>
              <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">PHONE</label>
              <div className="flex">
                <select name="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} className="border border-gray-300 rounded-l px-2 py-2 bg-white">
                  <option value="+91">🇮🇳 +91 (India)</option>
                  <option value="+1">🇺🇸 +1 (USA)</option>
                  <option value="+44">🇬🇧 +44 (UK)</option>
                  <option value="+61">🇦🇺 +61 (Australia)</option>
                  <option value="+81">🇯🇵 +81 (Japan)</option>
                  <option value="+49">🇩🇪 +49 (Germany)</option>
                  <option value="+33">🇫🇷 +33 (France)</option>
                  <option value="+39">🇮🇹 +39 (Italy)</option>
                  <option value="+86">🇨🇳 +86 (China)</option>
                  <option value="+7">🇷🇺 +7 (Russia)</option>
                  <option value="+971">🇦🇪 +971 (UAE)</option>
                  <option value="+92">🇵🇰 +92 (Pakistan)</option>
                  <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                  <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                  <option value="+20">🇪🇬 +20 (Egypt)</option>
                  <option value="+234">🇳🇬 +234 (Nigeria)</option>
                  <option value="+27">🇿🇦 +27 (South Africa)</option>
                  <option value="+82">🇰🇷 +82 (South Korea)</option>
                  <option value="+34">🇪🇸 +34 (Spain)</option>
                  <option value="+55">🇧🇷 +55 (Brazil)</option>
                  <option value="+62">🇮🇩 +62 (Indonesia)</option>
                  <option value="+63">🇵🇭 +63 (Philippines)</option>
                  <option value="+60">🇲🇾 +60 (Malaysia)</option>
                  <option value="+65">🇸🇬 +65 (Singapore)</option>
                  <option value="+64">🇳🇿 +64 (New Zealand)</option>
                  <option value="+351">🇵🇹 +351 (Portugal)</option>
                  <option value="+90">🇹🇷 +90 (Turkey)</option>
                  <option value="+31">🇳🇱 +31 (Netherlands)</option>
                  <option value="+32">🇧🇪 +32 (Belgium)</option>
                  <option value="+46">🇸🇪 +46 (Sweden)</option>
                  <option value="+41">🇨🇭 +41 (Switzerland)</option>
                  <option value="+420">🇨🇿 +420 (Czech Republic)</option>
                  <option value="+48">🇵🇱 +48 (Poland)</option>
                  <option value="+358">🇫🇮 +358 (Finland)</option>
                  <option value="+386">🇸🇮 +386 (Slovenia)</option>
                </select>
                <input name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border-t border-b border-r border-gray-300 rounded-r px-3 py-2" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">YOUR MESSAGE OR QUESTION (OPTIONAL)</label>
            <textarea name="message" rows={7} value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Please use this field to specify the nature of your enquiry, including the names of the parties involved in your case.\n\nWe aim to get back to you within 10 minutes, but please let us know if you prefer a specific time.\n\nYour information will be kept entirely confidential."></textarea>
          </div>
        </form>
        <div className="w-full mt-2 flex flex-col md:flex-row gap-2">
          <button type="submit" form={formRef ? formRef.id : undefined} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-semibold mb-2 transition">SEND TO EMAIL</button>
          <button onClick={handleSend} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg font-semibold mb-2 transition flex items-center justify-center gap-2"><FaWhatsapp />SEND TO WHATSAPP</button>
          {error && <div className="text-red-600 text-sm text-center mb-2 w-full">{error}</div>}
        </div>
        {/* <div className="mt-8">
          <h3 className="text-xl text-center font-serif mb-4">YOU CAN ALWAYS CONTACT US BY</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <FaPhone className="text-3xl text-black mb-2" />
              <span className="font-semibold">TELEPHONE</span>
              <span className="text-red-600 text-lg font-bold">9346457270</span>
              <span className="text-xs text-gray-600">Phone lines are open 24 hours</span>
            </div>
            <div className="flex flex-col items-center">
              <FaWhatsapp className="text-3xl text-green-600 mb-2" />
              <span className="font-semibold">WHATSAPP</span>
              <span className="text-red-600 text-lg font-bold">9346457270</span>
              <span className="text-xs text-gray-600">Scan QR to open WhatsApp</span>
              <div className="mt-2 w-20 h-20 bg-gray-300 rounded flex items-center justify-center text-gray-500 text-xs">QR</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ConsultationModal; 