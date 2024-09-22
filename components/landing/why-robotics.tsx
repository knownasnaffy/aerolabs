import { BriefcaseIcon, GraduationCap, Hand, PencilIcon, PowerIcon, RocketIcon, Users } from "lucide-react";
import { ReactNode } from "react";

const WhyRoboticsSection = () => {
  return (
    <>
      <section>
        <div className="container mx-auto min-h-screen py-16 px-6 flex flex-col items-center lg:text-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral w-full">
            <span className="text-blue-500">Why </span>Learn Robotics? It's the
            Future!
          </h1>
          <p className="prose text-xl pt-2">
            Robotics is the future, and learning it now sets you up for success.
            At AeroLabs, we make it easy to gain the skills that industries are
            looking for.
          </p>
          <div className="grid lg:grid-cols-4 mt-4 gap-6 lg:gap-4">
            <FeatureItem
              title={
                <>
                  <RocketIcon />
                  <span>
                    <span className="text-blue-500">Innovate</span> the World
                  </span>
                </>
              }
              body="Robotics is transforming industries from healthcare to space exploration."
            />
            <FeatureItem
              title={
                <>
                  <PowerIcon />
                  <span>
                    <span className="text-blue-500">Future-Proof</span> Your
                    Skills
                  </span>
                </>
              }
              body="Stay ahead in a world where tech is evolving every day."
            />
            <FeatureItem
              title={
                <>
                  <PencilIcon />
                  <span>
                    <span className="text-blue-500">Creative</span> Engineering
                  </span>
                </>
              }
              body="Design, build, and solve problems like never before."
            />
            <FeatureItem
              title={
                <>
                  <BriefcaseIcon />
                  <span>
                    <span className="text-blue-500">Real-World</span>{" "}
                    Applications
                  </span>
                </>
              }
              body="Learn skills that you can apply to real projects—at school, work, or home."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyRoboticsSection;

const FeatureItem = ({ title, body }: { title: ReactNode; body: string }) => (
  <div className="bg-base-100 border border-base-300 p-4 rounded-lg w-full [box-shadow:0_5px_0_0_#44536641] lg:hover:-translate-y-1 transition-all lg:hover:drop-shadow">
    <h3 className="text-xl font-semibold flex flex-col gap-2 items-center [&>svg]:size-10">
      {title}
    </h3>
    <p className="prose">{body}</p>
  </div>
);
