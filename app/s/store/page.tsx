import React from 'react';
import { Header } from '../../../components/Shared';
import { allCoursesMap } from '../../../lib/data';
import Link from 'next/link';

export default function StorePage() {
  const allCourses = Object.values(allCoursesMap);
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto py-24 px-6 max-w-7xl">
        <h1 className="text-4xl font-extrabold text-brand-navy mb-8">All Courses & Masterclasses</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
           {allCourses.map((c) => (
             <Link href={`/courses/${c.slug}`} key={c.slug} className="group flex flex-col bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-brand-lavender transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                   <img src={c.thumbnailImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-purple">{c.title}</h3>
                  <div className="mt-auto pt-4 border-t border-slate-100 font-black text-2xl">₹{c.discountPrice}</div>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  )
}
