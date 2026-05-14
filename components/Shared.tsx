'use client';

import { Stars, Smile, TrendingUp, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { trustIcons, CourseData } from '../lib/data';

// --- Icons mapping ---
const iconMap: Record<string, React.ReactNode> = {
  Stars: <Stars className="icon-gold" size={24} />,
  Smile: <Smile className="icon-gold" size={24} />,
  TrendingUp: <TrendingUp className="icon-gold" size={24} />,
  Users: <Users className="icon-gold" size={24} />,
  HeartHandshake: <HeartHandshake className="icon-gold" size={24} />
};

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// --- Header ---
export const Header = ({ course }: { course?: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ padding: '20px 0', borderBottom: '1px solid var(--accent-lavender-light)', position: 'sticky', top: 0, background: 'var(--bg-color)', zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
           <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
             ACADMA
           </h2>
        </a>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="hidden md:flex">
           <a href="/s/store" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Courses</a>
           <a href="/sessions" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Webinars</a>
           <a href="/membership" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Membership</a>
        </nav>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
           <a href="https://www.acadma.in" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }} className="hidden md:block">Dashboard</a>
           <PaymentButton variant="primary" text="Enroll Now" razorpayUrl={course?.razorpayUrl} />
           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
             {menuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-lg">
           <a href="/s/store" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Courses</a>
           <a href="/sessions" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Webinars</a>
           <a href="/membership" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Membership</a>
           <a href="https://www.acadma.in" style={{ fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}>Dashboard</a>
        </div>
      )}
    </header>
  );
};

// --- Trust Strip ---
export const TrustStrip = () => {
  return (
    <div style={{ background: 'var(--accent-lavender-light)', padding: '24px 0', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', gap: '32px', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '8px', WebkitOverflowScrolling: 'touch' }}>
        {trustIcons.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {iconMap[item.icon]}
            <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Payment Button ---
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  razorpayUrl?: string;
}

export const PaymentButton = ({ variant = 'primary', text, onClick, fullWidth = false, razorpayUrl }: ButtonProps) => {
  const className = `btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`;
  
  const handleClick = () => {
    if (onClick) onClick();
    else if (text.toLowerCase().includes('contact')) {
        // WhatsApp link
        window.open('https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community.', '_blank');
    } else if (razorpayUrl) {
        window.location.href = razorpayUrl;
    } else {
        alert("Redirecting to Razorpay checkout...");
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

// --- Mobile Sticky CTA ---
export const MobileStickyCTA = ({ course }: { course: CourseData }) => {
  return (
    <div className="mobile-sticky-cta">
      <div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Just</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹{course.discountPrice}</div>
      </div>
      <PaymentButton variant="primary" text="Enroll Now" fullWidth razorpayUrl={course.razorpayUrl} />
    </div>
  );
};

// --- Footer ---
export const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-16 px-6 relative border-t border-slate-200 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16">
          
          {/* Left Side */}
          <div className="lg:w-1/2">
            <a href="/" className="inline-block mb-6 no-underline text-[#1E1B4B] hover:text-blue-600">
              <h2 className="text-3xl font-extrabold text-[#1E1B4B] flex items-center gap-3 m-0">
                <div className="w-8 h-8 rounded-full bg-brand-gold"></div>
                ACADMA
              </h2>
            </a>
            <p className="text-slate-500 text-[1.05rem] leading-relaxed max-w-xl">
              Super practical courses, with a no-nonsense approach, that are designed to help you take life decisions from a point of awareness, and not ignorance.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/3 flex flex-col md:flex-row gap-12 lg:justify-end">
            <div>
              <h4 className="text-[#1E1B4B] font-semibold mb-4 text-sm uppercase tracking-wider">Follow us on</h4>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="bg-slate-100 text-[#1E1B4B] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="YouTube" className="bg-slate-100 text-[#1E1B4B] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="#" aria-label="Instagram" className="bg-slate-100 text-[#1E1B4B] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-200 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#1E1B4B] font-semibold mb-4 text-sm uppercase tracking-wider">For support</h4>
               <a href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community." aria-label="WhatsApp Support" className="bg-slate-100 text-[#1E1B4B] w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200 hover:scale-110 transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="text-[#1E1B4B] font-semibold">© Copyright 2026 ACADMA</div>
          <div className="flex flex-wrap items-center gap-6 drop-shadow-sm">
             <a href="/privacypolicy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
             <a href="/termsofuse" className="hover:text-blue-600 transition-colors">Terms of Use</a>
             <a href="/contactus" className="hover:text-blue-600 transition-colors">Contact Us</a>
             <a href="#" className="hover:text-blue-600 transition-colors">Blogs</a>
             <a href="/privacypolicy" className="hover:text-blue-600 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
