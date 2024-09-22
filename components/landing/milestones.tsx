import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MilestonesSection = () => {
  return (
    <>
      <section>
        <div className="container mx-auto min-h-screen py-16 px-6 flex flex-col items-center lg:text-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral w-full">
            <span className="text-blue-500">Our </span>Milestones
          </h1>
          <p className="prose text-xl pt-2">
            Our team has been recognized for their innovative work and
            dedication to the field of robotics. Check out some of our recent
            milestones and awards.
          </p>
          <div className="grid lg:grid-cols-4 mt-4 gap-6 lg:gap-4">
            <Milestone
              title="Robotics Expo 2024"
              description="Our team will be showcasing our latest robotics projects at the upcoming Robotics Expo."
            />
            <Milestone
              title="Robotics Expo 2024"
              description="Our team will be showcasing our latest robotics projects at the upcoming Robotics Expo."
            />
            <Milestone
              title="Robotics Expo 2024"
              description="Our team will be showcasing our latest robotics projects at the upcoming Robotics Expo."
            />
            <Milestone
              title="Robotics Expo 2024"
              description="Our team will be showcasing our latest robotics projects at the upcoming Robotics Expo."
            />
          </div>
          <Link
            href={"/awards"}
            className="flex justify-center w-full max-w-md sm:px-6 h-12 bg-blue-500 rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] border-b-[1px] border-blue-400 hover:translate-y-[2px] my-6"
          >
            <span className="flex gap-2 justify-center items-center h-full text-white font-bold text-lg ">
              Visit our Blog <ArrowUpRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MilestonesSection;

const Milestone = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="relative bg-base-100 border border-base-300 p-4 rounded-lg w-full [box-shadow:0_5px_0_0_#44536641] lg:hover:-translate-y-1 transition-all lg:hover:drop-shadow text-left">
    <div className="absolute -top-2 -right-2">
      <div className="relative">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-500 text-white aspect-square z-50">
          1
        </span>
        <span className="absolute z-10 px-1 py-2 -translate-x-3 rotate-[26deg] translate-y-7 bg-blue-500 -top-2 right-0"></span>
        <span className="absolute z-10 px-1 py-2 -translate-x-px rotate-[-26deg] translate-y-7 bg-blue-500 -top-2 right-0"></span>
      </div>
    </div>
    <h3 className="text-2xl font-semibold flex flex-col gap-1">{title}</h3>
    <p className="prose mb-2">{description}</p>
  </div>
);
