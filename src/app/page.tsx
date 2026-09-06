import Hero from "@/components/Hero";
import MovementsSection from "@/components/MovementsSection";
import ScienceSection from "@/components/ScienceSection";
import TrioSection from "@/components/TrioSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MovementsSection />
      <ScienceSection />
      <TrioSection />
      <FAQSection limit={4} />
    </>
  );
}
