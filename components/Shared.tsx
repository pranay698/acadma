'use client';

import React from 'react';
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

// --- Header ---
export const Header = ({ course }: { course: CourseData }) => {
  return (
    <header style={{ padding: '24px 0', borderBottom: '1px solid var(--accent-lavender-light)', position: 'sticky', top: 0, background: 'var(--bg-color)', zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{course.platform}</h2>
        <PaymentButton variant="primary" text="Enroll Now" />
      </div>
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
}

export const PaymentButton = ({ variant = 'primary', text, onClick, fullWidth = false }: ButtonProps) => {
  const className = `btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`;
  
  const handleClick = () => {
    if (onClick) onClick();
    else if (text.toLowerCase().includes('contact')) {
        // Mock Whatsapp link
        window.open('https://wa.me/something', '_blank');
    } else {
        // Mock Razorpay redirect
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
      <PaymentButton variant="primary" text="Enroll Now" fullWidth />
    </div>
  );
};
