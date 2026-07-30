"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useActiveSection } from "./useActiveSection";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "resume",
    path: "resume",
  },
  {
    name: "work",
    path: "work",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const MobileNav = () => {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <a href="#home" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Muntazar<span className="text-accent">.</span>
            </h1>
          </a>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={`#${link.path}`}
                key={index}
                onClick={() => setOpen(false)}
                className={`${
                  link.path === activeId &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
