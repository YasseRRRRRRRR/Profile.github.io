"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function SingleProject({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className=" relative bg-lPurple max-w-[42rem] border border-dPurple/5 overflow-hidden sm:pr-8 sm:h-[20rem] rounded-lg even:pl-8 hover:bg-bgCards transition">
        <div className="pt-4 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold text-dPurple">{title}</h3>
          <p className="mt-2 leading-relaxed text-black"> {description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-dPurple text-Beige px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            src={imageUrl}
            alt={`image of the ${title} project`}
            quality={95}
            className="absolute transition top-8 -right-40 w-[28.25rem] rounded-t-lg border-2 border-Beige shadow-2xl
          group-even:right-[initial]
          group-even:-left-40 
          group-hover:scale-[1.04]
           
          group-hover:-translate-x-3 
          group-hover:-translate-y-3 
          group-hover:-rotate-2 
          
          group-even:group-hover:translate-x-3 
          group-even:group-hover:rotate-2
          "
          />
        </div>
      </article>
    </motion.div>
  );
}
