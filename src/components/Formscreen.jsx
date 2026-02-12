import React, { useState } from 'react';

const PlayerInput = ({ index }) => {
  const i = index + 1;

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm mb-4 transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";

  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-4";

  return (
    <div className="mt-4 border-t border-gray-200 pt-4">
      <h3 className="text-md font-bold mb-3 text-indigo-700">
        {`Player ${i} ${i === 1 ? "(IGL)" : i === 5 ? "(Optional)" : ""}`}
      </h3>

      <div className={formRowClass}>
        <input
          type="text"
          name={`Player ${i} Game Name`}
          className={inputClass}
          placeholder={`Player ${i} Game Name`}
          required={i !== 5}
        />

        <input
          type="text"
          name={`Player ${i} UID`}
          className={inputClass}
          placeholder={`Player ${i} UID`}
          required={i !== 5}
        />
      </div>
    </div>
  );
};

const Formscreen = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEET_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const urlEncodedData = new URLSearchParams();

    for (let [key, value] of formData.entries()) {
      if (key !== "terms") {
        urlEncodedData.append(key, value);
      }
    }

    try {
      const response = await fetch(SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("✅ Registration Successful!");
        e.target.reset();
        setSelectedGame('');
      } else {
        alert("❌ " + data.message);
      }

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Server error. Please try again later.");
    }

    setIsSubmitting(false);
  };

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900";

  const formRowClass = "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans bg-gray-50">
      <div className="max-w-5xl bg-white mx-auto my-10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-indigo-100/50">

        <h1 className="text-center text-4xl text-purple-800 sm:text-5xl font-extrabold pb-6 mb-8 border-b-2">
          🎮 Domination League 🎮
        </h1>

        <form onSubmit={handleSubmit}>

          {/* TEAM INFO */}
          <div className="bg-indigo-50 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-4 text-indigo-800">
              🏆 Team Information
            </h2>

            <div className={formRowClass}>
              <input
                type="text"
                name="Team Name"
                placeholder="Team Name"
                className={inputClass}
                required
              />

              <input
                type="text"
                name="College Name"
                placeholder="College Name"
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* LEADER INFO */}
          <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-4 text-emerald-800">
              👤 Leader Contact Information
            </h2>

            <div className={formRowClass}>
              <input
                type="text"
                name="Leader's Name"
                placeholder="Leader Name"
                className={inputClass}
                required
              />

              <input
                type="email"
                name="Leader Email"
                placeholder="Leader Email"
                className={inputClass}
                required
              />
            </div>

            <input
              type="tel"
              name="Leader Whatsapp Number"
              placeholder="WhatsApp Number"
              className={`${inputClass} mt-6`}
              required
            />
          </div>

          {/* EVENT & GAME */}
          <div className="bg-purple-50 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-4 text-purple-800">
              🗓️ Event & Game
            </h2>

            <div className={formRowClass}>
              <select name="Event" className={inputClass} required>
                <option value="">Select Event</option>
                <option value="Domination League | S01">
                  Domination League | S01
                </option>
              </select>

              <select
                name="Game"
                className={`${inputClass} cursor-pointer`}
                required
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
              >
                <option value="">Select Game</option>

                <option value="Free Fire">
                  Free Fire (5 Players)
                </option>

                <option value="BGMI" disabled>
                  BGMI (Coming Soon)
                </option>

                <option value="Counter Strike 2" disabled>
                  Counter Strike 2 (Coming Soon)
                </option>

                <option value="Valorant" disabled>
                  Valorant (Coming Soon)
                </option>

                <option value="Moba Legends" disabled>
                  Moba Legends (Coming Soon)
                </option>

                 <option value="BGMI" disabled>
                  FIFA (Coming Soon)
                </option>

                 <option value="BGMI" disabled>
                  Supercell Games (Coming Soon)
                </option>

                 <option value="BGMI" disabled>
                  Tekken 8 (Coming Soon)
                </option>

                 <option value="BGMI" disabled>
                  sdDota 2 (Coming Soon)
                </option>

              </select>
            </div>
          </div>
          
          {selectedGame === "Free Fire" && (
            <div className="bg-gray-100 p-6 rounded-2xl mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                👥 Team Players (5 Members)
              </h2>

              {Array.from({ length: 5 }).map((_, index) => (
                <PlayerInput key={index} index={index} />
              ))}
            </div>
          )}

          {/* TERMS */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm text-black">
              <input type="checkbox" name="terms" required />
                <span className="text-black">
                    I agree to tournament rules.
                </span>
            </label>
          </div>


          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold text-xl p-4 rounded-xl shadow-lg disabled:opacity-50"
            style={{
              background: isSubmitting
                ? '#dc2626'
                : 'linear-gradient(90deg, #4f46e5, #dc2626)',
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



//  -------------------------------------------------------------------------------
// import React from 'react';

// The main component must be named 'App' and be the default export.
// const App = () => {
//   return (
    // Outer container: Full screen, dark background, centered, using Inter font family
 //    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
      
  //     {/* Content Card: Modern, responsive container with shadow and subtle hover effect */}
//       <div className="
//         bg-gray-800 
//         p-8 md:p-12 
//         rounded-3xl 
//         shadow-2xl 
//         max-w-xl w-full 
   //      text-center 
      //   border border-gray-700 
        // transform 
        //  transition-all 
        //  duration-500 
        //  hover:scale-[1.01]
        //  hover:shadow-indigo-500/30
      //  ">
        
       //  {/* Decorative Element: Clock Icon (SVG) with a gentle pulse animation */}
        //  <div className="flex justify-center mb-6">
          //  <svg 
            //  xmlns="http://www.w3.org/2000/svg" 
       //      width="64" 
       //      height="64" 
     //        viewBox="0 0 24 24" 
       //      fill="none" 
       //     stroke="currentColor" 
        //     strokeWidth="1.5" 
       //      strokeLinecap="round" 
       //      strokeLinejoin="round" 
         //    className="text-indigo-400 animate-pulse"
     //      >
      //       <circle cx="12" cy="12" r="10"/>
    //         <polyline points="12 6 12 12 16 14"/>
    //       </svg>
  //       </div>

    //     {/* Main Title: Large, bold, responsive text with a vibrant gradient */}
 //        <h1 className="
    //       text-4xl sm:text-5xl lg:text-6xl 
  //         font-extrabold 
  //         text-transparent 
  //         bg-clip-text 
  //         bg-gradient-to-r from-indigo-400 to-cyan-300
    //       leading-tight 
     //      mb-4
 //        ">
  //         Forms Will Open in January 2026
//         </h1>

        // {/* Subtitle: Lighter weight supporting text */}
  //       <p className="
//           mt-4 
  //         text-xl sm:text-2xl 
  //         font-light 
//           text-gray-300 
//           opacity-90
//         ">
 //          Stay tuned for official updates!
//         </p>


//       </div>
//     </div>
//   );
// };

// export default App;



// For University 

  //   <div className={`${formSectionBaseClass} bg-purple-50 border-purple-200`}>
  //           <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-800">
 //              🎓 College Name
 //            </h2>
//            <div className={formRowClass}>
//               <div>
//                <label className={labelClass}> Select Your University / College</label>
  //               <select name="College Name" className={inputSelectClass} required>
//                  <option value="">-- Select Your University / College --</option>
//                  <option value="Graphic Era Hill University, Dehradun"> Graphic Era Hill University, Dehradun</option>
 //                 <option value="Graphic Era Hill University, Haldwani"> Graphic Era Hill University, Haldwani</option>
 //                  <option value="Graphic Era Hill University, Bhimtal"> Graphic Era Hill University, Bhimtal</option>
 //                  <option value="Graphic Era University, Dehradun"> Graphic Era (Deemed To Be) University, Dehradun </option>
//                 </select>
//              </div>
 //            </div>
 //         </div>












