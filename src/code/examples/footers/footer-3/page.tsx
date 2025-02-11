import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ChevronRight,
} from "lucide-react";

const footerSections = [
  {
    title: "Products",
    links: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "Community", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Partners", "Contact Us"],
  },
];

export default function FooterComprehensive() {
  return (
    <section className="mt-20">
      <footer className="border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-2 space-y-4 lg:col-span-2">
              <Typography as="h3" variant="3xl/semibold" className="">
                Elegant Co.
              </Typography>
              <Typography
                as="p"
                variant="sm/normal"
                className="text-muted-foreground"
              >
                Empowering businesses with innovative solutions.
              </Typography>

              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                    >
                      <Icon className="h-6 w-6" />
                    </Link>
                  )
                )}
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <Typography as="h4" variant="md/medium" className="">
                  {section.title}
                </Typography>
                <ul className="space-y-4 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="group flex items-center text-muted-foreground transition-colors duration-300 hover:text-primary"
                      >
                        <ChevronRight className="-ml-4 h-4 w-4 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
                        <span>{link}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-700 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; 2023 Elegant Co. All rights reserved.
            </p>
            <div className="mt-4 space-x-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
