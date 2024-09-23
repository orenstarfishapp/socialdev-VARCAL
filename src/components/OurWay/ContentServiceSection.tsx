import React from "react";

const ContentServiceSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap md:flex-nowrap   self-auto justify-normal items-normal w-full bg-slate-800 min-h-[260px] px-[10px] max-md:max-w-full">
        <div className="flex flex-wrap md:flex-initial flex-1 py-2.5 size-full content-[1366px]">
          <div
            className={`flex flex-col gap-5  box-border  p-2.5 text-right md:w-[60.653%] w-full max-md:max-w-full`}
          >
            <div
              className={` text-4xl font-bold max-w-full leading-10 text-fuchsia-600 max-md:max-w-full`}
            >
              <div className="h-full max-md:max-w-full">
                <h2 className="font-rubik font-bold text-[40px] leading-[48px] max-md:px-5 max-md:max-w-full">
                  חודש 3-4: יצירת תוכן וקידום אורגני
                </h2>
              </div>
            </div>
            <div className="w-full text-xl text-white font-rubik text-[20px] leading-[25px] font-normal max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <p className="mb-[32px]">
                  כתיבת מאמרים ותכנים איכותיים: במהלך חודשים אלו נתחיל להפיק
                  מאמרים ותכנים נוספים לאתר שלכם. המאמרים יתמקדו במילות מפתח
                  רלוונטיות לתחום שלכם וישמשו בסיס לקידום אורגני.
                </p>
                <p className="mb-[32px]">
                  קידום אורגני (SEO): בואו נתחיל בתהליך של קידום אורגני כדי
                  להעלות את דירוג האתר שלכם במנועי החיפוש. זה כולל אופטימיזציה
                  נוספת של תוכן, בניית קישורים פנימית ושיפור מבנה האתר כדי
                  להבטיח שקל לאינדקס על ידי מנועי החיפוש.
                </p>
                <p className="mb-[32px]">
                  מדידה ושיפור: נתחיל לעקוב אחר התוצאות והביצועים של התוכן
                  והקידום, ונבצע שיפורים לפי הצורך.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-[20px] p-[10px] mr-[10px] border-solid border-r-[3px] border-r-fuchsia-600  ml-[27px] mt-[-10px] md:w-[25%] w-full">
            <div className={`w-full pr-10`}>
              <div className="w-full ">
                <div className="w-full">
                  <div className="items-center w-full max-md:px-5">
                    <div className="items-start max-w-full">
                      <svg
                        width="222"
                        height="222"
                        viewBox="0 0 222 222"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M215.644 61.5261L195.745 81.4247C193.717 83.4534 190.436 83.4534 188.407 81.4247L140.495 33.5126C138.467 31.4839 138.467 28.2034 140.495 26.1747L160.394 6.27605C168.466 -1.79563 181.587 -1.79563 189.702 6.27605L215.644 32.2177C223.759 40.2893 223.759 53.4112 215.644 61.5261ZM123.402 43.2677L10.0534 156.616L0.902663 209.061C-0.349095 216.14 5.82337 222.269 12.9023 221.06L65.3466 211.866L178.695 98.5177C180.724 96.4889 180.724 93.2085 178.695 91.1798L130.783 43.2677C128.711 41.2389 125.431 41.2389 123.402 43.2677ZM54.2966 146.905C51.9226 144.531 51.9226 140.732 54.2966 138.358L120.769 71.8854C123.143 69.5114 126.942 69.5114 129.316 71.8854C131.69 74.2595 131.69 78.0579 129.316 80.4319L62.8431 146.905C60.4691 149.279 56.6706 149.279 54.2966 146.905ZM38.7144 183.206H59.4331V198.874L31.5923 203.752L18.1683 190.328L23.0458 162.487H38.7144V183.206Z"
                          fill="#C630EC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentServiceSection;
