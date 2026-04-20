import React from 'react';
import { Header } from '../../components/Shared';
import { MessageCircle, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Acadma',
  description: 'Get in touch with the Acadma team for any questions or support.',
  alternates: {
    canonical: 'https://www.acadma.com/contactus',
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />

      <section className="py-24 px-6 bg-white relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center mb-16 px-4">
             <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#1E1B4B]">We're Here to Help.</h1>
             <p className="text-[1.15rem] md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
               Have a doubt about a course or payment? Our Success Agents are just a message away.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
             
             {/* Left - Contact Cards mimicking the screenshot */}
             <div className="flex flex-col gap-8">
                {/* WhatsApp Card */}
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border hover:border-green-200 transition-colors shadow-sm w-full" style={{ borderColor: 'var(--slate-200, #e2e8f0)' }}>
                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                   </div>
                   <h3 className="font-bold text-[#1E1B4B] text-2xl mb-2 tracking-tight">WhatsApp Support</h3>
                   <p className="text-slate-500 text-lg mb-8">Fastest way to get your queries resolved.</p>
                   
                   <a href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community." className="inline-block font-bold text-green-600 text-[1.1rem] hover:text-green-700 transition">
                      Chat with us +91 8935018962 →
                   </a>
                </div>

                {/* Email Card */}
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border hover:border-blue-200 transition-colors shadow-sm w-full" style={{ borderColor: 'var(--slate-200, #e2e8f0)' }}>
                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Mail className="w-8 h-8 text-blue-500" />
                   </div>
                   <h3 className="font-bold text-[#1E1B4B] text-2xl mb-2 tracking-tight">Email Us</h3>
                   <p className="text-slate-500 text-lg mb-8">For business inquiries and partnership.</p>
                   
                   <a href="mailto:support@acadma.com" className="inline-block font-bold text-blue-600 text-[1.1rem] hover:text-blue-700 transition">
                      support@acadma.com
                   </a>
                </div>
             </div>

             {/* Right - Form Plugin Container */}
             <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col h-full">
                <h3 className="font-bold text-[#1E1B4B] text-2xl mb-2 tracking-tight">Submit a Ticket</h3>
                <p className="text-slate-500 mb-8">Create a support ticket below, and our agent will respond shortly.</p>
                
                {/* 
                  Ticketing Plugin / Form:
                  Currently utilizing Web3Forms to map the data exactly. 
                  Replace the exact form node below with your FreshDesk / Zendesk / Custom JS Plugin if required.
                */}
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 flex-1">
                  <input type="hidden" name="access_key" value="be1cfc5b-f586-484e-88e0-c8a9d57ea927" />
                  <input type="hidden" name="subject" value="New Support Ticket" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="space-y-2">
                    <label htmlFor="name" className="font-bold text-sm text-[#1E1B4B]">Full Name</label>
                    <input type="text" name="name" id="name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-lavender font-medium" placeholder="Jane Doe" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-bold text-sm text-[#1E1B4B]">Email Address</label>
                    <input type="email" name="email" id="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-lavender font-medium" placeholder="jane@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-bold text-sm text-[#1E1B4B]">Describe your issue</label>
                    <textarea name="message" id="message" rows={5} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-lavender resize-none font-medium" placeholder="Tell us what you need help with..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#1E1B4B] text-white font-bold text-[1.1rem] py-4 rounded-xl hover:bg-brand-purple transition-colors shadow-lg mt-auto">
                    Create Ticket
                  </button>
                </form>
             </div>

          </div>
        </div>
      </section>
    </div>
  );
}
