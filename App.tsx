
import React, { useState } from 'react';
import { 
  Mail, 
  Calendar, 
  FileText, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Globe, 
  Copy, 
  UserPlus, 
  X,
  Bot,
  Activity,
  ArrowRight,
  Info
} from 'lucide-react';
import { generateVCard } from './utils/vCard';
import Assistant from './components/Assistant';

const COLORS = {
  navy: '#1D3A5F',
  gold: '#C29D6F',
  white: '#FFFFFF',
  slate: '#F1F5F9'
};

const APP_DATA = {
  name: "Jackson M. Latimore Sr.",
  title: "Founder & CEO",
  company: "Latimore Life & Legacy LLC",
  license: "PA License #1268820",
  tagline: "Protecting Today. Securing Tomorrow.",
  hashtag: "#TheBeatGoesOn",
  bio: "Jackson M. Latimore Sr. is the visionary behind Latimore Life & Legacy LLC. With a steadfast commitment to financial empowerment and family protection, Jackson specializes in comprehensive life insurance and asset protection strategies. His mission is to ensure that every family has a secure foundation, proving that a well-guarded legacy is the ultimate act of love.",
  phone: "(856) 895-1457",
  email: "jackson.latimore@latimorelifelegacy.com",
  links: {
    main: "https://bit.ly/LatimoreLifeLegacy",
    ethos: "https://agents.ethoslife.com/invite/29ad1",
    booking: "https://calendly.com/jackson1989-latimorelegacy",
    linkedin: "https://www.linkedin.com/in/jackson-latimore-1049b4373",
    facebook: "https://www.facebook.com/share/14DoFBVfEHa/",
    instagram: "https://www.instagram.com/"
  }
};

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveContact = () => {
    const vcard = generateVCard(APP_DATA);
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${APP_DATA.name.replace(/\s/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center py-6 px-4 sm:px-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden relative border border-slate-100">
        
        {/* Top Brand Line */}
        <div className="h-2 w-full bg-[#1D3A5F]"></div>

        {/* Logo Section */}
        <div className="pt-8 pb-4 px-8 flex flex-col items-center">
          {/* House/Shield Top */}
          <svg width="180" height="50" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10L20 45H180L100 10Z" fill="#C29D6F" />
            <rect x="50" y="45" width="100" height="15" fill="#C29D6F" />
          </svg>

          {/* LATIMORE Text with gold arrowhead A */}
          <div className="flex items-baseline mt-[-10px]">
            <span className="text-[#1D3A5F] text-[44px] font-black tracking-[-0.05em] leading-none flex items-center">
              L
              <span className="relative inline-flex flex-col items-center">
                A
                <svg className="absolute bottom-[6px] w-5 h-5" viewBox="0 0 24 24" fill="#C29D6F">
                  <path d="M12 2L6 12H10V22H14V12H18L12 2Z" />
                </svg>
              </span>
              TIMORE
            </span>
          </div>

          {/* Subtitle Branding */}
          <div className="flex items-center space-x-2 w-full mt-0.5">
            <div className="h-[1.5px] flex-1 bg-[#C29D6F]"></div>
            <span className="text-[#C29D6F] text-[12px] font-bold tracking-[0.25em] whitespace-nowrap">
              LIFE & LEGACY LLC
            </span>
            <div className="h-[1.5px] flex-1 bg-[#C29D6F]"></div>
          </div>

          {/* Motto */}
          <p className="text-[#1D3A5F] text-[11px] font-bold mt-2 uppercase tracking-tight">
            Protecting Today. Securing Tomorrow.
          </p>

          {/* Central Logo Placeholder (Navy V-Shield) */}
          <div className="w-full h-16 mt-2 relative flex justify-center">
             <svg viewBox="0 0 200 60" className="w-48 h-full" fill="none" stroke="#1D3A5F" strokeWidth="6" strokeLinecap="round">
                <path d="M40 5 C 40 45, 100 60, 160 5" />
             </svg>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center px-6 pb-6">
          <h1 className="text-2xl font-bold text-[#1D3A5F]">{APP_DATA.name}</h1>
          <p className="text-[#C29D6F] font-bold uppercase text-[11px] tracking-widest mt-1">{APP_DATA.title}</p>
          <p className="text-slate-400 text-[10px] mt-1 font-semibold">{APP_DATA.license}</p>
        </div>

        {/* About Jackson Section */}
        <div className="px-8 mb-8">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 relative overflow-hidden">
            <h2 className="font-serif text-[#1D3A5F] text-xl font-bold mb-3 flex items-center space-x-2">
              <span>About Jackson</span>
              <div className="h-[2px] w-8 bg-[#C29D6F] rounded-full"></div>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              {APP_DATA.bio}
            </p>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="px-8 space-y-4">
          <a 
            href={APP_DATA.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 bg-[#C29D6F] text-[#1D3A5F] rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 group font-bold"
          >
            <div className="flex items-center space-x-3">
              <Calendar size={22} />
              <span>Schedule A Review</span>
            </div>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="grid grid-cols-2 gap-4">
             <a 
                href={`mailto:${APP_DATA.email}`}
                className="flex flex-col items-center justify-center p-4 bg-[#1D3A5F] text-white rounded-2xl shadow-md hover:bg-[#152a45] transition-all active:scale-95 group"
              >
                <Mail size={24} className="mb-2" />
                <span className="font-bold text-[10px] uppercase tracking-wider">Email Me</span>
              </a>
              <a 
                href={APP_DATA.links.ethos}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white border-2 border-[#1D3A5F] text-[#1D3A5F] rounded-2xl hover:bg-slate-50 transition-all active:scale-95 font-bold shadow-sm"
              >
                <FileText size={24} className="mb-2" />
                <span className="text-[10px] uppercase tracking-wider">Apply Now</span>
              </a>
          </div>
        </div>

        {/* The Heartbeat Arrow Motif */}
        <div className="mt-10 mb-2 px-8">
           <svg viewBox="0 0 400 100" className="w-full h-16" strokeWidth="4" fill="none">
             <path d="M0 75 H60 L85 20 L105 85 L125 75 H200 L220 90 L245 40 L270 75 H320 L350 90 L380 25 L400 15" stroke="#C29D6F" strokeLinecap="round" strokeLinejoin="round" />
             <path d="M385 22 L400 15 L392 32" stroke="#C29D6F" strokeLinecap="round" strokeLinejoin="round" />
             <path d="M0 75 H100" stroke="#1D3A5F" />
           </svg>
           <h3 className="text-center text-[#1D3A5F] text-2xl font-black italic tracking-tighter mt-[-10px]">
             {APP_DATA.hashtag}
           </h3>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 px-8 mt-6">
          <SocialBtn href={APP_DATA.links.linkedin} icon={<Linkedin size={20} />} />
          <SocialBtn href={APP_DATA.links.facebook} icon={<Facebook size={20} />} />
          <SocialBtn href={APP_DATA.links.instagram} icon={<Instagram size={20} />} />
          <SocialBtn href={APP_DATA.links.main} icon={<Globe size={20} />} />
        </div>

        {/* Secondary Utility Actions */}
        <div className="grid grid-cols-2 gap-4 px-8 mt-10 pb-12">
          <button 
            onClick={handleCopyLink}
            className="flex items-center justify-center space-x-2 py-3 border-2 border-slate-100 rounded-xl text-slate-500 hover:bg-slate-50 transition-all text-sm font-bold"
          >
            {copied ? <span className="text-green-600">Link Copied</span> : <><Copy size={16} /> <span>Share Link</span></>}
          </button>
          <button 
            onClick={handleSaveContact}
            className="flex items-center justify-center space-x-2 py-3 bg-[#1D3A5F] text-white rounded-xl shadow-md hover:shadow-lg transition-all text-sm font-bold"
          >
            <UserPlus size={16} />
            <span>Save Contact</span>
          </button>
        </div>

        {/* Legacy Advisor Floating Trigger */}
        <button 
          onClick={() => setShowAssistant(true)}
          className="fixed bottom-6 right-6 sm:absolute sm:bottom-6 sm:right-6 bg-[#1D3A5F] p-4 rounded-full text-white shadow-2xl hover:scale-110 transition-transform z-30 flex items-center justify-center border-2 border-[#C29D6F]"
        >
          <Bot size={28} />
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C29D6F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C29D6F]"></span>
          </div>
        </button>
      </div>

      {/* Assistant Modal */}
      {showAssistant && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-slate-200">
            <div className="p-5 flex justify-between items-center bg-[#1D3A5F] text-white">
              <div className="flex items-center space-x-3">
                <Bot size={24} className="text-[#C29D6F]" />
                <div>
                  <h3 className="font-bold leading-tight">Legacy Advisor AI</h3>
                  <p className="text-[10px] text-[#C29D6F] font-bold uppercase tracking-widest">Fast Lite Response</p>
                </div>
              </div>
              <button onClick={() => setShowAssistant(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
               <Assistant onClose={() => setShowAssistant(false)} userData={APP_DATA} />
            </div>
          </div>
        </div>
      )}

      {/* Branding Footer */}
      <footer className="mt-8 text-center px-4">
        <div className="flex items-center justify-center space-x-2 text-slate-300 mb-2">
           <div className="h-[1px] w-12 bg-slate-200"></div>
           <Activity size={12} />
           <div className="h-[1px] w-12 bg-slate-200"></div>
        </div>
        <p className="text-slate-400 text-[10px] tracking-[0.3em] font-black uppercase">
          &copy; {new Date().getFullYear()} LATIMORE LIFE & LEGACY LLC
        </p>
      </footer>
    </div>
  );
};

const SocialBtn: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 bg-slate-50 border border-slate-100 rounded-2xl text-[#1D3A5F] hover:text-[#C29D6F] hover:bg-white hover:border-[#C29D6F] transition-all duration-300 shadow-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-md hover:scale-110 active:scale-95 group"
  >
    <div className="group-hover:rotate-6 transition-transform duration-300">
      {icon}
    </div>
  </a>
);

export default App;
