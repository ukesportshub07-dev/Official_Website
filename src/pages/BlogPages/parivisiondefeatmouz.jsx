import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";

const ParivisionMouz = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        setViews(2476);
      } catch (error) {
        console.error(error);
      }
    };
    fetchViews();
  }, []);

  const blog = {
    title: "PARIVISION Defeat MOUZ to Reach PGL Cluj-Napoca 2026 Grand Final",
    coverImage: "/Banner/parivisiondefeatmouz", // add image in public/Banner/
    author: "Paras Bisht",
    date: "February 21, 2026",
    isoDate: "2026-02-21",
    source: "UK Esports Hub",
    description:
      "PARIVISION secure a dominant victory over MOUZ to qualify for the PGL Cluj-Napoca 2026 Grand Final, continuing their rise in Counter-Strike 2 esports.",
    url: "https://www.ukesportshub.in/blog/parivision-mouz-pgl-cluj-napoca-2026",
  };

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>

        <meta name="description" content={blog.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.coverImage} />
        <meta property="og:url" content={blog.url} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: blog.title,
            description: blog.description,
            image: blog.coverImage,
            datePublished: blog.isoDate,
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
          })}
        </script>
      </Helmet>

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
              Counter-Strike 2 News
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
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

            <span>·</span>
            <span>{blog.date}</span>

            <span>·</span>
            <span>{blog.source}</span>

            <span>·</span>
            <span>{views.toLocaleString()} views</span>

          </div>

          {/* LEAD */}
          <p className="text-xl text-gray-300 border-l-4 border-indigo-500 pl-5 mb-10 italic">
            {blog.description}
          </p>

          {/* CONTENT */}
          <section className="space-y-8 text-gray-300 leading-8">

            <div className="space-y-4">
              <p>
                PARIVISION have officially secured their place in the Grand Final of PGL Cluj-Napoca 2026 after defeating MOUZ in a convincing semifinal performance. The team delivered a disciplined and structured display, demonstrating their growing confidence and stability at the highest level of Counter-Strike 2 competition.
              </p>

              <p>
                This victory continues PARIVISION’s impressive rise in the competitive scene, positioning them as one of the most promising teams of 2026. Their ability to perform consistently against top-tier opponents highlights their rapid development and growing championship potential.
              </p>
            </div>

            {/* IMAGE */}
            <figure className="rounded-xl overflow-hidden">
              <img
                src={blog.coverImage}
                alt="PARIVISION vs MOUZ"
                className="w-full"
              />
              <figcaption className="text-center text-sm text-gray-400 py-2">
                PARIVISION qualify for PGL Cluj-Napoca Grand Final
              </figcaption>
            </figure>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Match Breakdown
              </h2>

              <p>
                The semifinal series showcased PARIVISION’s superior coordination and decision-making. On Dust2, both teams remained competitive throughout the match, but PARIVISION managed to secure critical rounds and maintain control in key situations.
              </p>

              <p>
                Inferno presented another intense battle, with MOUZ attempting to recover momentum. However, PARIVISION maintained composure under pressure and executed their strategies effectively to close out the series.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Tactical Strength and Leadership
              </h2>

              <p>
                PARIVISION’s success can be attributed to their structured gameplay and effective leadership. Their ability to adapt mid-match and maintain consistency allowed them to outperform MOUZ in critical moments.
              </p>

              <p>
                Their defensive coordination, utility usage, and teamwork played a key role in securing victory and advancing to the final stage of the tournament.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Impact on the Competitive Scene
              </h2>

              <p>
                PARIVISION’s qualification for the Grand Final signals a shift in the Counter-Strike competitive landscape. Emerging teams are increasingly challenging established organizations, creating a more competitive and unpredictable environment.
              </p>

              <p>
                Their performance demonstrates the growing depth of talent within the global esports ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Looking Ahead
              </h2>

              <p>
                With a place secured in the Grand Final, PARIVISION now have the opportunity to claim another major championship. Their recent performances suggest they are capable of competing at the highest level and achieving long-term success.
              </p>

              <p className="text-indigo-400 font-semibold">
                The Grand Final will be a defining moment in PARIVISION’s competitive journey.
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

export default ParivisionMouz;
