"use client";
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type linkProps = (typeof links)[number]["name"];
type ActiveSectionContextProps = {
  activeSection: linkProps;
  setActiveSection: React.Dispatch<React.SetStateAction<linkProps>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<linkProps>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider component"
    );
  }

  return context;
}
