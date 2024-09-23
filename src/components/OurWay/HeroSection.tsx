
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex z-0 flex-col pt-[150px] w-full max-md:max-w-full bg-[#1E293B]">
      <div className="flex flex-col flex-1 items-center w-full p-[10px] gap-[20px] max-md:max-w-full">
        <div className="w-full text-xs text-center leading-6 text-gray-200 max-w-[1907px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">דף הבית/הדרך שלנו</div>
          </div>
        </div>
        <div className="w-full text-xs text-center max-w-[1907px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full max-md:text-4xl h-full">
            <h2 className="w-full text-[#F7BA00] font-rubik font-bold text-[48px] leading-[58px] max-md:max-w-full">
              החזון שלי
            </h2>
          </div>
        </div>
        <div className="w-full text-xs text-center h-full max-w-[1907px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full h-full">
            <span className="self-start text-white font-rubik text-[48px] leading-[50px] ">
              כולם רוצים להיות מקום 1 בגוגל.
              <br />
              אך אנחנו לא מבטיחים הבטחות אלא נותנים תוצאות.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
