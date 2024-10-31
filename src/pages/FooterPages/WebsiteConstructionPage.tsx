
import React from "react";
import MainContent from "../../components/WebsiteConstruction/MainContent";

const WebsiteConstruction: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default WebsiteConstruction;
