import React, { useState } from 'react';


const SCRIPT_URL = import.meta.env.VITE_API2_URL;;

function Contact() {

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();

      if (result === "Success") {
        setStatus('success');
        e.target.reset(); 
        setTimeout(() => setStatus('idle'), 6000); 
      } else {
       
        throw new Error(result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000); 
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2 text-sm">For sponsorships, hosting or partnerships — reach out and we'll reply within 48 hours.</p>

          <ul className="mt-4 text-sm text-gray-300 space-y-2">
            <li>📧 email: ukesportshub07@gmail.com</li>
            <li>📱 whatsapp: +91 97607 02302</li>
            <li>📍 Dehradun, Uttarakhand</li>
          </ul>
        </div>

        <form id="contactForm" className="p-6 bg-gray-800 rounded-lg" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" className="w-full p-3 bg-gray-900 rounded outline-none" required />
          <input name="email" placeholder="Email" className="w-full p-3 bg-gray-900 rounded mt-3 outline-none" required />
          <textarea name="message" placeholder="Message" rows="5" className="w-full p-3 bg-gray-900 rounded mt-3 outline-none" required></textarea>
          
          <div className="mt-3 flex gap-3">
            <button 
              className="bg-[#7c3aed] px-4 py-2 rounded font-semibold disabled:bg-gray-500" 
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            <button className="px-4 py-2 border rounded" type="reset">Reset</button>
          </div>

          
          <p id="contactMsg" className={`text-sm text-green-400 mt-3 ${status !== 'success' ? 'hidden' : ''}`}>
            Message sent — we'll be in touch.
          </p>

        
          <p id="contactError" className={`text-sm text-red-400 mt-3 ${status !== 'error' ? 'hidden' : ''}`}>
            Failed to send message. Please try again.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;


