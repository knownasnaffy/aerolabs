import { Separator } from "@/components/ui/separator";
import { PlaneTakeoff } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <Card className="p-10 bg-muted/60 dark:bg-card dark:border-muted shadow-sm rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full md:col-span-2 xl:col-span-4 flex flex-col justify-center gap-2">
            <Link href="/" className="flex font-bold items-center">
              <PlaneTakeoff className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg size-8 p-1 mr-2 text-white" />

              <h3 className="text-2xl">AeroLabs</h3>
            </Link>
            <div className="max-md:hidden">
              <h3 className="">
                &copy; 2024 Designed and developed by
                <Link
                  target="_blank"
                  href="/"
                  className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                >
                  AeroLabs
                </Link>
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div>
          <Separator
            orientation="horizontal"
            className="col-span-2 md:hidden"
          />
          <div className="md:hidden col-span-2">
            <h3 className="">
              &copy; 2024 Designed and developed by
              <Link
                target="_blank"
                href="/"
                className="text-primary transition-all border-primary hover:border-b-2 ml-1"
              >
                AeroLabs
              </Link>
            </h3>
          </div>
        </div>
      </Card>
    </footer>
  );
};
