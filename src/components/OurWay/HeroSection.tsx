import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col pt-[150px] w-full bg-[#1E293B] max-md:max-w-full">
      <div className="flex flex-col items-center w-full p-[10px] gap-[20px] max-md:max-w-full">
        <Title />
        <MainContent />
      </div>
    </section>
  );
};

const Title: React.FC = () => (
  <div className="w-full text-center max-w-[1907px] max-md:max-w-full">
    <h2 className="w-full text-[#F7BA00] font-rubik font-bold text-[48px] leading-[58px] max-md:text-4xl max-md:max-w-full">
      החזון שלי
    </h2>
  </div>
);

const MainContent: React.FC = () => (
  <div className="w-full text-center max-w-[1907px] max-md:max-w-full">
    <span className="block text-white font-rubik text-[48px] leading-[50px]">
      כולם רוצים להיות מקום 1 בגוגל.
      <br />
      אך אנחנו לא מבטיחים הבטחות אלא נותנים תוצאות.
    </span>
  </div>
);

export default HeroSection;