import { ContactSection } from "@/components/landing/contact";
import { CoursesSection } from "@/components/landing/courses";
import EssenceSection from "@/components/landing/essence";
import { FAQSection } from "@/components/landing/faq";
import { HeroSection } from "@/components/landing/hero";
import { SponsorsSection } from "@/components/landing/sponsors";
import { TeamSection } from "@/components/landing/team";
import { FooterSection } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <EssenceSection />
      <CoursesSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
