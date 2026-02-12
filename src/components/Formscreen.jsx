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
      default:
        return `Player ${i} ID/Name`;
    }
   };

   const getIdNameAttribute = (game) => {
     switch (game) {
       case "freefire":
         return `Player ${i} UID`;
       case "bgmi":
        return `Player ${i} ID`;
       default:
         return `Player ${i} ID`;
     }
   };

   const basicInputs = (
     <div className={formRowClass}>
       <input
         type="text"
         name={`Player ${i} Game Name`}
         className={inputClass}
         placeholder={`Player ${i} Game Name`}
        required
      />
     <input
      readOnly
        type="text"
        name={getIdNameAttribute(game)}
        className={inputClass}
        placeholder={getPlayerIdPlaceholder(game)}
        required
       />
    </div>
   );

  if (game === "freefire" || game === "bgmi") {
     return (
       <div className="mt-4 border-t border-gray-200 pt-4" key={index}>
<h3 className="text-md font-bold mb-3 text-indigo-700">{`Player ${i}`}</h3>
         {basicInputs}
      </div>
     );
   }
   return null;
 };

 const Formscreen = () => {
   const [selectedGame, setSelectedGame] = useState('');
   const [isSubmitting, setIsSubmitting] = useState(false);

   const numPlayers = 4;
   const isPlayerSectionVisible = !!selectedGame;

   const SHEET_URL = import.meta.env.VITE_API_URL;

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
       const encodedKey = encodeURIComponent(key);
       const encodedValue = encodeURIComponent(value);

       if (key !== 'terms') {
         urlEncodedData += `${encodedKey}=${encodedValue}&`;
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
         alert("Tournament Registration Form Will Open On Jan 2026");
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
          className="text-center text-4xl text-purple-800 sm:text-5xl font-extrabold pb-6 mb-8 border-b-2 "
         >
           🎮 Early Registration's Open🎮
         </h1>
        
         <form onSubmit={handleSubmit}>

           <div className={`${formSectionBaseClass} bg-indigo-50 border-indigo-200`}>
             <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-800">
               🏆 Team Information
             </h2>

             <div className={formRowClass}>
               <div>
                 <label className={labelClass}>Team Name *</label>
                 <input type="text" name="Team Name" className={inputSelectClass} placeholder="Enter your official team name" required />
               </div>
             </div>
           </div>

           
           <div className={`${formSectionBaseClass} bg-emerald-50 border-emerald-200`}>
             <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-800">
               👤 Leader Contact Information
             </h2>
             <p className="text-sm text-gray-600 mb-4">
               All communication will be through the <b> Team Leader's WhatsApp Number & Email</b>.
            </p>
            
             <div className={formRowClass}>
               <div>
                 <label className={labelClass}>Leader Name *</label>
                <input type="text" name="Leader's Name" className={inputSelectClass} placeholder="Team Leader's Full Name" required />
               </div>
               <div>
                 <label className={labelClass}>Email Address *</label>
                 <input type="email" name="Leader Email" className={inputSelectClass} placeholder="leader@example.com" required />
               </div>
             </div>

           <div className='mt-6'>
               <label className={labelClass}>WhatsApp Number *</label>
              <input type="tel" name="Leader Whatsapp Number" className={inputSelectClass} placeholder="+91 9876543210 (For communication)" required />
             </div>
           </div>

       
           <div className={`${formSectionBaseClass} bg-purple-50 border-purple-200`}>
             <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-800">
              🗓️ Choose Event & Game
             </h2>
            <div className={formRowClass}>
               <div>
                <label className={labelClass}>Select Event *</label>
                 <select name="Event" className={inputSelectClass} required>
                   <option value="">-- Select Event --</option>
                  <option value="Dominion League"> Uttarakhand Esports Festival 2026 (UEF-2026)</option>
              </select>
               </div>
               <div>
                <label className={labelClass}>Select Game *</label>
                 <select name="Game" className={inputSelectClass} required onChange={handleGameChange} value={selectedGame}>
                   <option value="">-- Select Game --</option>
                  <option value="freefire">Free Fire (5 Players) </option>
                 </select>
              </div>
             </div>
          </div>

       
          <div
             className={`${formSectionBaseClass} bg-gray-100 border-gray-200`}
             style={{ display: isPlayerSectionVisible ? 'block' : 'none' }}
           >
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800">
               👥 Team Players (5 members)
             </h2>

            <p className="text-sm text-gray-600 mb-4">
               Provide identification details for all players.  
               All communication will be through the <b>Team Leader's WhatsApp Number</b>.
            </p>

             <div id="playerFields">
               {isPlayerSectionVisible &&
                 Array.from({ length: numPlayers }).map((_, index) => (
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
              className="mt-1 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
             />
              <span>
                This Registration Form is for upcoming online event Hosted by : UK ESPORTS HUB
                I confirm all information is accurate and agree to tournament rules.
                False information may result in disqualification. 
              </span>
            </label>
           </div>

        
           <button
             type="submit"
             disabled={isSubmitting}
             className="w-full text-white font-bold text-xl p-4 mt-6 rounded-xl border-none cursor-pointer transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
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




