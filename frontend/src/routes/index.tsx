import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll, CursorGlow, EnquiryForm } from "@/components/shared";
import { Navbar, Footer, FloatingActions } from "@/components/layout";
import { Hero, Marquee, FeaturedProjects, Showcase, WhyChooseUs, Testimonials, FAQ } from "@/components/sections";
// import { MapSection } from "@/components/sections/MapSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Apartments in Nagpur | Buy 2BHK & 3BHK Flats | VIP VisionSquare" },
      { name: "description", content: "Looking to buy property in Nagpur? Explore luxury 2BHK & 3BHK flats in prime locations like MIHAN & Wardha Road. RERA approved. Book your site visit today!" },
      { name: "keywords", content: "real estate in Nagpur, buy flat in Nagpur, 2BHK in Nagpur, 3BHK flats Nagpur, property investment Nagpur, residential projects Nagpur, commercial property Nagpur" },
      { property: "og:title", content: "Luxury Apartments in Nagpur | VIP VisionSquare Infra Private Limited" },
      { property: "og:description", content: "Premium 2BHK & 3BHK flats in MIHAN, Wardha Road, Beltarodi & Manish Nagar. RERA approved. Starting ₹45 Lakhs*." },
    ],
    links: [],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-[#0B0B0B] text-white">
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Showcase />
      {/* <MapSection /> */}
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingActions />
    </main>
  );
}
