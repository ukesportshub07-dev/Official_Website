import React, { useState } from 'react';

const NEWS_DATA = [
    {
        id: 1,
        title: "Endgame 2025: Recap & Winners",
        summary: "EndGame 2025: Wizards Club and UK Esports Hub Host Major Campus Esports Event",
        content: "EndGame 2025, hosted by The Wizards Club in collaboration with UK Esports Hub, concluded successfully as one of Uttarakhand's standout student driven esports events. \n Featuring high energy matchups across multiple titles headlined by Free Fire the tournament delivered well structured brackets, smooth operations, and strong crowd engagement.\n With professional support from UK Esports Hub, the event showcased rising demand for campus esports and highlighted The Wizards Club’s growing capability to run large-scale competitive events.",
    },
    
    {
        id: 2,
        title: "Summer Carnival 2025",
        summary: "14 - 15 May 2025 Lan Event at Graphic Era Hill University.",
        content: "The Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, which drew an impressive 280 players, reflecting strong interest and participation from students and local gaming enthusiasts.\n\nThe event ran smoothly, maintained high excitement throughout, and successfully positioned the carnival as a key gaming attraction for the season.",
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




