import React, { useState } from 'react';

const PlayerInput = ({ game, index }) => {
  const i = index + 1;
  
  const inputClass = "w-full p-3 rounded-lg border border-gray-300 mb-3 focus:border-indigo-500 focus:outline-none transition duration-300";
  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-4";
  
  if (game === "freefire" || game === "bgmi") {
    return (
      <div className="mt-3">
        <div className={formRowClass}>
          <input type="text" className={inputClass} placeholder={`Player ${i} Real Name`} required />
          <input type="text" className={inputClass} placeholder={`Player ${i} ${game === "freefire" ? "UID" : "ID"}`} required />
        </div>
        <input type="text" className={inputClass} placeholder={`Player ${i} Contact Number`} required />
      </div>
    );
  } else if (game === "valorant") {
    return (
      <div className="mt-3">
        <div className={formRowClass}>
          <input type="text" className={inputClass} placeholder={`Player ${i} Real Name`} required />
          <input type="text" className={inputClass} placeholder={`Player ${i} In-Game Name`} required />
        </div>
        <div className={formRowClass}>
          <input type="text" className={inputClass} placeholder={`Player ${i} #Tag`} required />
          <input type="text" className={inputClass} placeholder={`Player ${i} Contact Number`} required />
        </div>
      </div>
    );
  } else if (game === "csgo") {
    return (
      <div className="mt-3">
        <div className={formRowClass}>
          <input type="text" className={inputClass} placeholder={`Player ${i} Real Name`} required />
          <input type="text" className={inputClass} placeholder={`Player ${i} In-Game Name`} required />
        </div>
        <input type="text" className={inputClass} placeholder={`Player ${i} Contact Number`} required />
      </div>
    );
  }
  return null;
};

const Formscreen = () => {
  const [selectedGame, setSelectedGame] = useState('');

  const numPlayers = (selectedGame === "valorant" || selectedGame === "csgo") ? 5 : 4;
  const isPlayerSectionVisible = !!selectedGame;

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Form Submitted! (Logic to send data goes here)");
  };

  const containerClass = "max-w-4xl bg-white mx-auto my-10 rounded-xl p-8 shadow-xl";
  const formSectionBaseClass = "rounded-lg p-5 mb-6";
  const labelClass = "block font-semibold mb-1 text-gray-700";
  const inputSelectClass = "w-full p-3 rounded-lg border border-gray-300 mb-3 transition duration-300 focus:border-indigo-500 focus:outline-none";
  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-4";
  
  return (
    <div className="min-h-screen  p-4 sm:p-8 font-poppins">
      <div className={containerClass}>
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold pb-4" 
            style={{ 
                background: 'linear-gradient(90deg, #5f6af8, #b61a6c)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent'
            }}
        >
          Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          
          <div className={`${formSectionBaseClass} bg-blue-50 border-l-4 border-blue-600`}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              🏆 Team Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Team Name *</label>
                <input type="text" className={inputSelectClass} placeholder="Enter team name" required />
              </div>
              <div>
                <label className={labelClass}>College Name *</label>
                <input type="text" className={inputSelectClass} placeholder="Enter college name" required />
              </div>
            </div>
          </div>

          <div className={`${formSectionBaseClass} bg-green-50 border-l-4 border-green-500`}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              👤 Leader Contact Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Leader Name *</label>
                <input type="text" className={inputSelectClass} placeholder="Enter leader name" required />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input type="email" className={inputSelectClass} placeholder="team@example.com" required />
              </div>
            </div>
            <label className={labelClass}>WhatsApp Number *</label>
            <input type="text" className={inputSelectClass} placeholder="+91 9875257849" required />
          </div>

      
          <div className={`${formSectionBaseClass} bg-purple-50 border-l-4 border-purple-500`}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              🗓️ Choose Event
            </h2>
            <label className={labelClass}>Select Event *</label>
            <select className={inputSelectClass} id="eventList" required>
              <option value="">-- Select Event --</option>
              <option value="endgame2025">Endgame 2025</option>
              <option value="campusclash">Campus Clash</option>
            </select>
          </div>

        
          <div className={`${formSectionBaseClass} bg-purple-50 border-l-4 border-purple-500`}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              🎮 Choose Game
            </h2>
            <label className={labelClass}>Select Game *</label>
            <select className={inputSelectClass} id="eventSelect" required onChange={handleGameChange} value={selectedGame}>
              <option value="">-- Select Game --</option>
              <option value="freefire">Free Fire</option>
              <option value="bgmi">BGMI</option>
              <option value="valorant">Valorant</option>
              <option value="csgo">CS:GO</option>
            </select>
          </div>

         
          <div 
            className={`${formSectionBaseClass} bg-gray-100 border-l-4 border-gray-500`} 
            style={{ display: isPlayerSectionVisible ? 'block' : 'none' }}
          >
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              👥 Team Players
            </h2>
            <div id="playerFields">
              {isPlayerSectionVisible && Array.from({ length: numPlayers }).map((_, index) => (
                <PlayerInput key={index} game={selectedGame} index={index} />
              ))}
            </div>
          </div>

          <div className={`${formSectionBaseClass} bg-red-50 border-l-4 border-red-600`}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-800">
              🛡️ Declaration & Terms
            </h2>
            <label className="flex items-start space-x-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" required className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
              <span>
                I declare that all information provided is accurate and I agree to abide by the tournament rules and regulations. 
                I understand that false information may lead to disqualification.
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full text-white font-semibold text-lg p-3 rounded-lg border-none cursor-pointer transition duration-300 hover:opacity-90"
            style={{
                background: 'linear-gradient(90deg, #4f46e5, #dc2626)',
            }}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formscreen;