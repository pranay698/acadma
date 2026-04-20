'use client';
import React, { useState } from 'react';
import { Header } from '../../components/Shared';
import { Calendar } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'test',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80',
    date: '28 Jan 2026 04:55 PM to 05:25 PM',
    status: 'Webinar lapsed',
    price: 'Free',
    type: 'past'
  },
  {
    id: 2,
    title: 'Republic Day Flash Sale - Courses at 26 Rs',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1d46d0312?auto=format&fit=crop&q=80',
    date: '26 Jan 2026 04:45 PM to 05:15 PM',
    status: 'Webinar conducted',
    price: 'Free',
    type: 'past'
  }
];

export default function SessionsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { id: 'Upcoming', count: 0 },
    { id: 'Past', count: 2 },
    { id: 'All', count: 2 }
  ];

  const filteredWebinars = webinars.filter(w => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Upcoming') return w.type === 'upcoming';
    if (activeTab === 'Past') return w.type === 'past';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <div className="container mx-auto py-16 px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-8">Webinars</h1>
        
        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 mb-10 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-semibold text-[1.05rem] transition-colors relative whitespace-nowrap ${isActive ? 'text-[#1E1B4B]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab.id} {tab.count}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1E1B4B] rounded-t-full"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {filteredWebinars.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
             {filteredWebinars.map((webinar) => (
                <div key={webinar.id} className="flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                   {/* Image Container */}
                   <div className="relative w-full h-52 bg-slate-200 mb-4 overflow-hidden shadow-sm border border-slate-200">
                     <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     {/* Badge */}
                     <div className="absolute bottom-3 left-3 bg-slate-800/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-sm">
                       {webinar.status}
                     </div>
                   </div>
                   
                   {/* Content */}
                   <h3 className="font-bold text-[#1E1B4B] text-[1.1rem] mb-3 leading-snug line-clamp-2">{webinar.title}</h3>
                   <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{webinar.date}</span>
                   </div>
                   
                   <div className="font-bold text-[#1E1B4B] text-lg mt-auto">
                     {webinar.price}
                   </div>
                </div>
             ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
             No {activeTab.toLowerCase()} webinars found.
          </div>
        )}

      </div>
    </div>
  )
}
