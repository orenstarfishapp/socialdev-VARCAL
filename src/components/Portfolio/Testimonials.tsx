import React from "react";
import ContactForm from "./ContactForm";

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center  w-full max-md:max-w-full">
      <div className="flex flex-1 grow shrink justify-center flex-row py-[50px] my-0 mx-auto max-w-[1140px] w-full size-full">
        <ContactForm />
        <div className="flex flex-col grow shrink justify-start gap-[20px] p-[10px] ml-[60px] w-1/2 max-md:max-w-full">
          <h2 className="flex flex-col justify-center w-full text-5xl font-bold leading-tight text-right text-cyan-400 max-w-[559px] max-md:max-w-full max-md:text-4xl">
            מה אומרים עלינו
          </h2>
          <div className=" text-right mb-[-18px]">
            <div className="flex max-w-full flex-col flex-grow">
              <div className="min-h-[20px] text-message flex w-full flex-col items-end gap-2 break-words [.text-message+&]:mt-5 overflow-x-auto whitespace-normal">
                <div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]">
                  <div className="markdown prose w-full break-words dark:prose-invert light">
                    <p className="flex flex-col justify-center mt-5 w-full max-w-[559px] max-md:max-w-full text-base leading-7 text-right text-zinc-950">
                      המוטיבציה, הרצון והטכנולוגיה שלנו מובילים לתוצאות מדהימות.
                      ביחד נשיג את מה שנראה בלתי אפשרי! <br />
                      השאירו את הפרטים שלכם, ונחזור אליכם בהקדם.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 flex gap-3 empty:hidden -ml-2">
              <div className="items-center justify-start rounded-xl p-1 flex">
                <div className="flex items-center">
                  <div className="flex"></div>
                  <div className="flex items-center pb-0">
                    <div className="[&_svg]:h-full [&_svg]:w-full icon-md h-4 w-4">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
