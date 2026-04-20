import React from "react";
import { Header, TrustStrip, MobileStickyCTA, PaymentButton } from "../../../components/Shared";
import {
  HeroSection,
  PainToPromise,
  OutcomesGrid,
  ReassuranceSection,
  CurriculumSection,
  LearnApplyEarn,
  BundlePricingSection,
  FAQSection,
} from "../../../components/Sections";
import { includedItems, materialsList, instructorData, testimonials, allCoursesMap, highlights, outcomes, reassurances, pricingPlans } from "../../../lib/data";
import { CheckCircle2, Star } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = Object.keys(allCoursesMap);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await params;
  const courseData = allCoursesMap[p.slug];
  if (!courseData) return { title: 'Course Not Found' };

  return {
    title: `${courseData.title} | ${courseData.platform}`,
    description: courseData.description,
    alternates: {
      canonical: `/courses/${courseData.slug}`,
    },
    openGraph: {
      title: courseData.title,
      description: courseData.description,
      images: [{ url: courseData.thumbnailImage }],
      url: `https://www.acadma.com/courses/${courseData.slug}`,
      type: "website",
    }
  };
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const p = await params;
  const courseData = allCoursesMap[p.slug];

  if (!courseData) {
    return <div>Course not found</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.title,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": courseData.platform,
      "sameAs": "https://www.acadma.com"
    },
    "offers": {
      "@type": "Offer",
      "price": courseData.discountPrice,
      "priceCurrency": "INR",
      "category": courseData.category
    }
  };

  return (
    <>
      <Script id={`course-schema-${p.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* 1. Header */}
      <Header course={courseData} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection course={courseData} />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Pain to Promise */}
        <PainToPromise />

        {/* 5. What You Will Make */}
        <OutcomesGrid />

        {/* 6. Why This Course Works for Beginners */}
        <ReassuranceSection />

        {/* 7. Curriculum Overview */}
        <CurriculumSection course={courseData} />

        {/* 8. What's Included */}
        <section className="section bg-gradient-lavender">
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 className="section-headline">What's Included</h2>
            <div className="premium-card">
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {includedItems.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px", fontSize: "1.1rem" }}>
                    <CheckCircle2 size={24} className="icon-green" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. Material Starter List */}
        <section className="section">
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 className="section-headline" style={{ marginBottom: "16px" }}>Material Starter Guide</h2>
              <p style={{ fontSize: "1.1rem" }}>We help beginners buy smart so they don't overspend in the beginning.</p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {materialsList.map((mat, idx) => (
                <div key={idx} className="premium-card" style={{ textAlign: "center" }}>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{mat.name}</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>{mat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Learn Apply Earn */}
        <LearnApplyEarn course={courseData} />

        {/* 11. Instructor Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="premium-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <img src={instructorData.avatar} alt="Instructor" style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px", boxShadow: "var(--shadow-md)" }} />
              <h3 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>Meet {instructorData.name}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", color: "var(--text-secondary)" }}>
                <span>Teaches in {instructorData.languages}</span>
                <span>•</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" /> {instructorData.rating} Instructor Rating</span>
              </div>
              <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>{instructorData.bio}</p>
            </div>
          </div>
        </section>

        {/* 12. Testimonials */}
        <section className="section bg-gradient-lavender">
          <div className="container">
            <h2 className="section-headline">What Our Learners Say</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {testimonials.map((review, idx) => (
                <div key={idx} className="premium-card">
                  <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(review.rating) ? "var(--accent-gold)" : "transparent"} color="var(--accent-gold)" />
                    ))}
                  </div>
                  <p style={{ fontSize: "1.05rem", fontStyle: "italic", marginBottom: "24px" }}>"{review.message}"</p>
                  <h5 style={{ margin: 0, fontSize: "1.1rem" }}>{review.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Basic vs Full Bundle Comparison */}
        <BundlePricingSection course={courseData} />

        {/* 14. FAQ Section */}
        <FAQSection course={courseData} />

        {/* 15. Final CTA */}
        <section className="section" style={{ background: "var(--text-primary)", color: "white", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "600px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: "16px" }}>Ready to start your creative journey?</h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "32px" }}>
              Join hundreds of women learning practical skills from home.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <PaymentButton text="Enroll Now" variant="primary" razorpayUrl={courseData.razorpayUrl} />
              <a 
                href="https://api.whatsapp.com/send?phone=%2B918935018962&text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20learning%20community."
                target="_blank"
                rel="noopener noreferrer"
                className="btn" 
                style={{ background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.2)' }}
              >
                Talk to a counsellor
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 16. Mobile Sticky CTA */}
      <MobileStickyCTA course={courseData} />
    </>
  );
}