import AboutSection from "@/components/landing/about";
import CoursesSection from "@/components/landing/courses";
import HeroSection from "@/components/landing/hero";
import MilestonesSection from "@/components/landing/milestones";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <CoursesSection />
    </>
  );
}
