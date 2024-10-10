import React from "react";

const ServiceTitle: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-[10px] mt-20 w-full font-bold leading-tight text-center text-zinc-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mx-auto flex-1 items-center py-2.5 max-w-full w-[1140px]">
        <div className="flex flex-col justify-center w-full text-xs font-light leading-7 max-w-[1140px] max-md:max-w-full">
          <div className="flex flex-col flex-1 w-full max-md:max-w-full">
            <div className="w-full max-md:px-5 max-md:max-w-full">

              
              שירותים מקצועיים
            </div>
          </div>
        </div>
        <h2 className="flex flex-col justify-center mt-5 w-full text-5xl text-yellow-500 max-w-[1140px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-col flex-1 w-full max-md:max-w-full max-md:text-4xl">
            <div className=" pb-px w-full max-md:px-5 max-md:max-w-full max-md:text-4xl">
              השירותים שלנו
            </div>
          </div>
        </h2>
        <h3 className="flex flex-col justify-center mt-5 max-w-full text-2xl w-[536px]">
          <div className="flex flex-col flex-1 w-full max-md:max-w-full">
            <div className="w-full max-md:px-5 max-md:max-w-full">
              פיתוח אתרים ותוכנה
            </div>
          </div>
        </h3>
      </div>
    </section>
  );
};

export default ServiceTitle;
