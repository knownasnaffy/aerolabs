import Image from "next/image";
import HeroImage from "@/components/assets/hi-robot.jpg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto min-h-screen grid place-items-center py-16 gap-4 lg:grid-cols-2 place-content-center">
      <div
        className={cn(
          "flex flex-col max-lg:items-center max-lg:text-center px-6"
          //   "shadow-2xl shadow-base-100 bg-base-100/50 backdrop-blur"
        )}
      >
        <h1 className="heading-lg hidden sm:block hover:[text-shadow:0_0px_0_#1b6ff8,0_0px_0_#1b70f841] transition-all hover:translate-y-2 w-fit">
          AeroLabs
        </h1>
        <h1 className="heading-sm sm:hidden hover:[text-shadow:0_0px_0_#1b6ff8,0_0px_0_#1b70f841] transition-all hover:translate-y-2 w-fit">
          AeroLabs
        </h1>
        <h3 className="text-2xl font-semibold">
          Your Gateway to Mastering Robotics and Drone Technology
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 mt-4 w-full items-center">
          <Link
            href={"/courses"}
            className="button w-full max-w-md sm:px-6 h-12 bg-blue-500 rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] border-b-[1px] border-blue-400 hover:translate-y-[2px]"
          >
            <span className="flex gap-2 justify-center items-center h-full text-white font-bold text-lg ">
              Explore Courses
              <ArrowRight />
            </span>
          </Link>
          <Link
            href={"/courses"}
            className="button w-full max-w-md sm:px-6 h-12 bg-neutral rounded-lg cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#445366,0_0px_0_0_#44536641] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#445366,0_15px_0_0_#44536641] border-b-[1px] border-neutral hover:translate-y-[2px]"
          >
            <span className="flex gap-2 justify-center items-center h-full text-neutral-content font-bold text-lg ">
              Shop Components
              <ShoppingCart />
            </span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image src={HeroImage} alt="asd" />
        <span className="absolute -bottom-2 right-0 rounded-md bg-base-200 px-2 py-1">
          Designed by{" "}
          <a href="http://www.freepik.com/" className="link text-blue-500">
            Freepik
          </a>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
