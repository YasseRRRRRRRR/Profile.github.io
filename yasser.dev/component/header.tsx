"use client";
import React from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeContextSection";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 h-[5.5rem] w-[212rem] rounded-none border-2 border-dPurple  bg-white bg-opacity-80  sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -150, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w=full items-center justify-center p-3 hover:text-purple-950 transition ease-in",
                  {
                    "text-Beige hover:text-Beige": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-dPurple rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
