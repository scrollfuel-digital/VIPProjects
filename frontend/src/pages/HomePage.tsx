import { Hero, Marquee, FeaturedProjects, Showcase, WhyChooseUs, Testimonials, FAQ } from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Showcase />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
