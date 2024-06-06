import React, { useRef } from "react";
import Sectiontitles from "@/utils/sectiontitles";
import { projectsData } from "@/lib/data";
import SingleProject from "@/utils/singleProject";

export default function Projects() {
  return (
    <section>
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
