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
    title: "How Esports is Changing the Future of Gaming",
    coverImage: "/logos/FFM.png",
    author: "Paras Bisht",
    date: "February 21, 2026",
    source: "UK Esports Hub",
    description:
      "Discover how esports is transforming gaming into a global competitive industry.",
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
              Esports
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
          <section className="space-y-6 text-gray-300 text-base leading-8">
            <p>
              Esports has evolved from casual gaming to a billion-dollar industry.
              Competitive gaming now attracts millions of viewers worldwide, rivaling
              traditional sports in viewership and sponsorship revenue.
            </p>

            {/* Inline image */}
            <figure className="my-8 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-700">
              <img
                src="/images/esports-tournament.jpg"
                alt="Esports Tournament"
                className="w-full object-cover max-h-96"
              />
              <figcaption className="bg-gray-800 text-gray-500 text-xs px-4 py-2 text-center">
                A competitive esports tournament in action.
              </figcaption>
            </figure>

            <p>
              Major tournaments now offer prize pools exceeding millions of dollars.
              Organizations are investing heavily in esports infrastructure — from
              dedicated training facilities to full-time coaching staff and sports
              psychologists.
            </p>

            {/* Pull quote */}
            <blockquote className="my-8 bg-gray-800 border-l-4 border-indigo-500 rounded-r-xl px-6 py-5 text-indigo-300 text-lg font-semibold italic">
              "Esports isn't just gaming anymore — it's careers, culture, and community."
            </blockquote>

            <p>
              Platforms like YouTube and Twitch have accelerated esports growth,
              enabling players to build massive audiences independently. The rise of
              mobile esports has further democratized access, especially in regions
              like South Asia where mobile-first gaming dominates.
            </p>
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