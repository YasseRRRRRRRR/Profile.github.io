import React, { Children } from "react";
type SectionTitlePropType = {
  children: React.ReactNode;
};
export default function Sectiontitles({ children }: SectionTitlePropType) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center ">
      {children}
    </h2>
  );
}
