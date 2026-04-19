import os

pages = {
    "app/page.tsx": "Welcome to Acadma",
    "app/s/store/page.tsx": "Course Store",
    "app/s/checkout/page.tsx": "Checkout",
    "app/sessions/page.tsx": "Live Sessions",
    "app/products/page.tsx": "Our Products",
    "app/membership/page.tsx": "Membership Plans",
    "app/privacypolicy/page.tsx": "Privacy Policy",
    "app/termsofuse/page.tsx": "Terms of Use",
    "app/contactus/page.tsx": "Contact Us",
    "app/t/public/login/page.tsx": "Learner Login"
}

template = """import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div className="premium-card" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>{TITLE}</h1>
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
"""

home_template = """import React from 'react';
import Link from 'next/link';
import { allCoursesMap } from '../lib/data';
import { Header } from '../components/Shared';

export default function HomePage() {
  const courses = Object.values(allCoursesMap);
  const fakeCourse = courses[0]; // just to pass to Header

  return (
    <>
    <Header course={fakeCourse} />
    <main className="section bg-gradient-hero">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="hero-headline" style={{ color: 'var(--text-primary)' }}>Learn & Earn with Acadma</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Explore our premium creative and business masterclasses designed for beginners.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
          {courses.map((c) => (
            <Link href={`/courses/${c.slug}`} key={c.slug}>
              <div className="premium-card" style={{ padding: 0, height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', backgroundImage: `url(${c.thumbnailImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--accent-gold)' }}>{c.title}</h3>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600 }}>₹{c.discountPrice}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>View Course &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
"""

for path, title in pages.items():
    directory = os.path.dirname(path)
    os.makedirs(directory, exist_ok=True)
    
    if path == "app/page.tsx":
        content = home_template
    else:
        content = template.replace("{TITLE}", title)
        
    with open(path, 'w') as f:
        f.write(content)

print("Generated all stubs successfully")
