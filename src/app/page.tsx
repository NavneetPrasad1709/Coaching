import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import Services from "@/components/sections/Services";
import ClassesBoards from "@/components/sections/ClassesBoards";
import Subjects from "@/components/sections/Subjects";
import HowItWorks from "@/components/sections/HowItWorks";
import Teachers from "@/components/sections/Teachers";
import SuccessStories from "@/components/sections/SuccessStories";
import ParentReviews from "@/components/sections/ParentReviews";
import TrustPillars from "@/components/sections/TrustPillars";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import FinalCta from "@/components/sections/FinalCta";
import { faqs } from "@/lib/data";
import { site } from "@/lib/site";

/** Local SEO: organization + FAQ rich results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: site.brand,
      url: site.url,
      telephone: site.phoneE164,
      email: site.email,
      description:
        "Home, online and offline tuition for Classes 5–12 (CBSE & ICSE) with verified tutors in Prayagraj and Varanasi. Free demo class for every student.",
      areaServed: site.cities.map((city) => ({ "@type": "City", name: city })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <WhyChoose />
        <Services />
        <ClassesBoards />
        <Subjects />
        <HowItWorks />
        <Teachers />
        <SuccessStories />
        <ParentReviews />
        <TrustPillars />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
