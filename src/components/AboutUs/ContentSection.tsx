import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center w-full text-base leading-loose text-right min-h-[490px] text-neutral-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 max-w-[1140px] my-0 mx-auto justify-end w-full">
        <div className="w-full max-w-[1140px] max-md:max-w-full">
          <div className="pt-14 pr-11 pb-10 w-full bg-white rounded-lg shadow-custom-black max-md:pr-5 max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div
                dir="rtl"
                className="w-full max-md:max-w-full font-rubik font-medium"
              >
                <p className="w-full mb-7 max-md:max-w-full">
                  לאחר שעבדתי בהייטק משנת 2013 והחלטתי להקים את החברה, הצבתי
                  לעצמי מטרה לספק פתרונות דיגיטליים ברמה הגבוהה ביותר לעסקים מכל
                  הגדלים והתעשיות.
                </p>
                <p className="pb-px mb-7 w-full max-md:max-w-full">
                  היום, אנחנו מתמחים בכל תחומי הדיגיטל, מתוך חזון ואמונה שכל בעל
                  עסק ראוי לפתרון דיגיטלי מלא, מותאם אישית וללא פשרות.
                </p>
                <p className="pb-px mb-7 w-full max-md:max-w-full">
                  בכל פרויקט, המטרה שלנו היא לפתח מוצר ידידותי למשתמש, שמתאים גם
                  לצרכים של העסק וגם ללקוחותיו, תוך שמירה על חדשנות וטכנולוגיה
                  מתקדמת.
                </p>
              </div>
              <div className="flex w-full min-h-[27px] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
