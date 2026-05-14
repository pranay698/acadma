import React from 'react';
import { Header } from '../../components/Shared';
import MembershipClient from '../../components/MembershipClient';
import { getGoogleSheetsMemberships, getAllCourses } from '../../lib/db';

export const revalidate = 60; // ISR cache

export default async function MembershipPage() {
  // Fetch memberships from Google Sheets
  const plans = await getGoogleSheetsMemberships();
  
  // Fetch a few courses to display
  const allCourses = await getAllCourses();
  const displayCourses = allCourses.slice(0, 4);

  // Fallback plans if sheet is empty
  const displayPlans = plans.length > 0 ? plans : [
    { id: 'monthly', title: 'Monthly', price: 449, original: null, billed: 'Billed every month', badge: null, discount: null },
    { id: 'quarterly', title: 'Quarterly', price: 999.5, original: 1999, billed: 'Billed quarterly - ₹999.5', badge: 'RECOMMENDED', discount: '50% Discount' },
    { id: 'yearly', title: 'Yearly', price: 1925, original: 5500, billed: 'Billed yearly - ₹1925', badge: null, discount: '65% Discount' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <MembershipClient plans={displayPlans} courses={displayCourses} />
    </div>
  );
}
