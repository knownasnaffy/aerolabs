import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CoursesSection = () => {
  return (
    <>
      <section className="bg-base-200">
        <div className="container mx-auto min-h-screen py-16 px-6 flex flex-col items-center lg:text-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral">
            <span className="text-blue-500">Featured </span>Robotics & Drone
            Courses
          </h1>
          <p className="prose text-xl pt-2">
            Explore our top-rated courses on the latest advancements in robotics
            and drone technology. Designed for beginners to experts, these
            courses will help you take your skills to the next level.
          </p>
          <div className="grid lg:grid-cols-3 mt-4 gap-6 lg:gap-4">
            <CourseCard
              title="Introduction to Robotics"
              description="Learn the fundamentals of robotics, including mechanics, sensors, and programming. Ideal for beginners looking to kickstart their robotics journey."
              href="/courses/robotics"
              price={0}
              duration="3 hours"
            />
            <CourseCard
              title="Introduction to Robotics"
              description="Learn the fundamentals of robotics, including mechanics, sensors, and programming. Ideal for beginners looking to kickstart their robotics journey."
              href="/courses/robotics"
              price={0}
              duration="3 hours"
            />
            <CourseCard
              title="Introduction to Robotics"
              description="Learn the fundamentals of robotics, including mechanics, sensors, and programming. Ideal for beginners looking to kickstart their robotics journey."
              href="/courses/robotics"
              price={0}
              duration="3 hours"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;

const CourseCard = ({
  title,
  description,
  href,
  price,
  duration,
}: {
  title: string;
  description: string;
  href: string;
  price: number;
  duration: string;
}) => (
  <div className="bg-base-100 border border-base-300 p-4 rounded-lg w-full [box-shadow:0_5px_0_0_#44536641] hover:-translate-y-1 transition-all hover:drop-shadow text-left">
    <h3 className="text-2xl font-semibold flex flex-col gap-1">{title}</h3>
    <p className="prose mb-2">
      {description}
      <div className="flex justify-between">
        <span>
          <strong>Duration:</strong> {duration}
        </span>
        <span>
          <strong>Price:</strong> {price ? `₹${price}` : "Free"}
        </span>
      </div>
    </p>
    <Link
      href={href}
      className="flex justify-center w-full sm:px-6 h-12 bg-blue-500 rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] border-b-[1px] border-blue-400 hover:translate-y-[2px] mb-4"
    >
      <span className="flex gap-2 justify-center items-center h-full text-white font-bold text-lg ">
        Enroll Now <ArrowRight />
      </span>
    </Link>
  </div>
);
