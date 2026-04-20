import React from 'react';
import Link from 'next/link';
import { allCoursesMap } from '../lib/data';
import { Header } from '../components/Shared';
import {
  CheckCircle2,
  PlayCircle,
  Star,
  Users,
  HelpCircle,
  FileText,
  ChevronRight,
  MessageCircle,
  MapPin,
  Video,
  Award,
  HeartHandshake,
  Bot,
  BrainCircuit,
  TrendingUp,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                CMS DATA MOCK                               */
/* -------------------------------------------------------------------------- */
const heroData = {
  headline: "Courses for Creative Growth",
  highlight: "Acadma",
  subtext: "Affordable and accessible learning for everyone from resin art and candle making to texture art and more. Start your home-based creative journey today.",
  trustBadge: "35K+ Happy Learners",
  pillBadge: "Affordable. Accessible. Future-ready.",
};

const trustBullets = [
  "No prior experience needed",
  "Recorded lessons",
  "Beginner-safe guidance",
  "Material sourcing support",
  "WhatsApp community support",
];

const perksList = [
  { title: "Expert Led", icon: Award },
  { title: "Beginner-friendly", icon: HeartHandshake },
  { title: "Step-by-step execution", icon: PlayCircle },
  { title: "Community support", icon: Users },
  { title: "Affordable & accessible", icon: Sparkles },
];

const reassuranceCards = [
  { title: "Expert Led", desc: "Learn from industry professionals who have built successful creative businesses from scratch.", icon: Award },
  { title: "Beginner-friendly", desc: "No prior experience? No problem. Our courses start from absolute zero, focusing on safety and fundamentals.", icon: HeartHandshake },
  { title: "Step-by-step playbooks", desc: "Follow our proven execution playbooks so you never feel lost during your creative process.", icon: FileText },
  { title: "Community support", desc: "Join thousands of like-minded creators in our private groups for daily QA and motivation.", icon: Users },
  { title: "Sales & business guidance", desc: "Turn your skills into income with our dedicated modules on pricing, selling, and marketing.", icon: TrendingUp },
  { title: "Affordable and Accessible", desc: "Premium education that doesn't break the bank. Watch from your phone, anywhere, anytime.", icon: Zap },
];

const thoughtBubbles = [
  "I don't want to waste money on the wrong course...",
  "I want practical learning, not theory only...",
  "I need support when I get stuck...",
  "I want a skill that can become income..."
];

const inclusionList = [
  "Recorded video lessons",
  "Beginner-friendly execution",
  "Material sourcing support",
  "WhatsApp support / community",
  "Product-focused learning",
  "Step-by-step practical demos",
  "Access to structured beginner flow"
];

const testimonials = [
  { name: "Priya S.", product: "Resin Art Masterclass", text: "I had zero experience and was terrified of messing up expensive materials. Acadma's step-by-step guidance made it so easy. I just sold my first 5 resin coasters!" },
  { name: "Neha K.", product: "Candle Making", text: "The material sourcing list alone is worth the price. I saved so much money knowing exactly what to buy and from where. The support group on WhatsApp is a lifesaver." },
  { name: "Suman R.", product: "Texture Art", text: "Finally, a course that actually explains the business side! It’s not just a hobby anymore; I am taking bulk orders for gifting. Highly recommend." },
];

export default function HomePage() {
  const allCourses = Object.values(allCoursesMap);
  const fakeCourse = allCourses[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header course={fakeCourse} />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-stone-50">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {heroData.pillBadge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-16 tracking-tight drop-shadow-md">
                <span className="inline-block bg-white text-brand-navy px-4 py-1 rounded-xl mb-6">{heroData.highlight}</span><br />
                <span className="text-[#FEF08A] drop-shadow-lg opacity-90">{heroData.headline}</span>
              </h1>

              
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#courses" className="btn btn-primary px-8 py-4 rounded-full font-bold text-lg transition shadow-lg">
                  Explore All Courses
                </a>
                <a href="#app" className="border-2 border-stone-600/50 text-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-gold hover:text-brand-gold transition backdrop-blur-sm bg-white/5">
                  Download the App
                </a>
              </div>
              
              <div className="mt-8 mb-16 flex items-center gap-4 text-sm text-slate-300">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-brand-navy bg-slate-300 flex items-center justify-center text-xs text-slate-600 font-bold overflow-hidden`}>
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover"/>
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-white block">{heroData.trustBadge}</span>
                  Join our growing community
                </div>
              </div>
            </div>

            {/* Right Content - Overlapping Cards (Fan Stack) */}
            <div className="relative h-[450px] hidden lg:flex justify-center items-center mr-16">
              {/* Card 1 (Bottom) - Texture Art */}
              <div className="absolute w-[280px] bg-white rounded-3xl p-5 shadow-xl rotate-12 translate-x-32 transition-transform duration-300 hover:rotate-12 hover:scale-105 hover:z-30 z-0 border border-slate-100">
                <div className="w-full h-40 bg-slate-100 rounded-2xl mb-5 overflow-hidden">
                   <img src={allCoursesMap["Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560"]?.thumbnailImage} alt="Texture Art" className="w-full h-full object-cover"/>
                </div>
                <h3 className="font-bold text-brand-navy text-[1.1rem] leading-snug mb-4 line-clamp-2">{allCoursesMap["Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560"]?.title}</h3>
                <div className="font-black text-brand-navy text-2xl">
                  ₹{allCoursesMap["Basic-to-Advanced-Texture-Art-Workshop-6806266b7f970c785d7c1560"]?.discountPrice || 1475}
                </div>
              </div>

              {/* Card 2 (Middle) - Candle Making */}
              <div className="absolute w-[280px] bg-white rounded-3xl p-5 shadow-2xl -rotate-6 -translate-x-12 translate-y-8 transition-transform duration-300 hover:-rotate-6 hover:scale-105 hover:z-30 z-10 border border-slate-100">
                <div className="w-full h-40 bg-slate-100 rounded-2xl mb-5 overflow-hidden">
                   <img src={allCoursesMap["Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a"]?.thumbnailImage} alt="Candle Making" className="w-full h-full object-cover"/>
                </div>
                <h3 className="font-bold text-brand-navy text-[1.1rem] leading-snug mb-4 line-clamp-2">{allCoursesMap["Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a"]?.title}</h3>
                <div className="font-black text-brand-navy text-2xl">
                  ₹{allCoursesMap["Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a"]?.discountPrice || 1675}
                </div>
              </div>

              {/* Card 3 (Top) - Professional Resin Artist */}
              <div className="absolute w-[280px] bg-white rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rotate-3 -translate-y-6 transition-transform duration-300 hover:rotate-3 hover:scale-105 hover:z-30 z-20 border border-slate-100">
                <div className="w-full h-40 bg-slate-100 rounded-2xl mb-5 overflow-hidden">
                  <img src={allCoursesMap["Become-A-Professional-Resin-Artist-680605aed138a26261523540"]?.thumbnailImage} alt="Resin Art" className="w-full h-full object-cover"/>
                </div>
                <h3 className="font-bold text-brand-navy text-[1.1rem] leading-snug mb-4 line-clamp-2">{allCoursesMap["Become-A-Professional-Resin-Artist-680605aed138a26261523540"]?.title}</h3>
                <div className="font-black text-brand-navy text-2xl">
                  ₹{allCoursesMap["Become-A-Professional-Resin-Artist-680605aed138a26261523540"]?.discountPrice || 2475}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Below Hero */}
      <section className="bg-[#FDFBF7] py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-[2.5rem] p-8 border border-stone-200">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-brand-navy">
                <div>
                  <div className="text-3xl md:text-5xl font-black mb-2 text-brand-navy drop-shadow-sm">100+</div>
                  <div className="text-sm md:text-base font-semibold text-stone-500">Creative Courses</div>
                </div>
                <div>
                  <div className="text-3xl md:text-5xl font-black mb-2 text-brand-navy drop-shadow-sm">35K+</div>
                  <div className="text-sm md:text-base font-semibold text-slate-500">Happy Learners</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2 text-brand-navy drop-shadow-sm">Live Classes</div>
                  <div className="text-sm md:text-sm font-semibold text-slate-500">& Support Group</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2 text-brand-navy drop-shadow-sm">Affordable</div>
                  <div className="text-sm md:text-sm font-semibold text-slate-500">For Every Budget</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-[#FDFBF7] py-8 border-b border-stone-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {perksList.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-stone-600 font-semibold text-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                  {perk.title}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. PAIN TO PROMISE (Customer Thought Bubbles & Reassurance) */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
           <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-24 leading-tight">
             Want to start a creative skill from home, but overwhelmed by materials, safety concerns, and expensive courses?
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4">
              {thoughtBubbles.map((bubble, i) => (
                <div key={i} className="bg-[#Fdfbf7] p-6 rounded-3xl shadow-sm border border-stone-200 text-left relative">
                   <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                     <MessageCircle className="w-4 h-4"/>
                   </div>
                   <p className="text-stone-600 font-medium italic">"{bubble}"</p>
                </div>
              ))}
           </div>

           <div className="bg-brand-navy border-[3px] border-double border-brand-gold text-white p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(30,27,75,0.4)] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
             <div className="absolute inset-0 border-[1px] border-brand-gold/30 rounded-[3.5rem] m-2 pointer-events-none"></div>
             <p className="font-bold text-brand-gold uppercase tracking-widest text-sm mb-4 relative z-10" style={{ color: '#F5B935' }}>
               The Acadma Solution
             </p>
             <h3 className="text-3xl md:text-4xl font-extrabold mb-8 relative z-10 drop-shadow-md">
               <span className="text-white bg-clip-text">We’ve built a structured, beginner-safe learning system for you.</span>
             </h3>
             <ul className="text-left space-y-4 max-w-xl mx-auto relative z-10 mb-8 mt-4">
               {trustBullets.map((bullet, i) => (
                 <li key={i} className="flex items-center gap-4 text-lg text-white">
                    <CheckCircle2 className="w-6 h-6 text-[#F5B935] shrink-0" />
                    <span>{bullet}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-8 text-center text-sm font-semibold text-slate-300 relative z-10 tracking-widest uppercase">
               secure payment • beginner-friendly • learn at your own pace
             </div>
           </div>
        </div>
      </section>

      {/* 4. WHY ACADMA (Infrastructure Hub) */}
      <section className="bg-brand-navy text-white py-24 px-6 shadow-2xl border-t border-brand-purple/20 relative overflow-hidden">
        <div className="absolute -left-40 bottom-0 w-96 h-96 bg-brand-purple rounded-full blur-[100px] opacity-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="md:w-2/3 text-left">
              <span className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4 inline-block">The Acadma Difference</span>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2 drop-shadow-md">
                  <span className="text-white">We Don't Just Teach Art.</span><br/><span className="text-brand-gold mt-2 inline-block">We Build Entrepreneurs.</span>
              </h2>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <img 
                src="/stamp-logo.jpg" 
                alt="Acadma Royal Stamp" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-[0_0_40px_rgba(245,185,53,0.15)] ring-1 ring-white/10" 
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="h-full flex flex-col bg-white border border-stone-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform">
               <Bot className="w-12 h-12 text-brand-navy mb-6 shrink-0" />
               <h4 className="font-bold text-2xl mb-4 text-brand-navy">Digital Hub & AI Co-founder</h4>
               <p className="text-stone-600 leading-relaxed text-[15px] font-medium flex-grow">Lifetime access to recordings. 90 days of AI-powered marketing support to help you write captions and price products.</p>
            </div>
            <div className="h-full flex flex-col bg-white border border-stone-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform">
               <ShoppingBag className="w-12 h-12 text-brand-navy mb-6 shrink-0" />
               <h4 className="font-bold text-2xl mb-4 text-brand-navy">Material Hub</h4>
               <p className="text-stone-600 leading-relaxed text-[15px] font-medium flex-grow">Direct links to wholesale vendors. No middleman, no extra commissions. You buy where we buy at cost price.</p>
            </div>
            <div className="h-full flex flex-col bg-white border border-stone-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform">
               <MessageCircle className="w-12 h-12 text-brand-navy mb-6 shrink-0" />
               <h4 className="font-bold text-2xl mb-4 text-brand-navy">Community Hub</h4>
               <p className="text-stone-600 leading-relaxed text-[15px] font-medium flex-grow">Exclusive WhatsApp groups for daily Q&A. You are never alone in your journey. Connect directly with mentors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EARNING TECH (Reassurance Cards) */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">Why this works perfectly for beginners.</h2>
             <p className="text-slate-500 text-lg">Converting your raw skill into your first sale. We are EarningTech.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {reassuranceCards.map((card, i) => {
               const Icon = card.icon;
               return (
                 <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-lavender hover:bg-brand-lavender/5 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-purple mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-brand-navy mb-3">{card.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                 </div>
               )
             })}
          </div>
        </div>
      </section>

      {/* 6. COURSE CATALOG */}
      <section id="courses" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">Countless Courses, Just for you.</h2>
            <p className="text-lg text-slate-500">Pick a category, or browse our most popular masterclasses below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCourses.slice(0, 12).map((c) => (
              <a href={`/courses/${c.slug}`} key={c.slug} className="group flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-brand-lavender transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                   <img src={c.thumbnailImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                   {/* Badge */}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-purple text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                     {c.courseType}
                   </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-brand-navy text-lg leading-snug mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">{c.title}</h3>
                  <div className="flex items-center gap-2 mb-4 text-xs font-medium text-slate-400">
                    <Video className="w-4 h-4"/> Recorded Access
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                     <div>
                        <div className="text-2xl font-black text-brand-navy drop-shadow-sm">₹{c.discountPrice}</div>
                        {c.price > c.discountPrice && (
                          <div className="text-sm text-slate-400 font-medium line-through">₹{c.price}</div>
                        )}
                     </div>
                     <div className="w-10 h-10 rounded-full bg-brand-lavender/30 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                       <ChevronRight className="w-5 h-5"/>
                     </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/s/store" className="inline-flex items-center gap-2 bg-white border-2 border-brand-lavender text-brand-purple px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-lavender/20 transition-colors">
              Explore Store <ChevronRight className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </section>

      {/* 7. UPCOMING LIVE CLASSES STUB */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-100 pb-4">
             <div>
               <h2 className="text-3xl font-extrabold text-brand-navy mb-2">Live Class Schedule</h2>
               <p className="text-slate-500">Don't miss our interactive live sessions.</p>
             </div>
             <div className="flex gap-4 mt-6 md:mt-0">
               <button className="text-sm font-bold text-brand-purple border-b-2 border-brand-purple pb-2 px-2">Upcoming <span className="bg-brand-lavender text-xs px-2 py-0.5 rounded-full ml-1">0</span></button>
               <button className="text-sm font-semibold text-slate-400 pb-2 px-2 hover:text-slate-600">Past <span className="bg-slate-100 text-xs px-2 py-0.5 rounded-full ml-1">2</span></button>
             </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6 opacity-70 cursor-not-allowed">
              {[1, 2].map((i) => (
                <div key={i} className="flex bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden p-4 items-center gap-6">
                  <div className="w-24 h-24 bg-slate-200 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-[10px] text-slate-400 p-2 text-center">Class Image</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Webinar Conducted</div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Add your class title here</h4>
                    <p className="text-sm text-slate-500 mb-2">Date & time to be updated</p>
                    <div className="font-bold text-emerald-600">Free</div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>


      {/* 8. WHAT'S INCLUDED & MATERIAL STARTER */}
      <section className="py-24 px-6 bg-brand-navy text-white border-t border-brand-purple/20">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-extrabold mb-8 text-brand-gold">What's Included</h2>
               <ul className="space-y-6">
                 {inclusionList.map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                     </div>
                     <span className="text-lg text-slate-200 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] text-slate-900 shadow-2xl relative">
               <div className="absolute top-0 right-8 -mt-6 bg-brand-gold text-brand-navy font-bold text-sm px-6 py-2 rounded-full uppercase tracking-widest">
                 A Beginner's Guide
               </div>
               <h3 className="text-2xl font-extrabold mb-4 text-brand-navy">Material Starter Guidance</h3>
               <p className="text-slate-600 mb-8 font-medium">We help beginners buy smart so they don’t overspend in the beginning. Get exact vendor lists, ratio charts, and safety equipment recommendations.</p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl">🛡️</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Safety First</h4>
                      <p className="text-sm text-slate-500">Masks, gloves, & ventilation.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl">⚖️</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Perfect Ratios</h4>
                      <p className="text-sm text-slate-500">No more wasted expensive materials.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl">📦</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Vendor Links</h4>
                      <p className="text-sm text-slate-500">Directly from the source, no middlemen.</p>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* 9. LEARN -> APPLY -> EARN */}
      <section className="pt-24 pb-40 px-6 bg-brand-lavender/30">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-8">Learn → Apply → Earn</h2>
            <p className="text-xl text-slate-600 mb-16 font-medium leading-relaxed">
              Use our structured courses to build your confidence step-by-step. Start by creating beautiful products to <strong>gift</strong>. Customize them for your circle. As your confidence grows, potentially start <strong>selling from home.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
               <div className="bg-white p-8 rounded-3xl shadow-sm h-full flex flex-col">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">1</div>
                  <h4 className="font-bold text-brand-navy text-xl mb-2">Learn Safely</h4>
                  <p className="text-slate-500 text-sm">Master the foundations. Follow safety protocols and understand your materials intimately without wasting money.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm relative md:translate-y-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 font-bold text-xl mb-6">2</div>
                  <h4 className="font-bold text-brand-navy text-xl mb-2">Apply Intelligently</h4>
                  <p className="text-slate-500 text-sm">Follow practical project demos. Make your first coaster, candle, or art piece with our step-by-step guidance.</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm relative md:translate-y-16 h-full flex flex-col">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-xl mb-6">3</div>
                  <h4 className="font-bold text-brand-navy text-xl mb-2">Earn Modestly</h4>
                  <p className="text-slate-500 text-sm">Leverage our business strategy modules to price your pieces correctly and accept your first customer orders.</p>
               </div>
            </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS */}
      <section className="py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
               <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-2 inline-block">Real Results</span>
               <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy">Loved by 35,000+ Learners</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {testimonials.map((t, idx) => (
                 <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col relative mt-8">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-brand-gold text-2xl font-serif">"</div>
                    <div className="flex gap-1 mb-4 text-brand-gold pt-2">
                      <Star className="w-4 h-4 fill-current"/>
                      <Star className="w-4 h-4 fill-current"/>
                      <Star className="w-4 h-4 fill-current"/>
                      <Star className="w-4 h-4 fill-current"/>
                      <Star className="w-4 h-4 fill-current"/>
                    </div>
                    <p className="text-slate-600 font-medium italic mb-8 grow">"{t.text}"</p>
                    <div className="border-t border-slate-200 mt-auto pt-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-lavender rounded-full flex items-center justify-center text-brand-purple font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-brand-navy">{t.name}</div>
                        <div className="text-xs text-slate-500 uppercase font-semibold">{t.product}</div>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. ALL-ACCESS PASS CTA */}
      <section className="py-24 px-6 bg-brand-navy text-white relative">
         <div className="absolute inset-0 bg-gradient-to-b from-brand-rich-purple/50 to-transparent opacity-50"></div>
         <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-block bg-brand-gold text-brand-navy font-bold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(226,173,48,0.5)]">
                    Limited Time Offer
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Unlock All-Course Access Pass</h2>
                  <p className="text-lg text-brand-lavender mb-10 max-w-lg">
                    Premium access to all courses, live doubt solving, business setup guidance, Instagram growth strategy, and certificates.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                     <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-3xl flex-1 relative">
                        <div className="text-brand-lavender text-sm font-bold uppercase tracking-wider mb-2">Monthly Access</div>
                        <div className="text-4xl font-black text-white mb-2">₹450<span className="text-lg font-normal text-slate-400">/mo</span></div>
                        <div className="text-sm text-slate-300 mb-6">Best for first-time learners to build beginner foundation.</div>
                        <a href="/s/store" className="block w-full py-3 rounded-full border border-brand-lavender text-center font-bold hover:bg-white/5 transition">Start Monthly</a>
                     </div>
                     <div className="bg-brand-gold p-6 rounded-3xl flex-1 relative shadow-[0_0_30px_rgba(226,173,48,0.3)] text-brand-navy transform sm:-translate-y-4">
                        <div className="absolute -top-3 right-4 bg-brand-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best Value</div>
                        <div className="text-brand-navy/80 text-sm font-bold uppercase tracking-wider mb-2">Yearly Access</div>
                        <div className="text-5xl font-black mb-2">₹2475<span className="text-lg font-normal text-brand-navy/60">/yr</span></div>
                        <div className="text-sm text-brand-navy/80 mb-6 font-medium">Includes all advanced modules, live classes & biz strategy.</div>
                        <a href="/s/store" className="block w-full py-4 rounded-full bg-brand-navy text-white text-center font-black hover:bg-slate-800 transition">Unlock Full Pass</a>
                     </div>
                  </div>
               </div>

               <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-black aspect-video flex mt-12 lg:mt-0 items-center justify-center">
                  {/* User video embedding request */}
                  <video 
                    src="https://d502jbuhuh9wk.cloudfront.net/orgData/67aef7fa6977be37435e2c4f/pages/assets/images/Website%20Video%20GIF2.mp4" 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 pointer-events-none"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 12. FINAL SOFT CTA */}
      <section className="py-32 px-6 bg-white text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lavender/30 rounded-full blur-[100px] -z-10"></div>
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6">Financial independence, without leaving your city.</h2>
            <p className="text-xl text-slate-600 mb-12">
               This isn’t just another course. It’s your gateway to growth — inside your phone. Acadma aims to help 10 Lakh Indians learn valuable skills and build real-world validation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <a href="/s/store" className="w-full sm:w-auto bg-brand-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition shadow-[0_0_20px_rgba(21,27,46,0.3)]">
                 Start Learning Today
               </a>
               <a href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community." className="w-full sm:w-auto border-2 border-slate-200 text-slate-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition">
                 Talk to a Counsellor
               </a>
            </div>
         </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between gap-4">
         <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starts from</div>
            <div className="text-xl font-black text-brand-navy">₹450</div>
         </div>
         <a href="/s/store" className="bg-brand-navy text-white px-6 py-3 rounded-full font-bold text-sm text-center flex-1 transition hover:bg-slate-800">
           Explore All Courses
         </a>
      </div>

    </div>
  );
}
