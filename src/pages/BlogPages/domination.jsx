import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";

const Domination = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Replace with real API call
        // const res = await fetch("/api/blog/views/123");
        // const data = await res.json();
        // setViews(data.views);
        setViews(1243);
      } catch (error) {
        console.error(error);
      }
    };
    fetchViews();
  }, []);

  const blog = {
    title: "Domination League Season 01",
    coverImage: "/logos/domination_leauge.webp",
    author: "Paras Bisht",
    date: "February 21, 2026",
    source: "UK Esports Hub",
    description:
      "Domination League a online free fire event hosted by UK ESPORTS HUB.",
  };

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.coverImage} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            image: blog.coverImage,
            author: { "@type": "Person", name: blog.author },
            publisher: { "@type": "Organization", name: blog.source },
            datePublished: blog.date,
          })}
        </script>
      </Helmet>

      {/* PAGE WRAPPER */}
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />


        {/* HERO / COVER */}
        <div className="relative w-full h-80 sm:h-96 overflow-hidden" >
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover brightness-50"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

          {/* Title over image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Online Event
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* ARTICLE */}
        <article className="max-w-4xl mx-auto px-6 py-10">

          {/* META ROW */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-b border-gray-700 pb-6 mb-8">
            {/* Author avatar */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                {blog.author.charAt(0)}
              </div>
              <span className="text-gray-200 font-medium">{blog.author}</span>
            </div>
            <span className="text-gray-600">·</span>
            <span>{blog.date}</span>
            <span className="text-gray-600">·</span>
            <span>{blog.source}</span>
            <span className="text-gray-600">·</span>
            {/* View counter */}
            <span className="flex items-center gap-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {views.toLocaleString()} views
            </span>
          </div>

          {/* DESCRIPTION / LEAD */}
          <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-indigo-500 pl-5 mb-10 italic">
            {blog.description}
          </p>

          {/* CONTENT */}
          <section className="space-y-8 text-gray-300 text-base leading-8">

  {/* Intro */}
  <div className="space-y-4">
    <p>
      The esports scene is growing faster than ever, and with it comes new opportunities for players to prove their skills, build their reputation, and compete at a higher level.
      <span className="font-semibold text-white"> Domination League Season 01 </span>, organized by UK Esports Hub, is designed to provide exactly that — a structured, competitive, and professional platform for rising and established teams.
    </p>

    <p>
      Whether you're an aspiring competitive player or part of an organized team, Domination League is your chance to step into a serious competitive environment.
    </p>
  </div>

  {/* Inline image */}
  <figure className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-700">
    <img
      src="/logos/domination_leauge.webp"
      alt="Domination League Season 01"
      className="w-full object-cover max-h-96"
    />
    <figcaption className="bg-gray-800 text-gray-500 text-xs px-4 py-2 text-center">
      Domination League Season 01
    </figcaption>
  </figure>

  {/* What is Domination League */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      What is Domination League?
    </h2>

    <p>
      Domination League is an online esports tournament built to create real competitive opportunities for players across India. Unlike casual scrims or open matches, this league focuses on structured competition, organized scheduling, and live broadcasts, making it a professional experience for participants.
    </p>

    <p>
      The league is designed with one clear goal: <span className="font-semibold text-white">to identify, showcase, and promote competitive talent.</span>
      Participants will compete against serious teams, test their strategies, and gain valuable experience in a true tournament environment.
    </p>
  </div>

  {/* Why it matters */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Why Domination League Matters
    </h2>

    <p>
      Most players remain stuck in casual matches without exposure or real competitive growth. Domination League changes that.
    </p>

    <ol className="list-decimal list-inside space-y-3">
      <li>
        <span className="font-semibold text-white">Professional Competitive Environment</span><br />
        Structured league matches improve discipline, teamwork, and consistency.
      </li>

      <li>
        <span className="font-semibold text-white">Live Streaming Exposure</span><br />
        All matches will be streamed live on the official UK Esports Hub YouTube channel, giving players visibility and recognition.
      </li>

      <li>
        <span className="font-semibold text-white">Skill Development</span><br />
        Real competition exposes weaknesses and accelerates improvement.
      </li>

      <li>
        <span className="font-semibold text-white">Community Growth</span><br />
        The league strengthens the esports ecosystem by connecting players, teams, and organizers.
      </li>
    </ol>
  </div>

  {/* Quote */}
  <blockquote className="bg-gray-800 border-l-4 border-indigo-500 rounded-r-xl px-6 py-5 text-indigo-300 text-lg font-semibold italic">
    "Esports isn't just gaming anymore — it's careers, culture, and community."
  </blockquote>

  {/* Who should participate */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Who Should Participate?
    </h2>

    <ul className="list-disc list-inside space-y-2">
      <li>Competitive teams looking for exposure</li>
      <li>Players transitioning from casual to competitive</li>
      <li>Teams preparing for higher-tier tournaments</li>
      <li>Players building their reputation in esports</li>
    </ul>

    <p className="font-semibold text-white">
      If you are serious about esports, this is not optional — it is necessary.
    </p>

    <p>
      Playing only scrims will not get you recognized. Playing leagues will.
    </p>
  </div>

  {/* Organizer */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Organized by UK Esports Hub
    </h2>

    <p>
      UK Esports Hub is actively building competitive opportunities and strengthening the esports ecosystem, especially for emerging players. The goal is simple: create platforms where talent can compete, grow, and get noticed.
    </p>

    <p>
      Domination League Season 01 is a major step toward that mission.
    </p>
  </div>

  {/* Final words */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Final Words
    </h2>

    <p>
      Every competitive player reaches a point where casual play is no longer enough.
    </p>

    <p className="font-semibold text-white">
      You either step into real competition, or you stay invisible.
    </p>

    <p>
      Domination League gives you that opportunity.
    </p>

    <p className="text-lg font-bold text-indigo-400">
      Are you ready to compete, or are you comfortable staying average?
    </p>
  </div>

</section>
          

          {/* FOOTER */}
          <footer className="mt-12 pt-6 border-t border-gray-700 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{views.toLocaleString()} views</span>
            </div>
            <span>Published by <span className="text-gray-300 font-medium">{blog.source}</span></span>
          </footer>

        </article>

        <Outlet />
      </div>
    </>
  );
};

export default Domination;
