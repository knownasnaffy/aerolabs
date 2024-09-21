import { Box, GraduationCap, Hand, Users } from "lucide-react";
import { ReactNode } from "react";

const AboutSection = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto min-h-screen grid place-items-center py-16 gap-8 lg:grid-cols-2 place-content-center px-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral">
            Let&#39;s Build the Future
            <span className="text-blue-500">—Together!</span>
          </h1>
          <p className="prose text-xl">
            At AeroLabs, we turn learning into play! Dive into hands-on robotics
            and drone courses, guided by experts, with custom kits that make
            your ideas fly<span className="text-blue-500">—literally</span>.
            Join a community of creators, and let&#39;s build the future
            together!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 w-full gap-4 pb-4">
          <FeatureItem
            title={
              <>
                <Hand />
                <span>
                  Hands-On <span className="text-blue-500">Fun</span>
                </span>
              </>
            }
            body="Get hands-on with our interactive robotics kits and bring your creations to life."
          />
          <FeatureItem
            title={
              <>
                <GraduationCap />
                <span>
                  <span className="text-blue-500">Expert</span> Guides
                </span>
              </>
            }
            body="Learn from our team of experienced robotics educators and mentors."
          />
          <FeatureItem
            title={
              <>
                <Box />
                <span>
                  <span className="text-blue-500">Cool</span> Kits
                </span>
              </>
            }
            body="Explore the latest robotics technology with our custom-designed kits."
          />
          <FeatureItem
            title={
              <>
                <Users />
                <span>
                  Join the <span className="text-blue-500">Crew</span>
                </span>
              </>
            }
            body="Connect with a global community of tech explorers and enthusiasts."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const FeatureItem = ({ title, body }: { title: ReactNode; body: string }) => (
  <div className="bg-base-100 border border-base-300 p-4 rounded-lg w-full [box-shadow:0_5px_0_0_#44536641] hover:-translate-y-1 transition-all hover:drop-shadow">
    <h3 className="text-xl font-semibold flex flex-col gap-1">{title}</h3>
    <p className="prose">{body}</p>
  </div>
);
