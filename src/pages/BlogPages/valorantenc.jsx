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

  {/* Intro */}
  <div className="space-y-4">
    <p>
      VALORANT has officially been announced as one of the featured titles in the Esports Nations Cup (ENC) 2026, marking a defining moment in the evolution of international esports competition. Since its launch, VALORANT has rapidly grown into one of the most competitive tactical shooters in the world, and its inclusion in ENC reflects its importance in the global esports ecosystem.
    </p>

    <p>
      The Esports Nations Cup introduces a fundamentally different competitive structure compared to traditional esports tournaments. Instead of players competing under esports organizations, the tournament focuses on national representation, allowing players to represent their countries on an international stage. This shift creates a deeper level of competitive pride and introduces a new dimension of global rivalry.
    </p>

    <p>
      For the global esports community, this announcement reinforces the long-term stability and relevance of VALORANT as a tier-one competitive title. It also signals continued investment in international esports infrastructure and structured global tournaments.
    </p>
  </div>

  {/* Image */}
  <figure className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-700">
    <img
      src={blog.coverImage}
      alt="VALORANT ENC 2026"
      className="w-full object-cover max-h-96"
    />
    <figcaption className="bg-gray-800 text-gray-500 text-xs px-4 py-2 text-center">
      VALORANT confirmed as an official title in Esports Nations Cup 2026
    </figcaption>
  </figure>

  {/* Tournament Structure */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      A New Era of International Competition
    </h2>
    <p>
      The Esports Nations Cup 2026 will feature national teams from around the world, bringing together top-tier players to compete at the highest level. This format emphasizes national identity, teamwork, and coordinated performance rather than traditional organization-based rosters.
    </p>
   <p>
      Players selected to represent their countries will carry the responsibility of competing not just for personal success, but for national recognition. This creates a unique competitive environment where performance reflects both individual skill and national esports strength.
    </p>
    <p>
      The tournament structure is expected to include multiple competitive stages, beginning with group-level competition and progressing into elimination rounds. This ensures that only the most consistent and strategically prepared teams advance toward the final stages of the tournament.
    </p>
  </div>

  {/* Why VALORANT was chosen */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Why VALORANT Is a Key Addition
    </h2>

    <p>
      VALORANT’s competitive design makes it particularly suitable for national-level tournaments. The game emphasizes communication, coordination, strategic planning, and precise mechanical execution. These qualities make it ideal for structured team competition at the international level.
    </p>
    <p>
      Over the past few years, VALORANT has established a strong competitive ecosystem through official leagues, international events, and structured ranking systems. Its continued growth and consistent player engagement have positioned it as one of the most reliable esports titles globally.
    </p>
    <p>
      The addition of VALORANT to ENC further strengthens its global competitive presence and opens new pathways for players to participate in international esports events beyond traditional organizational competition.
    </p>
  </div>

  {/* Global impact */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Global Impact on the Esports Ecosystem
    </h2>
    <p>
      National-level esports competitions represent a major step toward the long-term development of competitive gaming. These tournaments introduce new layers of structure, legitimacy, and global recognition. They also help establish esports as a discipline comparable to traditional international sports.
    </p>
    <p>
      For emerging regions, this format creates opportunities for players to gain international exposure and compete against top talent from other countries. It also helps strengthen national esports infrastructure and encourages investment in player development.
    </p>
    <p>
      As more international tournaments adopt national representation formats, esports continues to move toward a more structured and globally unified competitive future.
    </p>
  </div>

  {/* Player opportunities */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Opportunities for Players Worldwide
    </h2>
    <p>
      The inclusion of VALORANT in ENC provides players with new competitive opportunities beyond traditional organizational tournaments. Players now have an additional pathway to compete internationally while representing their country.
    </p>
    <p>
      This format rewards consistent performance, discipline, and high-level gameplay. It also encourages players to improve their competitive skills in order to qualify for national representation.
    </p>
    <p>
      For developing esports regions, national tournaments can play a critical role in identifying new talent and accelerating the growth of competitive ecosystems.
    </p>
  </div>

  {/* UK Esports Hub perspective */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      UK Esports Hub Perspective
    </h2>
    <p>
      From a long-term perspective, the inclusion of VALORANT in the Esports Nations Cup represents a significant advancement in global esports development. Structured international tournaments help strengthen competitive standards and create meaningful opportunities for players.
    </p>
   <p>
      National-level events also contribute to the overall stability of esports by encouraging long-term infrastructure growth, talent development, and competitive consistency.
    </p>
    <p>
      As esports continues to evolve, tournaments like ENC will play a crucial role in shaping the future of competitive gaming and providing platforms for players to reach higher levels of competition.
    </p>
  </div>

  {/* Closing */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      Looking Ahead
    </h2>
    <p>
      The addition of VALORANT to the Esports Nations Cup 2026 marks the beginning of a new chapter in international esports competition. It reflects the continued growth of competitive gaming and the increasing importance of structured global tournaments.
    </p>
    <p>
      As international esports continues to expand, events like ENC will help define the future of competitive gaming and create new opportunities for players, teams, and esports organizations worldwide.
    </p>
    <p className="text-lg font-bold text-indigo-400">
      Competitive esports is no longer limited to organizations — it is becoming a global stage where nations compete.
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
