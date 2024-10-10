import React from "react";
import Hero from "../../components/Portfolio/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Portfolio/Testimonials";

 const PortfolioPage: React.FC = () => {
  return (
    <>
      <main className="flex relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
        <div className="flex z-0 flex-col pt-2.5 w-full min-h-[1200px] max-md:max-w-full">
          <div className="flex flex-col flex-1 items-center w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[1920px] max-md:max-w-full">
              <div className="flex flex-col items-center w-full max-md:max-w-full ">
                <Hero />
                <Portfolio />
                <div className="flex flex-col justify-center items-center  w-full bg-gray-900 max-md:max-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 mx-auto my-0 max-w-[1140px] px-8 size-full">
                    <div className={`col-span-1`} >
                    <div className="flex flex-1 shrink rounded-xl basis-0 bg-gray-950 p-[30px] w-full" />

                    </div>
                    <div className={`col-span-1`} >
                    <div className="flex flex-1 shrink rounded-xl basis-0 bg-gray-950 p-[30px] w-full" />
                    </div>
                  </div>
                </div>
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
