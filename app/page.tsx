import EssenceSection from "@/components/landing/essence";
import { HeroSection } from "@/components/landing/hero";
import { SponsorsSection } from "@/components/landing/sponsors";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <EssenceSection />
    </>
  );
}
