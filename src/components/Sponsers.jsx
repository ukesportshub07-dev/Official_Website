import React, { useState } from 'react';
import { Award, Zap, MapPin, GraduationCap, Monitor, Coffee, Radio, Home, Shirt, Newspaper, Gift, Users, Plus, ArrowLeft, Send, CheckCircle } from 'lucide-react';
const ANIM_DELAY = 100;

const sponsorCategories = [
  {
    id: 'title',
    title: "Supporting Partner",
    icon: <Award className="w-6 h-6" />,
    tier: 'ultra',
    sponsors: [
      { 
        id: 1, 
        name: "FFM Community", 
        type: "Main Event Partner", 
        color: "from-blue-500 to-purple-600",
        src: "/logos/FFM.png" 
      },
    ]
  },
  {
    id: 'powered',
    title: "Powered By",
    icon: <Zap className="w-6 h-6" />,
    tier: 'large',
    sponsors: [] 
  },
  {
    id: 'venue',
    title: "Venue Partner",
    icon: <MapPin className="w-6 h-6" />,
    tier: 'medium',
    sponsors: [] 
  }, 

  {
    id: 'university',
    title: "Campus Community Partner",
    icon: <GraduationCap className="w-6 h-6" />,
    tier: 'medium',
    sponsors: [ 
      { 
        id: 2,
        name: "The Wizards Club, GEHU", 
        type: "Graphic Era Hill University", 
        color: "from-blue-500 to-purple-600",
        src: "/logos/wizards.webp" 
      },
    ] 
  }
];


const SectionDivider = ({ title, icon, delay }) => (
  <div 
    className="flex items-center w-full my-12 px-4 md:px-12 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-slate-500" />
    <div className="flex items-center gap-3 flex-shrink-0 px-6">
      <span className="text-blue-400">{icon}</span>
      <span className="text-xl md:text-2xl text-white font-black tracking-wider uppercase italic">
        {title}
      </span>
    </div>
    <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-slate-700 to-slate-500" />
  </div>
);

const SponsorCard = ({ sponsor, tier, delay, isPlaceholder = false, onOpenForm }) => {
  const getTierStyles = () => {
    switch (tier) {
      case 'ultra': return 'w-full md:w-[500px] h-[340px] text-2xl';
      case 'large': return 'w-full md:w-80 h-64 text-xl';
      case 'medium': return 'w-full md:w-72 h-56 text-lg';
      default: return 'w-72 h-56';
    }
  };

  const getLogoHeight = () => {
    switch (tier) {
      case 'ultra': return 'h-48';
      case 'large': return 'h-36';
      case 'medium': return 'h-32';
      default: return 'h-32';
    }
  };

  if (isPlaceholder) {
    return (
      <div 
        onClick={onOpenForm}
        className={`
          relative group overflow-hidden rounded-2xl border-2 border-dashed border-slate-800
          flex flex-col items-center justify-center p-4 text-center cursor-pointer
          hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300
          opacity-0 animate-fade-in-up
          ${getTierStyles()}
        `}
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        <Plus className="w-8 h-8 text-slate-700 group-hover:text-blue-500 mb-2 transition-colors" />
        <span className="text-slate-600 group-hover:text-slate-400 font-bold uppercase tracking-widest text-xs">
          Sponsorship Open
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`
        relative group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2
        bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm
        flex flex-col text-center
        hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]
        opacity-0 animate-fade-in-up
        ${getTierStyles()}
      `}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${sponsor.color || 'from-blue-500 to-cyan-500'} transition-opacity duration-500`} />

      <div className={`
        relative w-full overflow-hidden flex items-center justify-center
        ${getLogoHeight()}
        ${!sponsor.src ? 'bg-gradient-to-br ' + (sponsor.color || 'from-slate-700 to-slate-900') : 'bg-slate-900/50'}
      `}>
        {sponsor.src ? (
          <img 
            src={sponsor.src} 
            alt={sponsor.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-slate-700');
            }}
          />
        ) : (
          <span className={`font-black text-white/20 uppercase tracking-tighter ${tier === 'ultra' ? 'text-8xl' : 'text-6xl'}`}>
            {sponsor.name.charAt(0)}
          </span>
        )}
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-6">
        <h3 className="font-black text-white group-hover:text-blue-200 transition-colors uppercase tracking-tight">
          {sponsor.name}
        </h3>
        {sponsor.type && (
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-blue-400 font-bold mt-2">
            {sponsor.type}
          </p>
        )}
      </div>

     
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-700 group-hover:border-blue-400 transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-700 group-hover:border-blue-400 transition-colors" />
    </div>
  );
};


const PartnershipForm = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in-up">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-black text-white mb-4">Request Sent!</h2>
        <p className="text-slate-400 max-w-md mb-8">
          Thank you for your interest. Our partnership team will review your application and get back to you within 48 hours.
        </p>
        <button 
          onClick={onBack}
          className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all"
        >
          Return to Showcase
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 animate-fade-in-up">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors font-bold uppercase tracking-widest text-xs"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Partners
      </button>

      <div className="mb-10">
        <h2 className="text-4xl font-black text-white mb-2">Partner Inquiry</h2>
        <p className="text-slate-400">Tell us about your brand and how you'd like to collaborate.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company Name</label>
            <input required type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Acme Corp" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Industry</label>
            <input required type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Technology" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contact Email</label>
          <input required type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="partnerships@company.com" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Partnership Level</label>
          <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
            <option>Title Partner</option>
            <option>Powered By</option>
            <option>Venue Partner</option>
            <option>Supporting Partner</option>
            <option>Campus Community Partner</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message / Proposal</label>
          <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us your vision..."></textarea>
        </div>

        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
          Submit Proposal <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};


const SponsorsView = ({ onOpenForm }) => (
  <>
    <section className="relative pt-32 pb-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
          Our Official Partners
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in-up tracking-tighter" style={{ animationDelay: '100ms' }}>
          The Power <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Behind The Vision</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '200ms' }}>
          We are proud to collaborate with industry-leading organizations driving innovation and excellence in our community.
        </p>
      </div>
    </section>

    <main className="container mx-auto pb-40 relative z-10">
      {sponsorCategories.map((category, catIndex) => {
        const hasSponsors = category.sponsors.length > 0;
        return (
          <div key={category.id} className="mb-24">
            <SectionDivider 
              title={category.title} 
              icon={category.icon} 
              delay={(catIndex + 1) * ANIM_DELAY} 
            />
            <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
              {hasSponsors ? (
                category.sponsors.map((sponsor, sIndex) => (
                  <SponsorCard 
                    key={sponsor.id} 
                    sponsor={sponsor} 
                    tier={category.tier}
                    delay={(catIndex + 1) * ANIM_DELAY + (sIndex * 100)}
                  />
                ))
              ) : (
                <SponsorCard 
                  tier={category.tier} 
                  isPlaceholder 
                  onOpenForm={onOpenForm}
                  delay={(catIndex + 1) * ANIM_DELAY} 
                />
              )}
            </div>
          </div>
        );
      })}
    </main>

    <footer className="bg-slate-900/50 border-t border-slate-800 py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Become a Partner</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Ready to showcase your brand to thousands of enthusiasts? Join our growing ecosystem of visionary supporters.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button 
            onClick={onOpenForm}
            className="px-10 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/20 transform hover:-translate-y-1"
          >
            Contact Partnership Team
          </button>
        </div>
      </div>
    </footer>
  </>
);

export default function App() {
  const [currentView, setCurrentView] = useState('showcase');

  const navigateToForm = () => {
    setCurrentView('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .bg-grid {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
        }
      `}</style>

      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      {currentView === 'showcase' ? (
        <SponsorsView onOpenForm={navigateToForm} />
      ) : (
        <PartnershipForm onBack={navigateToHome} />
      )}
    </div>
  );
}








