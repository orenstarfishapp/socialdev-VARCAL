import React from "react";

const StarSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap md:flex-nowrap   self-auto justify-normal items-normal w-full bg-slate-800 min-h-[260px] px-[10px] max-md:max-w-full">
        <div className="flex flex-wrap md:flex-nowrap flex-1 py-2.5 size-full content-[1366px]">
          <div
            className={`flex flex-col gap-5  box-border  p-2.5 text-right md:w-[60.653%] w-full max-md:max-w-full`}
          >
            <div
              className={` text-4xl font-bold max-w-full leading-10 text-green-500 max-md:max-w-full`}
            >
              <div className="h-full max-md:max-w-full">
                <h2 className="font-rubik font-bold text-[40px] leading-[48px] max-md:px-5 max-md:max-w-full">
                  חודש 7-12: אופטימיזציה מתמשכת, רייטינג משופר ונוכחות מורחבת
                </h2>
              </div>
            </div>
            <div className="w-full text-xl text-white font-rubik text-[20px] leading-[25px] font-normal max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <p className="mb-[32px]">
                  אופטימיזציה מתמשכת: במהלך החודשים הנותרים, נמשיך לבצע
                  אופטימיזציה על סמך הנתונים שנקבל. זה כולל שיפור מהירות האתר,
                  אופטימיזציה נוספת של תוכן וקישורים והמשך בניית קישורים
                  איכותיים.
                </p>
                <p className="mb-[32px]">
                  שיפור הדירוג במנועי החיפוש: נמשיך לעבוד על שיפור הדירוג במנועי
                  החיפוש באמצעות אופטימיזציות נוספות והוספת תוכן חדש בהתאם
                  לצרכיך.
                </p>
                <p className="mb-[32px]">
                  הרחבת הנוכחות שלך במדיה החברתית: נמשיך להרחיב את הנוכחות שלך
                  במדיה החברתית, להגדיל את העוקבים והמעורבות, ולשלב קמפיינים
                  ממומנים במידת הצורך כדי למשוך לקוחות פוטנציאליים נוספים.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[17.156%] w-full flex flex-col p-[10px] "></div>
          <div className="flex flex-col gap-[20px] p-[10px] ml-[7px] border-solid border-r-[3px]  border-r-green-500 mr-[24px] mt-[-20px] w-full md:w-[25%]">
            <div className={`w-full min-h-[254px]`}>
              <div className="w-full ">
                <div className="w-full">
                  <div className=" w-full max-md:px-5">
                    <div className="text-center max-w-[222px]">
                      <svg
                        width="182"
                        height="174"
                        viewBox="0 0 182 174"
                        fill="none"
                        className=" text-center"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M80.8439 6.04938L58.7371 50.8723L9.2762 58.0832C0.406411 59.3697 -3.14828 70.3046 3.28401 76.5676L39.0679 111.437L30.6043 160.695C29.0809 169.599 38.4585 176.268 46.3127 172.104L90.5601 148.846L134.807 172.104C142.662 176.234 152.039 169.599 150.516 160.695L142.052 111.437L177.836 76.5676C184.268 70.3046 180.714 59.3697 171.844 58.0832L122.383 50.8723L100.276 6.04938C96.3153 -1.94021 84.8387 -2.04177 80.8439 6.04938Z"
                          fill="#40D34B"
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

export default StarSection;
