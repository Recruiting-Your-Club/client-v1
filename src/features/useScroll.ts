"use client";

import { useRef } from "react";

export const useScroll = (sections: string[]) => {
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>(
    Object.fromEntries(sections.map((section) => [section, null]))
  );

  const scrollToSection = (key: string) => {
    const section = sectionsRef.current[key];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { sectionsRef, scrollToSection };
};

export default useScroll;
