import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';


const NEWS_DATA = [
    {
        id: 1,
        {
    title: "Domination League | Season 01: Registrations Open for India's Next Major Free Fire MAX Tournament",
    summary: "UK Esports Hub announces Domination League | Season 01, a nationwide Free Fire MAX tournament with ₹5000 prize pool and 120 team slots.",
    content: "UK Esports Hub, in supporting partnership with FFM Community India, has officially announced Domination League | Season 01, a nationwide Free Fire MAX esports tournament open to players across India. Designed to provide a professional competitive platform for emerging and experienced teams alike, the event aims to deliver structured competition, fair play, and high level esports engagement.\n\nRegistrations for the tournament opened on February 12, 2026, and will remain open until February 25, 2026. The tournament will officially begin on March 01, 2026, and is expected to run for approximately one to two weeks, concluding with the grand finals featuring the top qualifying teams.\n\nDomination League | Season 01 will follow a professional multi stage format consisting of Knockout rounds, Semifinals, and Grand Finals. All matches will be conducted using the official Free Fire MAX competitive point system to ensure fairness, transparency, and competitive integrity throughout the tournament.\n\nThe event is completely free to enter, making it accessible to all Free Fire MAX players across India. A total of 120 team slots are available, and participation will be granted on a first come, first served basis. Teams will compete on the India / Asia server, ensuring optimal performance and fair competition conditions.\n\nThe total prize pool for the tournament is ₹5000 along with additional in game diamonds. Detailed prize distribution will be announced before the finals. Beyond prizes, the event provides players with an opportunity to gain competitive experience, recognition, and exposure within the growing Indian esports ecosystem.\n\nUK Esports Hub continues its mission of building structured esports opportunities for players by organizing professional tournaments, supporting grassroots talent, and strengthening the competitive gaming community. Supporting partner FFM Community India adds additional community support and operational experience to ensure smooth tournament execution.\n\nPlayers can register now through the official registration portal:\nhttps://www.ukesportshub.in/Forms\n\nParticipants will receive match updates, schedules, and announcements through the official WhatsApp group and communication channels. Teams are advised to complete registration early, as slots are limited and expected to fill quickly.\n\nFor inquiries and support, players can contact:\nEmail: ukesportshub07@gmail.com\nWhatsApp: +91 97607 02302\nInstagram: instagram.com/ukesportshub\n\nDomination League | Season 01 represents another step forward in UK Esports Hub's commitment to providing professional, accessible, and competitive esports opportunities for players across India."
},

    },
    
    {
        id: 2,
        title: "Endgame 2025: Recap & Winners",
        summary: "EndGame 2025: Wizards Club and UK Esports Hub Host Major Campus Esports Event",
        content: "EndGame 2025, hosted by The Wizards Club in collaboration with UK Esports Hub, concluded successfully as one of Uttarakhand's standout student driven esports events. \n\n Featuring high energy matchups across multiple titles headlined by Free Fire the tournament delivered well structured brackets, smooth operations, and strong crowd engagement.\n\n With professional support from UK Esports Hub, the event showcased rising demand for campus esports and highlighted The Wizards Club’s growing capability to run large-scale competitive events.",
    },
    
    {
        id: 3,
        title: "Summer Carnival 2025",
        summary: "14 - 15 May 2025 Lan Event at Graphic Era Hill University.",
        content: "The Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, wThe Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, wThe Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, wThe Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, wThe Summer Carnival, held on 13th & 14th May 2025 at Graphic Era Hill University, delivered two days of competitive gaming and energetic campus engagement.\n\n The highlight of the event was the Free Fire tournament, which drew an impressive 280 players, reflecting strong interest and participation from students and local gaming enthusiasts.\n\nThe event ran smoothly, maintained high excitement throughout, and successfully positioned the carnival as a key gaming attraction for the season.",
   },

   
];

const NewsModal = ({ isVisible, onClose, newsTitle, newsContent }) => {
    const contentRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => {
                setShouldRender(false);
                document.body.style.overflow = '';
            }, 300);
            
            if (!shouldRender) {
                document.body.style.overflow = '';
            }

            return () => clearTimeout(timer);
        }
    }, [isVisible, shouldRender]);

    if (!shouldRender) {
        return null;
    }

    const modalClasses = isVisible
        ? 'opacity-100 scale-100 translate-y-0'
        : 'opacity-0 scale-95 translate-y-4';
    
    const backdropClasses = isVisible
        ? 'opacity-100'
        : 'opacity-0';

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-auto transition-opacity duration-300 ${backdropClasses}`}
            style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)', 
                WebkitBackdropFilter: 'blur(10px)',
            }}
            onClick={onClose}
        >
            <div 
                className={`bg-gray-800 text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-xl w-11/12 max-h-[85vh] transform transition-all duration-300 ease-out border border-gray-700/50 flex flex-col ${modalClasses}`}
                onClick={(e) => e.stopPropagation()}
            >
               
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-green-400">{newsTitle}</h3>
                    <button 
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-white rounded-full transition duration-150"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                <div 
                    ref={contentRef}
                   className="text-gray-300 whitespace-pre-line overflow-y-scroll pr-3 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-200 flex-grow"
                >
                    {newsContent}
                </div>
                
            </div>
        </div>
    );
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const handleOpenModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const scrollbarStyles = `
        .scrollbar-thin::-webkit-scrollbar {
            width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
            background: #4b5563;
            border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #6366f1;
            border-radius: 10px;
        }
    `;

    return (
        <div className="min-h-screen bg-gray-900/90 text-white font-inter">
            <style>{scrollbarStyles}</style>
            
            <section id="news" className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-extrabold text-gray-100 mb-8">Our News Feed</h1>
                    <h2 className="text-3xl font-bold mb-8 border-l-4 pl-3 border-purple-600">Latest Esports Updates</h2>
                    
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_DATA.map((article) => (
                            <article 
                                key={article.id} 
                                className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-purple-500/20 transition duration-300 transform hover:scale-[1.02] border-t-4 border-purple-600"
                            >
                                <h3 className="text-xl font-semibold text-gray-100 mb-2">{article.title}</h3>
                                <p className="text-sm text-gray-400 mt-2 line-clamp-3">{article.summary}</p>
                                <button 
                                    onClick={() => handleOpenModal(article.title, article.content)}
                                    className="mt-4 px-4 py-2 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800 transition duration-150 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    Read Full Article
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
        </div>
    );
}

export default App;


