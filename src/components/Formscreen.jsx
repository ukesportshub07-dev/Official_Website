import React, { useState } from "react";

const PlayerInput = ({ game, index }) => {
  const i = index + 1;

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm mb-4 transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";
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
      <div className="mt-4 border-t border-gray-200 pt-4">
        <h3 className="text-md font-bold mb-3 text-indigo-700">{`Player ${i}`}</h3>
        {basicInputs}
      </div>
    );
  } else if (game === "valorant") {
    return (
      <div className="mt-4 border-t border-gray-200 pt-4">
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
  const [selectedGame, setSelectedGame] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEET_URL = import.meta.env.VITE_API_URL;

  const numPlayers =
    selectedGame === "valorant" || selectedGame === "csgo" ? 5 : 4;
  const isPlayerSectionVisible = !!selectedGame;

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  // -----------------------------
  // 🔥 DATA MAPPER (FULLY INTEGRATED)
  // -----------------------------
  const mapFormData = (formData) => {
    const game = formData.get("game");
    const numPlayers = game === "valorant" || game === "csgo" ? 5 : 4;

    const data = {
      teamName: formData.get("teamName"),
      collegeName: formData.get("collegeName"),
      leaderName: formData.get("leaderName"),
      leaderEmail: formData.get("leaderEmail"),
      leaderWhatsapp: formData.get("leaderWhatsapp"),
      event: formData.get("event"),
      game,
      players: [],
    };

    for (let i = 1; i <= numPlayers; i++) {
      const playerGameName = formData.get(`player ${i} Game Name`);
      const ffUID = formData.get(`player${i}UID`);
      const bgmiID = formData.get(`player${i}ID`);
      const ign = formData.get(`player${i}InGameName`);
      const valorantTag = formData.get(`player${i}Tag`);

      let playerId = null;
      if (game === "freefire") playerId = ffUID;
      else if (game === "bgmi") playerId = bgmiID;
      else if (game === "valorant" || game === "csgo") playerId = ign;

      data.players.push({
        index: i,
        gameName: playerGameName,
        id: playerId,
        tag: game === "valorant" ? valorantTag : null,
      });
    }

    return data;
  };

  // -----------------------------
  // 🔥 SUBMIT HANDLER (WITH FLATTENING)
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // 1. Convert messy field names -> clean structured object
    const mapped = mapFormData(formData);

    // 2. Flatten for Google Sheets
    const flatPayload = {
      teamName: mapped.teamName,
      collegeName: mapped.collegeName,
      leaderName: mapped.leaderName,
      leaderEmail: mapped.leaderEmail,
      leaderWhatsapp: mapped.leaderWhatsapp,
      event: mapped.event,
      game: mapped.game,
    };

    mapped.players.forEach((p, index) => {
      const i = index + 1;
      flatPayload[`player${i}Name`] = p.gameName;
      flatPayload[`player${i}Id`] = p.id;
      if (mapped.game === "valorant") {
        flatPayload[`player${i}Tag`] = p.tag;
      }
    });

    const urlEncodedData = new URLSearchParams(flatPayload).toString();

    fetch(SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then((data) => {
        alert("Registration Successful! Server Response: " + data);
        e.target.reset();
        setSelectedGame("");
      })
      .catch((error) => {
        console.error("Submission Error:", error);
        alert("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // -----------------------------------

  const containerClass =
    "max-w-5xl bg-white mx-auto my-10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-indigo-100/50";
  const formSectionBaseClass =
    "rounded-2xl p-6 mb-8 border border-gray-100 transition duration-500 hover:shadow-lg";
  const labelClass = "block font-medium mb-1 text-gray-700 text-sm";
  const inputSelectClass =
    "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";
  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans ">
      <div className={containerClass}>
        <h1 className="text-center text-4xl text-purple-800 sm:text-5xl font-extrabold pb-6 mb-8 border-b-2">
          🎮 Tournament Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          {/* ==================== TEAM INFO ==================== */}
          <div className={`${formSectionBaseClass} bg-indigo-50 border-indigo-200`}>
            <h2 className="text-xl font-bold mb-4 text-indigo-800">
              🏆 Team Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Team Name *</label>
                <input
                  type="text"
                  name="teamName"
                  className={inputSelectClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>College Name *</label>
                <input
                  type="text"
                  name="collegeName"
                  className={inputSelectClass}
                  required
                />
              </div>
            </div>
          </div>

          {/* ==================== LEADER INFO ==================== */}
          <div className={`${formSectionBaseClass} bg-emerald-50 border-emerald-200`}>
            <h2 className="text-xl font-bold mb-4 text-emerald-800">
              👤 Leader Contact Information
            </h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Leader Name *</label>
                <input type="text" name="leaderName" className={inputSelectClass} required />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" name="leaderEmail" className={inputSelectClass} required />
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>WhatsApp Number *</label>
              <input type="tel" name="leaderWhatsapp" className={inputSelectClass} required />
            </div>
          </div>

          {/* ==================== GAME ==================== */}
          <div className={`${formSectionBaseClass} bg-purple-50 border-purple-200`}>
            <h2 className="text-xl font-bold mb-4 text-purple-800">🗓️ Choose Event & Game</h2>
            <div className={formRowClass}>
              <div>
                <label className={labelClass}>Select Event *</label>
                <select name="event" className={inputSelectClass} required>
                  <option value="">-- Select Event --</option>
                  <option value="Battel Era 2.0">Battel Era 2.0</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Select Game *</label>
                <select
                  name="game"
                  className={inputSelectClass}
                  required
                  onChange={handleGameChange}
                  value={selectedGame}
                >
                  <option value="">-- Select Game --</option>
                  <option value="freefire">Free Fire (4 Players)</option>
                  <option value="bgmi">BGMI (4 Players)</option>
                </select>
              </div>
            </div>
          </div>

          {/* ==================== PLAYERS ==================== */}
          <div
            className={`${formSectionBaseClass} bg-gray-100 border-gray-200`}
            style={{ display: isPlayerSectionVisible ? "block" : "none" }}
          >
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              👥 Team Players ({numPlayers} members)
            </h2>

            <div id="playerFields">
              {isPlayerSectionVisible &&
                Array.from({ length: numPlayers }).map((_, index) => (
                  <PlayerInput key={index} game={selectedGame} index={index} />
                ))}
            </div>
          </div>

          {/* ==================== TERMS ==================== */}
          <div className={`${formSectionBaseClass} bg-red-50 border-l-4 border-red-600`}>
            <h2 className="text-xl font-bold mb-3 text-gray-800">🛡️ Declaration</h2>
            <label className="flex items-start space-x-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded"
              />
              <span>
                I confirm all information is accurate and agree to tournament rules.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold text-xl p-4 mt-6 rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50"
            style={{
              background: isSubmitting
                ? "#dc2626"
                : "linear-gradient(90deg, #4f46e5, #dc2626)",
            }}
          >
            {isSubmitting ? "Submitting..." : "🚀 Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formscreen;
