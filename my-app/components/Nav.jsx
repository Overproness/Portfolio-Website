"use client";

import { useActiveSection } from "./useActiveSection";

const Links = [
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
const Nav = () => {
  const activeId = useActiveSection();

  return (
    <nav className="gap-8 flex">
      {Links.map((link, index) => {
        return (
          <a
            href={`#${link.path}`}
            key={index}
            className={`${
              link.path === activeId && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
