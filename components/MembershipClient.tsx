'use client';
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { MembershipPlan } from '../lib/db';
import { CourseDetail } from '../lib/data'; // fallback or import from db if preferred

export default function MembershipClient({ plans, courses }: { plans: MembershipPlan[], courses: any[] }) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0] || null);

  return (
    <>
      <div className="container mx-auto py-16 px-6 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-8">Members club</h1>
        
        <div className="flex flex-col gap-4 text-left mx-auto max-w-sm mb-12">
          {["Interact with instructors and peers", "Exclusive courses and blogs", "And much more", "Live and Recordings Access"].map((item, i) => (
             <div key={i} className="flex items-center gap-3">
                <Check className="text-emerald-500 w-5 h-5 flex-shrink-0" strokeWidth={3} />
                <span className="text-[1.05rem] text-slate-700">{item}</span>
             </div>
          ))}
        </div>

        <h3 className="font-bold text-[#1E1B4B] text-lg mb-6">Choose a membership plan</h3>
        
        <div className="flex flex-col gap-4 mb-8">
           {plans.map((plan) => {
             const isSelected = selectedPlan?.id === plan.id;
             return (
               <button 
                 key={plan.id}
                 onClick={() => setSelectedPlan(plan)}
                 className={`relative w-full text-left p-5 border-2 rounded-xl transition-all duration-200 ${isSelected ? 'border-blue-400 bg-blue-50/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'}`}
               >
                 <div className="flex items-start gap-4">
                    <div className={`mt-1 w-5 h-5 rounded-full border-[6px] flex-shrink-0 ${isSelected ? 'border-blue-500 bg-white' : 'border-slate-200 bg-white'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center gap-3 flex-wrap">
                           <span className="font-bold text-[#1E1B4B] text-lg">{plan.title}</span>
                           {plan.badge && <span className="bg-orange-100 text-orange-600 font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">{plan.badge}</span>}
                           {plan.discount && <span className="bg-blue-500 text-white font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">{plan.discount}</span>}
                         </div>
                         <div className="text-right">
                           <span className="font-bold text-blue-500 text-lg md:text-xl">₹{plan.price}</span>
                           {plan.original && <div className="text-xs text-slate-400 line-through">₹{plan.original}</div>}
                         </div>
                      </div>
                      <div className="text-xs font-semibold text-slate-500">{plan.billed}</div>
                    </div>
                 </div>
               </button>
             )
           })}
        </div>

        {selectedPlan && (
          selectedPlan.razorpayUrl ? (
            <a href={selectedPlan.razorpayUrl} className="inline-block bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-[1.1rem] hover:bg-blue-600 transition shadow-md w-full md:w-auto">
              Buy {selectedPlan.title} Plan For ₹{selectedPlan.price}
            </a>
          ) : (
            <button className="bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-[1.1rem] hover:bg-blue-600 transition shadow-md w-full md:w-auto">
              Buy {selectedPlan.title} Plan For ₹{selectedPlan.price}
            </button>
          )
        )}
      </div>

      {/* Bottom Courses Section */}
      <div className="bg-slate-100/50 py-20 px-6 border-t border-slate-200">
         <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-black text-[#1E1B4B] mb-12">Exclusive courses in membership</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((c) => (
                <Link href={`/courses/${c.slug}`} key={c.slug} className="group flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-brand-lavender transition-all duration-300">
                   <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      <img src={c.thumbnailImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                   </div>
                   <div className="p-5 flex flex-col flex-1">
                     <h3 className="font-bold text-[#1E1B4B] text-base mb-1 group-hover:text-brand-purple line-clamp-2">{c.title}</h3>
                     <div className="mt-auto pt-4 border-t border-slate-50 font-black text-xl text-blue-500">₹{c.discountPrice}</div>
                   </div>
                </Link>
              ))}
            </div>
         </div>
      </div>
    </>
  );
}
