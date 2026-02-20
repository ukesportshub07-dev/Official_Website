import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import blogData from "../pages/BlogPages/blogData";
import Navbar from "../components/Navbar.jsx";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "UK Esports Hub Blog",
    description:
      "Latest esports news, gaming updates, tournament results, and professional gaming guides.",
    url: "https://www.ukesportshub.in/blog",
    publisher: {
      "@type": "Organization",
      name: "UK Esports Hub",
      url: "https://www.ukesportshub.in",
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Esports News, Gaming Updates & Tournament Results | UK Esports Hub
        </title>

        <meta
          name="description"
          content="Read the latest esports news, BGMI updates, Valorant patch notes, tournament results, and gaming guides. Stay ahead with UK Esports Hub."
        />

        <meta
          name="keywords"
          content="esports news, gaming news india, bgmi updates, valorant updates, esports tournaments india, gaming blog, uk esports hub"
        />

        <meta name="robots" content="index, follow" />

        {/* OpenGraph for social sharing */}
        <meta property="og:title" content="UK Esports Hub Blog" />
        <meta
          property="og:description"
          content="Latest esports news, gaming updates, and tournament coverage."
        />
        <meta
          property="og:url"
          content="https://www.ukesportshub.in/blog"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gray-900 p-6 sm:p-10 lg:pl-48">
        {/* SEO optimized heading */}
        <header className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Esports News, Gaming Updates, and Tournament Coverage
          </h1>

          <p className="text-blue-200 text-lg mt-4">
            Daily esports news, gaming updates, patch notes, tournament
            results, and professional guides covering BGMI, Valorant,
            CS2, and more.
          </p>
        </header>

        {/* Search */}
        <section className="mt-8 mb-10">
          <input
            type="search"
            placeholder="Search esports news, gaming updates, tournaments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blogs"
            className="w-full max-w-2xl p-4 rounded-full bg-white shadow-md outline-none text-gray-700"
          />
        </section>

        {/* Blog grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <article key={blog.id}>
                <HashLink
                  to={blog.path}
                  className="bg-blue-100 rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden block"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={`${blog.title} - UK Esports Hub Gaming Blog`}
                      loading="lazy"
                      className="object-cover h-64 w-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    {/* Category */}
                    <span className="inline-block bg-purple-600 text-white font-semibold text-xs px-3 py-1 rounded-lg">
                      {blog.category || "Gaming News"}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 mt-3">
                      {blog.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {blog.shortDesc}
                    </p>

                    {/* Date */}
                    <time className="text-gray-500 text-xs mt-3 block">
                      {blog.date || "2026"}
                    </time>

                  </div>
                </HashLink>
              </article>
            ))
          ) : (
            <p className="text-gray-400 text-lg col-span-full">
              No matching blogs found.
            </p>
          )}

        </section>
      </main>
    </>
  );
};

export default Blog;
