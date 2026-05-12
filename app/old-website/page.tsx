import React from 'react';

export default function OldWebsiteBridge() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-lg text-center border border-slate-100">
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-4">Looking for our legacy platform?</h1>
        <p className="text-slate-600 mb-8">
          We have upgraded our systems to bring you a premium learning experience. If you need to access your past purchases or legacy courses, you can visit our old portal.
        </p>
        <a 
          href="https://learn.acadma.com" 
          className="inline-block w-full bg-[#1E1B4B] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#F5B935] hover:text-[#1E1B4B] transition-colors"
        >
          Go to Legacy Portal
        </a>
        <div className="mt-6">
          <a href="/" className="text-sm text-slate-500 hover:text-[#1E1B4B] transition-colors underline">
            Return to New Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
