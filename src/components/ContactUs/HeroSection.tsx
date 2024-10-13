import React from "react";
import HeroBg from "../../assets/images/Background.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col font-rubik flex-1 justify-center px-[10px] py-[200px] w-full text-center  min-h-[372px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center my-0 mx-auto gap-5 py-[10px] basis-auto grow shrink h-full self-auto max-w-[1184px] w-full">
        <h1 className="w-full text-5xl font-bold leading-tight whitespace-nowrap text-stone-50 z-10  max-md:text-4xl">
          <div className="w-full max-md:max-w-full max-md:text-4xl">
            <h2 className="pb-px w-full px-[508px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
              צרו קשר
            </h2>
          </div>
        </h1>
        <div className="w-full text-sm leading-8 z-10 text-zinc-300">
          <div className="w-full max-md:max-w-full">
            <h2 className="w-full max-md:max-w-full text-[24px] font-normal">
              תשאירו לנו רק כמה פרטים, אנחנו נדאג לכל השאר.
            </h2>
          </div>
        </div>
        <div dir="ltr" className=" overflow-hidden absolute left-0 w-full ">
          <img className=" h-[513.578px] w-full -z-10" src={HeroBg} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
