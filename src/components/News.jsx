import React, { useState } from 'react';

const NEWS_DATA = [
    {
        id: 1,
        title: "Endgame 2025: Recap & Winners",
        summary: "Highlights, MVPs and match VODs from Endgame 2025.",
        content: "The full article content for Endgame 2025 includes detailed team analysis, MVP interviews, and links to all streaming VODs.\n\nThe tournament was a great success, showcasing the best talent in the region. We look forward to next year's event!",
    },
    {
        id: 2,
        title: "How to form a college team: A practical guide",
        summary: "Step-by-step checklist for tryouts, practice routines and tournament prep.",
        content: "Forming a collegiate team requires dedication, a structured tryout process, and a consistent practice schedule.\n\nThis guide walks you through legal requirements, budgeting, recruiting strategy, and tips for maintaining team cohesion throughout the season.",
    },
    {
        id: 3,
        title: "Major Patch Notes V3.2: New Maps and Abilities",
        summary: "Review of all changes in the latest game update, including map rotations.",
        content: "Patch V3.2 brings significant changes to the competitive landscape. Two new maps have been added, and several character abilities have received balance adjustments. Check the full list of changes inside!",
    },
    {
        id: 4,
        title: "Team Roster Changes Announced",
        summary: "Official statement on the departure and arrival of new team members.",
        content: "The organization has officially announced several roster changes for the upcoming season. We thank our departing players for their service and welcome the new talent with open arms. Expectations are high for the new lineup.",
    },
];


const NewsModal = ({ isVisible, onClose, newsTitle, newsContent }) => {
    const visibilityClass = isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';
    const contentScaleClass = isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0';

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
            style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: isVisible ? 'blur(8px)' : 'none', 
                WebkitBackdropFilter: isVisible ? 'blur(8px)' : 'none',
            }}
            onClick={onClose}
        >
            <div 
                className={`bg-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-lg w-11/12 transition-all duration-300 transform ${contentScaleClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-3xl font-bold mb-4">{newsTitle}</h3>
                <p className="text-gray-300 mb-6 whitespace-pre-line">{newsContent}</p>
                <button 
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition duration-150"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// --- Newses Main Component ---
function Newses() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleOpenModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section id="news" className="bg-gray-900/60 py-16 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Latest News</h2>
                        
                    </div>

                    {/* KEY CHANGE: grid-cols-1 (mobile default) and md:grid-cols-3 (PC/tablet) */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {NEWS_DATA.map((article) => (
                            <article 
                                key={article.id} 
                                className="p-4 bg-gray-800 rounded-lg shadow-lg"
                            >
                                <h3 className="font-semibold">{article.title}</h3>
                                <p className="text-xs text-gray-400 mt-2">{article.summary}</p>
                                <button 
                                    onClick={() => handleOpenModal(article.title, article.content)}
                                    className="mt-3 inline-block text-sm underline text-indigo-400 hover:text-indigo-300 focus:outline-none"
                                >
                                    Read more
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            
            <NewsModal 
                isVisible={isModalOpen}
                onClose={handleCloseModal}
                newsTitle={modalContent.title}
                newsContent={modalContent.content}
            />
        </>
    );
}

export default Newses;