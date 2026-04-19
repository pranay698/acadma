import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div className="premium-card" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '32px' }}>
          This page is currently being updated for our new premium experience. 
        </p>
        <Link href="/" style={{ padding: '12px 24px', backgroundColor: 'var(--text-primary)', color: 'white', borderRadius: '50px', fontWeight: 600 }}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
