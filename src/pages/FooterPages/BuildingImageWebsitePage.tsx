import React from "react";
import MainContent from "../../components/BuildingImageWebsite/MainContent";

const BuildingImageWebsitePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-(0deg,#FFFFFF_0%,#D6DCE4_100%,#FFFFFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default BuildingImageWebsitePage;