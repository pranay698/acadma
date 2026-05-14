import React from 'react';
import { Header } from '../../components/Shared';
import SessionsClient from '../../components/SessionsClient';
import { getGoogleSheetsWebinars } from '../../lib/db';

export const revalidate = 60; // ISR cache

export default async function SessionsPage() {
  // Fetch webinars from Google Sheets
  const webinars = await getGoogleSheetsWebinars();

  // If no webinars are configured yet in the sheet, provide a fallback for preview
  const displayWebinars = webinars.length > 0 ? webinars : [
    {
      id: 1,
      title: 'Republic Day Flash Sale - Courses at 26 Rs',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1d46d0312?auto=format&fit=crop&q=80',
      date: '26 Jan 2026 04:45 PM to 05:15 PM',
      status: 'Webinar conducted',
      price: 'Free',
      type: 'past'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <div className="container mx-auto py-16 px-6 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-8">Webinars</h1>
        <SessionsClient webinars={displayWebinars} />
      </div>
    </div>
  );
}
