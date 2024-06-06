"use client";

import React from "react";
import Sectiontitles from "@/utils/sectiontitles";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Sectiontitles>About Me</Sectiontitles>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper dignissim magna, vitae congue mauris congue sit amet. Nunc
        commodo ipsum elit, eu sollicitudin leo pharetra ac. Integer laoreet,
        risus a commodo tristique, massa libero semper sem, quis egestas nisi
        diam a nibh. Suspendisse sit amet ante sed magna fringilla venenatis ac
        sit amet urna. Sed dapibus vehicula mollis. Sed mollis magna vitae
        congue auctor. Proin laoreet velit bibendum magna aliquam, et convallis
        lorem bibendum.
      </p>
      <p>
        Ut in placerat dui, egestas interdum felis. Duis lobortis iaculis
        tempus. Pellentesque non ex massa. Nulla dapibus tempus mollis.
        Vestibulum ante diam, vehicula a ex eu, luctus finibus mi. Vestibulum
        mollis nisi sed nibh aliquet faucibus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Praesent interdum ultricies nunc eget volutpat. Vivamus
        consectetur, libero quis mollis blandit, leo justo consectetur mauris,
        ut vehicula ante ipsum ac est. Duis tempor elementum velit non
        malesuada.
      </p>
    </motion.section>
  );
}
