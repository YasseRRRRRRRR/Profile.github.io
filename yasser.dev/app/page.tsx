"use client";
import React, { useState } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
// import React from "react";
import Intro from "@/component/intro";
import SevctionDivider from "@/component/sectionDivider";
import About from "@/component/about";
import Projects from "@/component/projects";
// import Sectiontitles from "@/utils/sectiontitles";
// import { projectsData } from "@/lib/data";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <>
      {/* <header className="z-[999] relative">
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
                      "text-Beige hover:text-Beige":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name === activeSection && (
                    <span className="bg-dPurple rounded-full absolute inset-0 -z-10"></span>
                  )}
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header> */}

      <main className="flex flex-col items-center justify-center">
        <Intro />

        <SevctionDivider />
        <About />

        <SevctionDivider />
        <Projects />
        <SevctionDivider />

        {/* <section
        // id="about"
        className="h-screen bg-red-950 text-white scroll-mt-28"
      >
        scrol corrector
      </section> */}
        {/* <section>
        <Sectiontitles>My projects</Sectiontitles>
        <div className="projecx">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <SingleProject {...project} />
            </React.Fragment>
          ))}
        </div>
      </section> */}
        <SevctionDivider />
      </main>
    </>
  );
}

// type ProjectProps = (typeof projectsData)[number];

// function SingleProject({ title, description, tags, imageUrl }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgress,
//         opacity: opacityProgress,
//       }}
//       className="group mb-3 sm:mb-8 last:mb-0"
//     >
//       <article className=" relative bg-lPurple max-w-[42rem] border border-dPurple/5 overflow-hidden sm:pr-8 sm:h-[20rem] rounded-lg even:pl-8 hover:bg-bgCards transition">
//         <div className="pt-4 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
//           <h3 className="text-2xl font-semibold text-dPurple">{title}</h3>
//           <p className="mt-2 leading-relaxed text-black"> {description}</p>
//           <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//             {tags.map((tag, index) => (
//               <li
//                 className="bg-dPurple text-Beige px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
//                 key={index}
//               >
//                 {tag}
//               </li>
//             ))}
//           </ul>
//           <Image
//             src={imageUrl}
//             alt={`image of the ${title} project`}
//             quality={95}
//             className="absolute transition top-8 -right-40 w-[28.25rem] rounded-t-lg border-2 border-Beige shadow-2xl
//           group-even:right-[initial]
//           group-even:-left-40
//           group-hover:scale-[1.04]

//           group-hover:-translate-x-3
//           group-hover:-translate-y-3
//           group-hover:-rotate-2

//           group-even:group-hover:translate-x-3
//           group-even:group-hover:rotate-2
//           "
//           />
//         </div>
//       </article>
//     </motion.div>

//   );
// }
