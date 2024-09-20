"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setShadow(true);
    else setShadow(false);
  });
  return (
    <>
      <div className={cn("fixed z-50 inset-x-0 top-0 container mx-auto p-2")}>
        <div
          className={cn(
            "navbar transition-all duration-300",
            shadow && "rounded-2xl shadow-md bg-base-100/50 backdrop-blur"
          )}
        >
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost text-xl">
              AeroLabs
            </Link>
          </div>
          <button className="btn btn-ghost btn-square lg:hidden">
            <Menu />
          </button>
          <div className="gap-2 hidden lg:flex">
            <Link href={"/courses"} className="btn btn-ghost">
              Courses
            </Link>
            <Link href={"/store"} className="btn btn-ghost">
              Store
            </Link>
            <Link href={"/blog"} className="btn btn-ghost">
              Blog
            </Link>
            <Link href={"/contact"} className="btn btn-ghost">
              Contact Us
            </Link>
            <Link
              href={"/auth"}
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
