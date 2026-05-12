import React from 'react';

export default function LeadForm({ courseName }: { courseName?: string }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-md mx-auto my-12">
      <h3 className="font-bold text-[#1E1B4B] text-2xl mb-2 text-center">Get Course Details</h3>
      <p className="text-slate-500 mb-6 text-center text-sm">Enter your details to receive full syllabus and offers.</p>
      
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
        <input type="hidden" name="access_key" value="be1cfc5b-f586-484e-88e0-c8a9d57ea927" />
        <input type="hidden" name="subject" value={`New Lead: ${courseName || 'General Inquiry'}`} />
        <input type="hidden" name="course" value={courseName || 'General Inquiry'} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div>
          <label htmlFor="lead-name" className="block font-bold text-xs text-[#1E1B4B] mb-1">Full Name</label>
          <input type="text" name="name" id="lead-name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5B935] font-medium text-sm" placeholder="Jane Doe" />
        </div>

        <div>
          <label htmlFor="lead-email" className="block font-bold text-xs text-[#1E1B4B] mb-1">Email Address</label>
          <input type="email" name="email" id="lead-email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5B935] font-medium text-sm" placeholder="jane@example.com" />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block font-bold text-xs text-[#1E1B4B] mb-1">WhatsApp Number</label>
          <input type="tel" name="phone" id="lead-phone" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5B935] font-medium text-sm" placeholder="+91 98765 43210" />
        </div>

        <button type="submit" className="w-full bg-[#1E1B4B] text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-[#F5B935] hover:text-[#1E1B4B] transition-colors mt-2">
          Request Information
        </button>
      </form>
    </div>
  );
}
