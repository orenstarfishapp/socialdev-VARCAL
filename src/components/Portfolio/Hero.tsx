import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center  w-full text-5xl font-bold leading-tight text-center text-white bg-gray-900 min-h-[234px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-col flex-1 justify-center items-center mx-auto my-0 max-w-[1140px]  pt-[200px] pb-[150px] w-full max-md:px-5 max-md:py-24 max-md:text-4xl">
        <div className="max-w-full max-md:text-4xl">
          <div className="w-full max-md:text-4xl">
            <h2 className="pb-px font-[48px] w-full max-md:text-4xl">
              תיק עבודות
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
