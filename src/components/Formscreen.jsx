import React, { useState } from "react";

const PlayerInput = ({ index }) => {
  const i = index + 1;
  const isOptional = i === 5;

  const inputClass =
    "w-full p-3 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="font-bold text-indigo-700 mb-3">
        Player {i} {i === 1 ? "(IGL)" : isOptional ? "(Optional)" : ""}
      </h3>

      <input
        type="text"
        name={`Player ${i} Game Name`}
        placeholder={`Player ${i} Game Name`}
        className={inputClass}
        required={!isOptional}
      />

      <input
        type="text"
        name={`Player ${i} UID`}
        placeholder={`Player ${i} UID`}
        className={inputClass}
        required={!isOptional}
      />
    </div>
  );
};

const Formscreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SHEET_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const body = new URLSearchParams(formData).toString();

    try {
      const res = await fetch(SHEET_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Registration Successful");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Domination League Registration
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Team Info */}
          <input
            type="text"
            name="Team Name"
            placeholder="Team Name"
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          {/* Leader Info */}
          <input
            type="text"
            name="Leader Name"
            placeholder="Leader Name"
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          <input
            type="email"
            name="Leader Email"
            placeholder="Leader Email"
            className="w-full p-3 border rounded-xl mb-4"
            required
          />

          <input
            type="tel"
            name="Leader Whatsapp"
            placeholder="WhatsApp Number"
            className="w-full p-3 border rounded-xl mb-6"
            required
          />

          {/* Players */}
          {[...Array(5)].map((_, index) => (
            <PlayerInput key={index} index={index} />
          ))}

          {/* Terms */}
          <div className="mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              I agree to tournament rules
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-indigo-600 text-white p-4 rounded-xl font-bold"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formscreen;
