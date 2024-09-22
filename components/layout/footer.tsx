import { Facebook, Globe, GraduationCap, Instagram, Linkedin, Locate, Mail, Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-base-200">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-6">
          <div className="md:col-span-2 lg:col-span-1 md:order-last lg:order-first flex flex-col md:items-center lg:items-start justify-center">
            <h3 className="text-3xl font-bold w-fit">AeroLabs</h3>
            <p className="prose w-fit">© 2023. AeroLabs. All rights reserved.</p>
            <ul className="inline-flex items-center gap-2 mt-1 text-neutral/75 [&_svg]:size-5">
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                  className="hover:text-pink-500 transition-all"
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                  className="hover:text-blue-700 transition-all"
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                  className="hover:text-blue-500 transition-all"
                >
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <ul className="text-neutral/75 [&_svg]:size-5 space-y-1 [&_a]:inline-flex [&_a]:gap-2 [&_a]:items-center [&_a:hover]:text-neutral">
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                >
                  <GraduationCap /> Courses
                </Link>
              </li>
              <li>
                <Link
                  href=""
                >
                  <ShoppingCart /> Store
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                >
                  <Globe /> Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-3">Contact Us</h4>
            <ul className="text-neutral/75 [&_svg]:size-5 [&_svg]:my-0.5 space-y-1 [&_a]:inline-flex [&_a]:gap-2 [&_a:hover]:text-neutral">
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                >
                  <Mail /> Yy5XU@example.com
                </Link>
              </li>
              <li>
                <Link
                  href=""
                >
                  <Phone /> +91 12345 67890
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:Yy5XU@example.com"
                >
                  <Locate /> Street no. 1, House no. 2, Punjab, India
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
