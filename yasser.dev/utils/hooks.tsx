import { useActiveSectionContext } from "@/context/activeContextSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { linkProps } from "./types";

export function useSectionInView(sectionName: linkProps, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);
  return { ref };
}
