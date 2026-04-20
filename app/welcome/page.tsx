import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/Shared';
import { allCoursesMap } from '../../lib/data';

export const metadata = {
  title: 'Welcome to Acadma | Payment Successful',
  description: 'Your course access is now unlocked. Start learning right away.',
};

export default function WelcomePage() {
  // Mock course for the header dropdown
  const fakeCourse = allCoursesMap["Basic-to-Advanced-Candle-Making-Masterclass-680785aa2b0fe87922524e6a"];

  return (
    <div className="min-h-screen font-sans bg-[#f7f8fc] text-[#1f2937]">
      <Header course={fakeCourse} />
      
      <main className="max-w-[1100px] mx-auto px-6 py-12 lg:py-20">
        
        {/* HERO SECTION */}
        <section className="bg-white rounded-[20px] py-10 px-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center mb-6">
          <div className="inline-block bg-[#e8fff1] text-[#0f9d58] py-2 px-4 rounded-full text-sm font-bold mb-4 tracking-wide">
            Payment Successful
          </div>
          <h1 className="text-3xl lg:text-[36px] font-bold mb-3 text-[#111827]">
            Welcome to Acadma!
          </h1>
          <p className="text-[17px] text-slate-600 max-w-[700px] mx-auto mb-6 leading-relaxed">
            Your course access is now unlocked. Start learning right away and explore
            all the resources included with your purchase.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="rounded-xl inline-block bg-gradient-to-r from-red-500 to-[#FEF08A] p-[2px] transition-transform duration-200 hover:scale-[1.02] shadow-md hover:shadow-lg">
              <Link 
                href="https://www.acadma.in" 
                className="block px-[22px] py-[12px] bg-white rounded-[10px] font-bold text-[#111827] hover:text-red-600 transition-colors"
              >
                Start Learning
              </Link>
            </div>
            <Link 
              href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community." 
              className="inline-block px-[22px] py-[14px] rounded-xl font-bold transition-all duration-200 bg-[#eef2ff] text-[#3730a3] hover:bg-[#e0e7ff]"
            >
              Join Community
            </Link>
          </div>
        </section>

        {/* WHAT YOU'LL GET */}
        <section className="mt-8">
          <h2 className="text-[28px] font-bold mb-[18px] text-[#111827] text-center">What you’ll get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px]">
            {/* Card 1 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">🎥</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">Course Recordings</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Access your recordings anytime and revisit the lessons whenever you need.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">📄</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">PDF Notes & Resources</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Get notes, study material, and useful PDFs to support your learning journey.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">🏆</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">Certificate</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Receive your completion certificate after successfully finishing the course.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">👨‍🏫</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">Mentor Support</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Get expert guidance and help whenever you get stuck during the course.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">💬</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">Community Access</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Join the learner community for discussion, updates, and shared support.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-[18px] p-[22px] shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f3f4f6] text-[22px] mb-[14px]">📈</div>
              <h3 className="text-[18px] font-bold mb-2 text-[#111827]">Business Guidance</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Learn how to apply your skills, build confidence, and move toward earning opportunities.</p>
            </div>
          </div>
        </section>

        {/* INFO LAYOUT */}
        <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[18px] mt-8">
          
          {/* Next Steps */}
          <div className="bg-white rounded-[18px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] border border-[#eef2f7]">
            <h2 className="text-[24px] font-bold mb-[10px] text-[#111827]">Next steps</h2>
            <ul className="flex flex-col">
              <li className="flex gap-[14px] py-4 border-b border-[#edf2f7]">
                <div className="min-w-[34px] w-[34px] h-[34px] rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <div>
                  <h4 className="text-[17px] font-bold mb-1 text-[#111827]">Open your course dashboard</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed">Access all your lessons, recordings, and study materials from one place.</p>
                </div>
              </li>
              <li className="flex gap-[14px] py-4 border-b border-[#edf2f7]">
                <div className="min-w-[34px] w-[34px] h-[34px] rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <div>
                  <h4 className="text-[17px] font-bold mb-1 text-[#111827]">Join the community group</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed">Stay connected with mentors and fellow learners for support and updates.</p>
                </div>
              </li>
              <li className="flex gap-[14px] pt-4 pb-0 items-start">
                <div className="min-w-[34px] w-[34px] h-[34px] rounded-full bg-[#111827] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <div>
                  <h4 className="text-[17px] font-bold mb-1 text-[#111827]">Start your first lesson</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed">Begin learning immediately and make the most of your access from day one.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Need Help Box */}
          <div className="rounded-[18px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] bg-gradient-to-br from-[#111827] to-[#1f2937] text-white">
            <h3 className="text-[22px] font-bold mb-2.5">Need help?</h3>
            <p className="text-[#d1d5db] text-sm leading-relaxed mb-5">
              If you have any issues accessing your course or resources, our team is here to help.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community." className="block text-white font-medium bg-white/10 p-[12px_14px] rounded-xl hover:bg-white/20 transition-colors">
                💬 Chat with Support
              </Link>
              <Link href="https://www.acadma.in" className="block text-white font-medium bg-white/10 p-[12px_14px] rounded-xl hover:bg-white/20 transition-colors">
                📄 Download Invoice
              </Link>
              <Link href="/contactus" className="block text-white font-medium bg-white/10 p-[12px_14px] rounded-xl hover:bg-white/20 transition-colors">
                ✉️ Contact Mentor Team
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER NOTE */}
        <div className="text-center text-slate-500 text-sm mt-8 pb-4">
          Thank you for choosing Acadma. We’re excited to be part of your learning journey.
        </div>

      </main>
    </div>
  );
}
