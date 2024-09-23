import React from "react";
import HeroBg from "../../assets/images/Background.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col flex-1 justify-center px-[10px] w-full text-center  min-h-[372px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center my-0 mx-auto gap-5 py-[10px] basis-auto grow shrink h-full self-auto max-w-[1184px] w-full">
        <div className="w-full text-sm leading-8 z-10 text-zinc-300">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">אודותינו/דף הבית</div>
          </div>
        </div>
        <h1 className="w-full text-5xl font-bold leading-tight whitespace-nowrap text-stone-50 z-10  max-md:text-4xl">
          <div className="w-full max-md:max-w-full max-md:text-4xl">
            <div className="pb-px w-full px-[508px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              אודותינו
            </div>
          </div>
        </h1>
        <div dir="ltr" className=" overflow-hidden absolute left-0 w-full ">
          <img className=" h-[372px] w-full -z-10" src={HeroBg} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
