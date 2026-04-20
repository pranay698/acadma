import React from 'react';
import { Header } from '../../components/Shared';

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto py-24 px-6 max-w-3xl prose prose-slate">
        <h1>Terms of Use</h1>
        <p><strong>Last Updated:</strong> April 2026</p>
        <p>By accessing or using the Acadma platform, you agree to be bound by these Terms of Use.</p>
        <h2>Account Registration</h2>
        <p>You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your login credentials.</p>
        <h2>Content Ownership</h2>
        <p>All course materials, videos, and PDFs provided by Acadma are copyrighted and may not be redistributed, resold, or shared without explicit permission.</p>
        <h2>Refund Policy</h2>
        <p>Due to the digital nature of our courses, we do not offer refunds once a course has been accessed. Please review course descriptions carefully before purchasing.</p>
      </div>
    </div>
  )
}
