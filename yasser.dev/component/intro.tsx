"use client";
import { useActiveSectionContext } from "@/context/activeContextSection";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <div
      ref={ref}
      id="home"
      className="relative h-[56vh] top-24 flex items-center justify-center scroll-mt-80"
    >
      <div className="w-40 h-full flex items-center justify-center">
        <div className="h-60">Intro</div>
      </div>
    </div>
  );
}
