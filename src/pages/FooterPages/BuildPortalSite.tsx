
import React from "react";
import HeroSection from "../../components/WebsiteConstruction/HeroSection";
import MainContent from "../../components/BuildPortalSite/MainContent";

const BuildPortalSite: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <HeroSection title="מה צריך לדעת לפני בניית אתר חדש"  />
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default BuildPortalSite;
