import React, { useState } from 'react';

function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
    e.target.reset();
  };

  return (
    <section id="register" className="bg-gradient-to-b from-[#7c3aed]/10 to-transparent py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold">Team / Player Registration</h2>
          <p className="text-gray-400 text-sm mt-1">Fill the form below to register for tournaments and events. We'll follow up on the provided contact details.</p>

          <form id="regForm" className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <input required name="team" placeholder="Team Name (or Player)" className="p-3 bg-gray-900 rounded outline-none" />
            <input required name="captain" placeholder="Captain Name" className="p-3 bg-gray-900 rounded outline-none" />
            <input required name="email" type="email" placeholder="Email" className="p-3 bg-gray-900 rounded outline-none" />
            <input name="phone" placeholder="Phone" className="p-3 bg-gray-900 rounded outline-none" />
            <select name="game" className="p-3 bg-gray-900 rounded outline-none">
              <option value="valorant">Valorant</option>
              <option value="csgo">CS:GO</option>
              <option value="pubg">PUBG Mobile</option>
              <option value="others">Others</option>
            </select>
            <input name="city" placeholder="City / College" className="p-3 bg-gray-900 rounded outline-none" />

            <textarea name="notes" rows="3" placeholder="Additional notes (availability, coach, etc.)" className="sm:col-span-2 p-3 bg-gray-900 rounded outline-none"></textarea>

            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" className="bg-[#7c3aed] px-5 py-3 rounded font-semibold">Submit Registration</button>
              <button type="reset" className="px-5 py-3 border rounded">Reset</button>
            </div>
          </form>

          <p id="regMsg" className={`text-sm text-green-400 mt-3 ${!isSubmitted ? 'hidden' : ''}`}>
            Thanks — your registration was received. We'll contact you shortly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;