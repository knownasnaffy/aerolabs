import EssenceSection from "@/components/landing/essence";
import { HeroSection } from "@/components/landing/hero";
import { SponsorsSection } from "@/components/landing/sponsors";
import { TeamSection } from "@/components/landing/team";
import { FooterSection } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <EssenceSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}
