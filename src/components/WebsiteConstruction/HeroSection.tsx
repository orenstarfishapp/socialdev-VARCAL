import React from "react";
import HeroBg from "../../assets/images/Background1.png";

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <section className="flex flex-col font-rubik flex-1 justify-center px-[10px] py-[200px] w-full text-center min-h-[372px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center my-0 mx-auto gap-5 py-[10px] basis-auto grow shrink h-full self-auto max-w-[1184px] w-full">
        <div dir="ltr" className="overflow-hidden absolute left-0 w-full top-0">
          <img className="h-[495px] w-full -z-10" src={HeroBg} alt="Hero Background" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;