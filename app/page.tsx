import EssenceSection from "@/components/landing/essence";
import { HeroSection } from "@/components/landing/hero";
import { SponsorsSection } from "@/components/landing/sponsors";
import { TeamSection } from "@/components/landing/team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <EssenceSection />
      <TeamSection />
    </>
  );
}
