import React, { useState } from 'react';

const PlayerInput = ({ game, index }) => {
  const i = index + 1;

  const inputClass = "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm mb-4 transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";
  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-4";

  const getPlayerIdPlaceholder = (game) => {
    switch (game) {
      case "freefire":
        return `Player ${i} UID`;
      case "bgmi":
        return `Player ${i} ID`;
      case "valorant":
      case "csgo":
        return `Player ${i} In-Game Name`;
      default:
        return `Player ${i} ID/Name`;
    }
  };

  const getIdNameAttribute = (game) => {
    switch (game) {
      case "freefire":
        return `player${i}UID`;
      case "bgmi":
        return `player${i}ID`;
      case "valorant":
        return `player${i}InGameName`;
      case "csgo":
        return `player${i}InGameName`;
      default:
        return `player${i}ID`;
    }
  };

  const basicInputs = (
    <div className={formRowClass}>
      <input
        type="text"
        name={`player ${i} Game Name`}
        className={inputClass}
        placeholder={`Player ${i} Game Name`}
        required
      />
      <input
        type="text"
        name={getIdNameAttribute(game)}
        className={inputClass}
        placeholder={getPlayerIdPlaceholder(game)}
        required
      />
    </div>
  );

  if (game === "freefire" || game === "bgmi" || game === "csgo") {
    return (
      <div className="mt-4 border-t border-gray-200 pt-4" key={index}>
        <h3 className="text-md font-bold mb-3 text-indigo-700">{`Player ${i}`}</h3>
        {basicInputs}
      </div>
    );
  } else if (game === "valorant") {
    return (
      <div className="mt-4 border-t border-gray-200 pt-4" key={index}>
        <h3 className="text-md font-bold mb-3 text-indigo-700">{`Player ${i}`}</h3>
        {basicInputs}
        <div className={formRowClass}>
          <input
            type="text"
            name={`player${i}Tag`}
            className={inputClass}
            placeholder={`Player ${i} #Tag (e.g., #ASIA)`}
            required
          />
          <div className="hidden md:block"></div>
        </div>
      </div>
    );
  }
  return null;
};

const Formscreen = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEET_URL = process.env.SECRET_API_URL;

  const numPlayers = (selectedGame === "valorant" || selectedGame === "csgo") ? 5 : 4;
  const isPlayerSectionVisible = !!selectedGame;

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    let urlEncodedData = '';

    for (let [key, value] of formData.entries()) {
      if (key !== 'terms') {
        urlEncodedData += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
      }
    }
    urlEncodedData = urlEncodedData.slice(0, -1);

    fetch(SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text();
      })
      .then(data => {
        alert("Registration Successful! Server Response: " + data);
        e.target.reset();
        setSelectedGame('');
      })
      .catch(error => {
        console.error("Submission Error:", error);
        alert("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerClass = "max-w-5xl bg-white mx-auto my-10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-indigo-100/50";
  const formSectionBaseClass = "rounded-2xl p-6 mb-8 border border-gray-100 transition duration-500 hover:shadow-lg";
  const labelClass = "block font-medium mb-1 text-gray-700 text-sm";
  const inputSelectClass = "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";
  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans ">
      <div className={containerClass}>
        <h1
          className="text-center text-4xl sm:text-5xl font-extrabold pb-6 mb-8 border-b-2 border-indigo-100"
          style={{
            background: 'linear-gradient(90deg, #4f46e5, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          🎮 Tournament Registration Form
        </h1>

        <form onSubmit={handleSubmit}>

          <div className={`${formSectionBaseClass} bg-indigo-50 border-indigo-200`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-800">
              🏆 Team Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Team Name *</label>
                <input type="text" name="teamName" className={inputSelectClass} placeholder="Enter your official team name" required />
              </div>
              <div>
                <label className={labelClass}>College Name *</label>
                <input type="text" name="collegeName" className={inputSelectClass} placeholder="Enter your College/University name" required />
              </div>
            </div>
          </div>

          <div className={`${formSectionBaseClass} bg-emerald-50 border-emerald-200`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-800">
              👤 Leader Contact Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Leader Name *</label>
                <input type="text" name="leaderName" className={inputSelectClass} placeholder="Team Leader's Full Name" required />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input type="email" name="leaderEmail" className={inputSelectClass} placeholder="leader@example.com" required />
              </div>
            </div>
            <div className='mt-6'>
              <label className={labelClass}>WhatsApp Number *</label>
              <input type="tel" name="leaderWhatsapp" className={inputSelectClass} placeholder="+91 9876543210 (For communication)" required />
            </div>
          </div>

          <div className={`${formSectionBaseClass} bg-purple-50 border-purple-200`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-800">
              🗓️ Choose Event & Game
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Select Event *</label>
                <select name="event" className={inputSelectClass} id="eventList" required>
                  <option value="">-- Select Event --</option>
                  <option value="campusclash">Campus Clash</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Select Game *</label>
                <select name="game" className={inputSelectClass} id="gameSelect" required onChange={handleGameChange} value={selectedGame}>
                  <option value="">-- Select Game --</option>
                  <option value="freefire">Free Fire (4 Players)</option>
                  <option value="bgmi">BGMI (4 Players)</option>
                </select>
              </div>
            </div>
          </div>

          <div
            className={`${formSectionBaseClass} bg-gray-100 border-gray-200`}
            style={{ display: isPlayerSectionVisible ? 'block' : 'none' }}
          >
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800">
              👥 Team Players ({numPlayers} members)
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Please provide identification details for all {numPlayers} team members.
              All communication will be through the **Team Leader's WhatsApp Number**.
            </p>
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
              <input
                type="checkbox"
                name="terms"
                value="Agreed"
                required
                className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 flex-shrink-0"
              />
              <span className="leading-relaxed">
                I declare that all information provided is accurate and I agree to abide by the tournament rules and regulations.
                I understand that submitting false information may lead to **immediate disqualification** without refund.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold text-xl p-4 mt-6 rounded-xl border-none cursor-pointer transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: isSubmitting ? '#dc2626' : 'linear-gradient(90deg, #4f46e5, #dc2626)',
            }}
          >
            {isSubmitting ? 'Submitting...' : '🚀 Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formscreen;



