import AboutSection from "@/components/landing/about";
import CoursesSection from "@/components/landing/courses";
import HeroSection from "@/components/landing/hero";
import MilestonesSection from "@/components/landing/milestones";
import WhyRoboticsSection from "@/components/landing/why-robotics";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MilestonesSection />
      <CoursesSection />
      <WhyRoboticsSection />
    </>
  );
}
