


import React from "react";
import HeroSection from "../../components/WebsiteConstruction/HeroSection";
import MainContent from "../../components/UIdesignPage/MainContent";

const UIdesignPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-gradient-to-b from-white to-white">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <HeroSection title="עיצוב UI/UX"  />
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default UIdesignPage;
