"use client";
import { useActiveSectionContext } from "@/context/activeContextSection";
import { useSectionInView } from "@/utils/hooks";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref } = useSectionInView("Home");

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
