import React from 'react';

function News() {
  return (
    <section id="news" className="bg-gray-900/60 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <a href="#news" className="text-sm underline">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <article className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">Endgame 2025: Recap & Winners</h3>
            <p className="text-xs text-gray-400 mt-2">Highlights, MVPs and match VODs from Endgame 2025.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">Read more</a>
          </article>

          <article className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold">How to form a college team: A practical guide</h3>
            <p className="text-xs text-gray-400 mt-2">Step-by-step checklist for tryouts, practice routines and tournament prep.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">Read more</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default News;