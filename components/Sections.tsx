'use client';

import React, { useState } from 'react';
import { highlights, outcomes, reassurances, includedItems, materialsList, instructorData, testimonials, pricingPlans } from '../lib/data';
import type { CourseDetail } from '../lib/data';
import { PaymentButton } from './Shared';
import { CheckCircle2, ChevronDown, ChevronUp, Lock, ArrowRight, BookOpen, Clock, ShieldCheck, PlayCircle, Smile } from 'lucide-react';

// --- Hero Section ---
export const HeroSection = ({ course }: { course: CourseDetail }) => {
  return (
    <section className="section bg-gradient-hero">
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--success-green-light)', color: 'var(--success-green)', borderRadius: '100px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '24px' }}>
          By Acadma • {course.courseType}
        </div>
        <h1 className="hero-headline">{course.title}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>{course.description}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginBottom: '40px' }}>
          {highlights.map((item, idx) => (
             <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
               <CheckCircle2 size={18} className="icon-green" />
               <span style={{ fontWeight: 500 }}>{item}</span>
             </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <PaymentButton text="Enroll Now" razorpayUrl={course.razorpayUrl} />
          <PaymentButton text="Unlock Full Business Bundle" variant="outline" razorpayUrl={course.razorpayUrl} />
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Lock size={14}/> secure payment</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Smile size={14}/> beginner-friendly</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14}/> own pace</span>
        </div>
      </div>
    </section>
  );
};

// --- Pain to Promise ---
export const PainToPromise = () => (
  <section className="section">
    <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '48px', lineHeight: 1.4 }}>
        Want to start a creative skill from home, but overwhelmed by materials, mixing ratios, safety concerns, and expensive courses?
      </h2>
      <p style={{ fontSize: '1.1rem' }}>
        We eliminate the guesswork. This masterclass provides a structured, step-by-step pathway using safe techniques and affordable starter materials. 
      </p>
    </div>
  </section>
);

// --- Outcomes Grid ---
export const OutcomesGrid = () => (
  <section className="section bg-gradient-lavender">
    <div className="container">
      <h2 className="section-headline">What You Will Make</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        {outcomes.map((item, idx) => (
          <div key={idx} className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ height: '240px', background: `url(${item.image}) center/cover no-repeat` }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Reassurance / Why This Works ---
export const ReassuranceSection = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-headline">Why This Works For Beginners</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {reassurances.map((item, idx) => (
          <div key={idx} className="premium-card">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
               <ShieldCheck className="icon-lavender" /> {item.title}
            </h4>
            <p style={{ margin: 0 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Curriculum / Day Wise ---
export const CurriculumSection = ({ course }: { course: CourseDetail }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-headline">Curriculum Overview</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {course.modules.map((mod, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="premium-card" style={{ cursor: 'pointer', padding: isOpen ? '24px' : '20px 24px' }} onClick={() => setOpenIdx(isOpen ? null : idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>Module {idx + 1}</span>
                    <h4 style={{ fontSize: '1.2rem', margin: '4px 0 0' }}>{mod.title}</h4>
                  </div>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
                {isOpen && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--accent-lavender-light)' }}>
                    <p style={{ fontWeight: 500 }}>{mod.content}</p>
                    <div style={{ marginTop: '16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                       <PlayCircle size={16} /> Course specific insights
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Learn Apply Earn ---
export const LearnApplyEarn = ({ course }: { course?: CourseDetail }) => (
  <section className="section bg-gradient-lavender">
    <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>Learn <ArrowRight style={{ verticalAlign: 'middle', margin: '0 12px' }}/> Apply <ArrowRight style={{ verticalAlign: 'middle', margin: '0 12px' }}/> Earn</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>
        Skill up from home. Build your confidence by creating beautiful, physical products you can gift to loved ones, customize for events, and use to start taking paid orders. A low-risk path into creative entrepreneurship.
      </p>
      <PaymentButton text="Start Your Journey Today" razorpayUrl={course?.razorpayUrl} />
    </div>
  </section>
);

// --- Bundle Pricing ---
export const BundlePricingSection = ({ course }: { course: CourseDetail }) => (
   <section className="section">
    <div className="container">
      <h2 className="section-headline">Choose Your Path</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
        
        {/* Basic Card */}
        <div className="premium-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.4rem' }}>{pricingPlans[0].title}</h3>
          <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹{pricingPlans[0].price}</span>
            <span style={{ textDecoration: 'line-through', color: 'var(--text-secondary)' }}>₹{course.price}</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flex: 1 }}>
            {pricingPlans[0].features.map((feat, idx) => (
              <li key={idx} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} className="icon-green" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <PaymentButton text="Enroll in Basic" variant="outline" fullWidth razorpayUrl={course.razorpayUrl} />
        </div>

        {/* Upsell Bundle Card */}
        <div className="premium-card" style={{ border: '2px solid var(--accent-gold)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: 'white', padding: '6px 16px', borderRadius: '100px', fontWeight: 600, fontSize: '0.85rem' }}>
            {pricingPlans[1].badgeText}
          </div>
          <h3 style={{ fontSize: '1.4rem' }}>{pricingPlans[1].title}</h3>
          <div style={{ margin: '24px 0' }}>
            <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>₹{pricingPlans[1].price}</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flex: 1 }}>
            {pricingPlans[1].features.map((feat, idx) => (
              <li key={idx} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span style={{ fontWeight: 500 }}>{feat}</span>
              </li>
            ))}
          </ul>
          <PaymentButton text="Unlock All-Access Bundle" variant="primary" fullWidth razorpayUrl={course.razorpayUrl} />
        </div>

      </div>
    </div>
  </section>
);

// --- FAQ Section ---
export const FAQSection = ({ course }: { course: CourseDetail }) => {
   const [openIdx, setOpenIdx] = useState<number | null>(0);
   return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-headline">Got Questions?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {course.faq.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="premium-card" style={{ cursor: 'pointer', padding: '20px 24px' }} onClick={() => setOpenIdx(isOpen ? null : idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 500 }}>{faq.question}</h4>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
                {isOpen && (
                  <p style={{ marginTop: '16px', color: 'var(--text-secondary)', marginBottom: 0 }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
   )
};
