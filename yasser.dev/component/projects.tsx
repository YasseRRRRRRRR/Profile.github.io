"use client";
import React, { useEffect, useRef } from "react";
import Sectiontitles from "@/utils/sectiontitles";
import { projectsData } from "@/lib/data";
import SingleProject from "@/utils/singleProject";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeContextSection";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
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
