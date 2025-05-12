import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { Typography } from "@/registry/wedges/ui/typography";

export default function FooterMinimal() {
  return (
    <section className="mt-20">
      <footer className="border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <Typography
                as="h3"
                variant="2xl/semibold"
                className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent"
              >
                Elegant Co.
              </Typography>
              <Typography
                as="p"
                variant="sm/normal"
                className="mt-2 text-wedges-muted-foreground"
              >
                Crafting digital experiences
              </Typography>
            </div>
            <div className="mt-6 flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-wedges-muted-foreground transition-colors duration-300 hover:text-wedges-primary"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              )}
            </div>
            <div className="mt-8 text-center">
              <Typography
                as="p"
                variant="xs/normal"
                className="text-wedges-muted-foreground"
              >
                &copy; 2023 Elegant Co. All rights reserved.
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
