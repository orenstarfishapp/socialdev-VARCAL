
import React from "react";
import HeroSection from "../../components/WebsiteConstruction/HeroSection";
import MainContent from "../../components/BuildingImageWebsite/MainContent";

const BuildingImageWebsitePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <HeroSection title="בניית אתר תדמית האם זה עדיין רלוונטי בשנת 2023?"  />
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default BuildingImageWebsitePage;
