import { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../pages/BlogPages/blogData";
import { HashLink } from "react-router-hash-link";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBlogs = [...blogData]
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-900 p-10 pl-48 ">

      <h1 className="text-5xl font-extrabold text-white">Our Blogs</h1>
      <p className="text-blue-200 text-lg mt-2">All you need to know</p>

      <div className="mt-8 mb-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-2xl p-4 rounded-full bg-white shadow-md outline-none text-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">

        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <HashLink
              key={blog.id}
              to={blog.path}
              className="bg-blue-100 rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="group rounded-xl overflow-hidden">
                <div className=" overflow-hidden flex items-center justify-center border-b-2 border-gray-500">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

           
              <div className="p-5">
                <span className="inline-block bg-yellow-300 text-black font-semibold text-xs px-3 py-1 rounded-lg">
                  {blog.year || "2026"}
                </span>

                <h2 className="text-lg font-bold text-gray-900 mt-3 leading-snug">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {blog.shortDesc}
                </p>
              </div>
            </HashLink>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full">
            No blogs found with that title.
          </p>
        )}

      </div>
    </div>
  );
};

export default Blog;