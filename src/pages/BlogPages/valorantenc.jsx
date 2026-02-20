import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";

const Valorantenc = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        setViews(3912);
      } catch (error) {
        console.error(error);
      }
    };
    fetchViews();
  }, []);

  const blog = {
    title: "VALORANT Added to Esports Nations Cup 2026: A Major Step for Global Esports",
    coverImage: "/Banner/valorantenc.webp", // must exist in /public/Banner/
    author: "Paras Bisht",
    date: "February 21, 2026",
    isoDate: "2026-02-21", // required for SEO structured data
    source: "UK Esports Hub",
    description:
      "VALORANT has officially been added to the Esports Nations Cup 2026, marking a major milestone for national-level competition and the future of global esports.",
    url: "https://www.ukesportshub.in/blog/valorant-enc-2026",
  };

  return (
    <>
      {/* SEO META TAGS */}
      <Helmet>
        <title>{blog.title}</title>

        <meta name="description" content={blog.description} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.coverImage} />
        <meta property="og:url" content={blog.url} />
        <meta property="og:site_name" content="UK Esports Hub" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.coverImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: blog.title,
            description: blog.description,
            image: blog.coverImage,
            datePublished: blog.isoDate,
            dateModified: blog.isoDate,
            author: {
              "@type": "Person",
              name: blog.author,
            },
            publisher: {
              "@type": "Organization",
              name: blog.source,
              logo: {
                "@type": "ImageObject",
                url: "https://www.ukesportshub.in/logos/social_logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": blog.url,
            },
          })}
        </script>
      </Helmet>

      {/* PAGE */}
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
              Esports News
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
            <span>{views.toLocaleString()} views</span>

          </div>

          {/* LEAD */}
          <p className="text-xl text-gray-300 leading-relaxed font-light border-l-4 border-indigo-500 pl-5 mb-10 italic">
            {blog.description}
          </p>

          {/* CONTENT */}
          <section className="space-y-8 text-gray-300 text-base leading-8">

            <div className="space-y-4">
              <p>
                VALORANT has officially been confirmed as part of the Esports Nations Cup (ENC) 2026, marking a major milestone in the global expansion of competitive esports. This development strengthens VALORANT’s position as one of the most important tactical shooters in the esports ecosystem.
              </p>

              <p>
                Unlike traditional esports tournaments, the Esports Nations Cup introduces a national representation format, where players compete for their countries rather than organizations. This brings a new level of prestige, identity, and international competition.
              </p>
            </div>

            <figure className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-700">
              <img
                src={blog.coverImage}
                alt="VALORANT ENC 2026"
                className="w-full object-cover max-h-96"
              />

              <figcaption className="bg-gray-800 text-gray-500 text-xs px-4 py-2 text-center">
                VALORANT officially joins ENC 2026
              </figcaption>
            </figure>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Global Competitive Impact
              </h2>

              <p>
                The tournament will feature national teams from across multiple regions, providing players with the opportunity to compete internationally under their country’s banner. This format promotes national pride and introduces a new pathway for competitive recognition.
              </p>

              <p>
                National esports competitions represent the next stage in esports evolution, bridging the gap between traditional sports structures and modern competitive gaming.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                UK Esports Hub Perspective
              </h2>

              <p>
                The addition of VALORANT to ENC 2026 reflects the continued global growth of structured esports competition. Events like these create long-term opportunities for players and strengthen the legitimacy of esports worldwide.
              </p>

              <p className="text-lg font-bold text-indigo-400">
                The future of esports is international, competitive, and more structured than ever before.
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

export default Valorantenc;
