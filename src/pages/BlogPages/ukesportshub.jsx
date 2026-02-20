import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";

const Domination = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Replace with real API call later
        setViews(2847);
      } catch (error) {
        console.error(error);
      }
    };
    fetchViews();
  }, []);

  const blog = {
    title: "About UK Esports Hub",
    coverImage: "/logos/social_logo.png",
    author: "Paras Bisht",
    date: "February 21, 2026",
    source: "UK Esports Hub",
    description:
      "UK Esports Hub is an esports organization focused on building competitive opportunities, hosting tournaments, and growing the esports ecosystem across Uttarakhand and India.",
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
            "@type": "Organization",
            name: blog.source,
            url: "https://www.ukesportshub.in",
            logo: blog.coverImage,
            founder: blog.author,
            description: blog.description,
          })}
        </script>
      </Helmet>

      {/* PAGE WRAPPER */}
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />

        {/* HERO */}
        <div className="relative w-full h-80 sm:h-96 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover brightness-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              About Us
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* ARTICLE */}
        <article className="max-w-4xl mx-auto px-6 py-10">

          {/* META */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-b border-gray-700 pb-6 mb-8">

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                {blog.author.charAt(0)}
              </div>

              <span className="text-gray-200 font-medium">
                {blog.author}
              </span>
            </div>

            <span className="text-gray-600">·</span>
            <span>{blog.date}</span>

            <span className="text-gray-600">·</span>
            <span>{blog.source}</span>

            <span className="text-gray-600">·</span>

            <span className="flex items-center gap-1 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>

              {views.toLocaleString()} views
            </span>
          </div>

          {/* LEAD */}
          <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-indigo-500 pl-5 mb-10 italic">
            {blog.description}
          </p>

          {/* CONTENT */}
          <section className="space-y-8 text-gray-300 text-base leading-8">

            {/* Intro */}
            <div className="space-y-4">
              <p>
                UK Esports Hub is an esports organization dedicated to building competitive opportunities for players across Uttarakhand and India. The organization focuses on creating structured tournaments, professional environments, and real growth pathways for competitive players.
              </p>

              <p>
                It exists to provide players with platforms where performance matters, talent gets recognized, and competitive growth becomes possible.
              </p>
            </div>

            {/* Image */}
            <figure className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-700">
              <img
                src="/logos/social_logo.png"
                alt="UK Esports Hub"
                className="w-full object-cover max-h-96"
              />

              <figcaption className="bg-gray-800 text-gray-500 text-xs px-4 py-2 text-center">
                UK Esports Hub Official Logo
              </figcaption>
            </figure>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Our Mission
              </h2>

              <p>
                The mission is to build a structured esports ecosystem where players can compete in professional tournaments and gain exposure.
              </p>

              <p>
                UK Esports Hub focuses on consistency, fairness, and professionalism in every event.
              </p>
            </div>

            {/* What we do */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                What We Do
              </h2>

              <ul className="list-disc list-inside space-y-2">
                <li>Organize esports tournaments and leagues</li>
                <li>Provide exposure to competitive players</li>
                <li>Host live streamed esports events</li>
                <li>Build competitive gaming communities</li>
                <li>Create opportunities for emerging talent</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Our Vision
              </h2>

              <p>
                The vision is to become one of India's leading grassroots esports organizations and create real opportunities for players.
              </p>

              <p className="text-lg font-bold text-indigo-400">
                Talent exists everywhere. Opportunity must be created.
              </p>
            </div>

          </section>

          {/* FOOTER */}
          <footer className="mt-12 pt-6 border-t border-gray-700 flex justify-between text-sm text-gray-500">
            <span>{views.toLocaleString()} views</span>

            <span>
              Published by{" "}
              <span className="text-gray-300 font-medium">
                {blog.source}
              </span>
            </span>
          </footer>

        </article>

        <Outlet />

      </div>
    </>
  );
};

export default Domination;
