"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [shadow, setShadow] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) setShadow(true);
    else setShadow(false);
  });
  return (
    <>
      <div className={cn("fixed z-50 inset-x-0 top-0 container mx-auto p-2")}>
        <div
          className={cn(
            "navbar transition-all duration-300",
            shadow && "rounded-2xl shadow-md bg-base-100"
          )}
        >
          <div className="flex-1">
            <Link href={"/"} className="btn btn-ghost text-xl">
              AeroLabs
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="btn btn-ghost btn-square lg:hidden">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="text-left">
                <Link href={"/"} className="btn w-fit btn-ghost text-xl">
                  AeroLabs
                </Link>
                <ul className="menu pt-0 -translate-y-2 w-56">
                  <li>
                    <a>Courses</a>
                  </li>
                  <li>
                    <a>Store</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <Link href={"/auth"} className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-600 hover:text-white active:text-white">Sign In</Link>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>

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
