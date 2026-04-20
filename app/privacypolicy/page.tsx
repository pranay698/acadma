import React from 'react';
import { Header } from '../../components/Shared';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto py-24 px-6 max-w-3xl prose prose-slate">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> April 2026</p>
        <p>Welcome to Acadma. This privacy policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
        <h2>Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, phone number, and payment details when you register for an account or purchase a course.</p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To process transactions securely</li>
          <li>To communicate with you regarding updates, support, and marketing</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us via our Contact Form.</p>
      </div>
    </div>
  )
}
