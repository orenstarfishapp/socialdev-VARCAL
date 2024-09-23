
import React from "react";

const WebServiceSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-nowrap   self-auto justify-normal items-normal w-full bg-slate-800 min-h-[260px] px-[10px] max-md:max-w-full">
      <div className="flex flex-wrap md:flex-initial flex-1 py-2.5 size-full content-[1366px]">
        <div
          className={`flex flex-col gap-5  box-border  p-2.5 text-right md:w-[57.5%] w-full max-md:max-w-full`}
        >
          <div
            className={` text-4xl font-bold max-w-full leading-10 text-sky-400 max-md:max-w-full`}
          >
            <div className="h-full max-md:max-w-full">
              <h2 className="font-rubik font-bold text-[40px] leading-[48px] max-md:px-5 max-md:max-w-full">
                חודש 1-2: פיתוח ובניית אתרים
              </h2>
            </div>
          </div>
          <div className="w-full text-xl text-white font-rubik text-[20px] leading-[25px] font-normal max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <ul
                className="my-[20px] list-disc w-full max-md:pr-5 max-md:max-w-full"
                style={{ padding: "revert", margin: "revert" }}
              >
                <li className="w-full leading-6 max-md:max-w-full">
                  בדיקת שביעות רצון: בסיום שלב זה נוודא שהאתר תואם את הציפיות
                  שלך ושאתה מרוצה מהתוצאה. אנו נבצע שינויים ועדכונים לפי הצורך
                  כדי להבטיח שהאתר עומד בסטנדרטים שלך.
                </li>
                <li className="w-full leading-6 max-md:max-w-full">
                  בנה את האתר שלך: במהלך החודש הראשון והשני נבנה את האתר שלך
                  ביחד. המטרה היא ליצור אתר אינטרנט מעוצב ומהיר המותאם לצרכים
                  הייחודיים של העסק שלך. זה כולל עיצוב מותאם אישית, תוכן ראשוני
                  ואופטימיזציה בסיסית למנועי חיפוש (SEO).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-[20px]  justify-start border-solid border-r-[3px] border-r-sky-500 md:w-[18.766%] w-full">
          <div className={`w-full`}>
            <div className="w-full max-w-[256px]">
              <div className="w-full">
                <div className="items-center pr-6 pb-2 pl-6 w-full max-md:px-5">
                  <div className="items-start max-w-full">
                    <svg
                      width="187"
                      height="166"
                      aria-hidden="true"
                      className="e-font-icon-svg e-far-gem"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#3AB2E4"
                    >
                      <path d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServiceSection;
