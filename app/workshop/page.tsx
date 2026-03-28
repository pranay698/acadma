"use client";

import { useState } from "react";

const workshops = [
  {
    title: "Candle Making Mastery",
    category: "Craft",
    price: "₹499",
  },
  {
    title: "Resin Art Pro",
    category: "Art",
    price: "₹799",
  },
  {
    title: "Soap Making",
    category: "DIY",
    price: "₹399",
  },
];

export default function WorkshopPage() {
  const [search, setSearch] = useState("");

  const filtered = workshops.filter((w) =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 min-h-screen bg-slate-950 text-white">
      
      <h1 className="text-3xl font-bold mb-6">Workshops</h1>

      {/* 🔍 Search Console (your favorite) */}
      <input
        type="text"
        placeholder="Search workshops..."
        className="w-full p-3 mb-6 rounded bg-slate-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((w, i) => (
          <div key={i} className="p-4 bg-slate-800 rounded">
            <h2 className="font-bold text-lg">{w.title}</h2>
            <p className="text-sm text-gray-400">{w.category}</p>
            <p className="mt-2">{w.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
