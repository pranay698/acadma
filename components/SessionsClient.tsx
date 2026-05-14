'use client';
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { WebinarData } from '../lib/db';

export default function SessionsClient({ webinars }: { webinars: WebinarData[] }) {
  const [activeTab, setActiveTab] = useState('All');

  const upcomingCount = webinars.filter(w => w.type === 'upcoming').length;
  const pastCount = webinars.filter(w => w.type === 'past').length;

  const tabs = [
    { id: 'Upcoming', count: upcomingCount },
    { id: 'Past', count: pastCount },
    { id: 'All', count: webinars.length }
  ];

  const filteredWebinars = webinars.filter(w => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Upcoming') return w.type === 'upcoming';
    if (activeTab === 'Past') return w.type === 'past';
    return true;
  });

  return (
    <div>
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
                   
                   <div className="flex items-center justify-between mt-auto">
                     <div className="font-bold text-[#1E1B4B] text-lg">
                       {webinar.price}
                     </div>
                     {webinar.registrationUrl && (
                       <a href={webinar.registrationUrl} target="_blank" rel="noopener noreferrer" className="bg-[#1E1B4B] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#F5B935] hover:text-[#1E1B4B] transition-colors">
                         Register
                       </a>
                     )}
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
  );
}
