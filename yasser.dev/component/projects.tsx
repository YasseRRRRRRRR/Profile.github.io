"use client";
import React, { useEffect, useRef } from "react";
import Sectiontitles from "@/utils/sectiontitles";
import { projectsData } from "@/lib/data";
import SingleProject from "@/utils/singleProject";
import { useSectionInView } from "@/utils/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-36">
      <Sectiontitles>My projects</Sectiontitles>
      <div className="projecx">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <SingleProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
