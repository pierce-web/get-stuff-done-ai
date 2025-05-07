
import React from "react";
import { BasicMeta } from "./BasicMeta";
import { SocialMeta } from "./SocialMeta";
import { StructuredData } from "./StructuredData";
import { AnalyticsScripts } from "./AnalyticsScripts";

/**
 * HeadManager component that combines all the head content
 * This allows for better organization and maintenance of the head content
 */
export const HeadManager: React.FC = () => {
  return (
    <>
      <BasicMeta />
      <SocialMeta />
      <StructuredData />
      <AnalyticsScripts />
    </>
  );
};
