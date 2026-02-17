import React, { useState } from "react";
import whatsappIcon from "/logos/whatsapp.png";

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
  const [selectedGame, setSelectedGame] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEET_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);
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
        alert("✅ Registration Successful! Our team will contact you within 38 hours.");
        form.reset();
        setSelectedGame("");
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
    <div className="min-h-screen p-4 sm:p-8 font-sans ">

      <div className="max-w-5xl bg-white/95 backdrop-blur-lg mx-auto my-10 rounded-3xl p-6 sm:p-10 shadow-2xl">

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
                placeholder="Team Name (Required)"
                className={inputClass}
                required
              />

              <input
                type="text"
                name="College Name"
                placeholder="College Name (Optional)"
                className={inputClass}
              />
            </div>
          </div>

          {/* LEADER INFO */}
          <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-4 text-emerald-800">
              👤 Leader Contact Information (Required)
            </h2>

            <div className={formRowClass}>
              {/* Gmail Validation */}
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
                placeholder="leader@gmail.com"
                className={inputClass}
                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                title="Please enter a valid Gmail address"
                required
              />
            </div>

            {/* Mobile Number with +91 */}
            <div className="mt-6">
              <label className="block font-medium mb-1 text-gray-700 text-sm">
                WhatsApp Number *
              </label>

              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-100 text-gray-700 font-medium">
                  +91
                </span>

                <input
                  type="tel"
                  name="Leader Whatsapp Number"
                  placeholder="9876543210"
                  className="w-full p-3 rounded-r-xl border border-gray-200 bg-white shadow-sm transition duration-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none text-gray-900"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength="10"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  title="Enter valid 10-digit Indian number"
                  required
                />
              </div>
            </div>
          </div>

          {/* EVENT & GAME */}
          <div className="bg-purple-50 p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-4 text-purple-800">
              🗓️ Event & Game (Required)
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
                <option value="Free Fire">Free Fire (5 Players)</option>
                <option disabled>BGMI (Coming Soon)</option>
                <option disabled>Counter Strike 2 (Coming Soon)</option>
                <option disabled>Valorant (Coming Soon)</option>
                <option disabled>Moba Legends (Coming Soon)</option>
              </select>
            </div>
          </div>

          {/* PLAYERS */}
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
          
          <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
            <label className="flex items-center space-x-2 text-sm text-black cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                required
                className="accent-black w-4 h-4"
              />
              <span className="font-medium">
  I confirm that I have read, understood, and agree to comply with all tournament rules, regulations, and decisions made by the organizers. I acknowledge that any violation may result in penalties, disqualification, or removal from the event.
</span>
            </label>
          </div>

          

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-bold text-xl p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-indigo-600 via-purple-600 to-red-600 hover:shadow-red-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              "🚀 Submit Registration"
            )}
          </button>

         <button
  type="button"
  onClick={() =>
    window.open(
      "https://chat.whatsapp.com/BjBsBIji9py0vjXhUz4dig",
      "_blank"
    )
  }
  className="w-full mt-4 text-white font-bold text-lg p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-3"
>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    className="w-6 h-6"
  />
  Click To Join WhatsApp
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




















