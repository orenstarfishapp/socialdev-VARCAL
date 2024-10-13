import React from "react";
import { Gem } from "lucide-react";

const WebServiceSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
          <div className="md:w-1/5 flex justify-center md:justify-end">
            <div className="bg-sky-500 p-6 rounded-full">
              <Gem size={64} className="text-white" />
            </div>
          </div>
          
          <div className="md:w-4/5 md:border-l-4 md:border-sky-500 md:pl-8 text-right">
            <h2 className="font-rubik font-bold text-4xl md:text-5xl text-sky-400 mb-6">
              <span className="relative">
                חודש 1-2: פיתוח ובניית אתרים
                <span className="absolute bottom-0 right-0 w-full h-1 bg-sky-400 transform -skew-x-12"></span>
              </span>
            </h2>
            <ul className="text-white text-lg md:text-xl space-y-6 list-none">
              <li className="relative pr-6 before:content-[''] before:absolute before:right-0 before:top-2 before:w-3 before:h-3 before:bg-sky-400 before:rounded-full">
                <p className="font-semibold mb-2">בדיקת שביעות רצון:</p>
                <p className="text-gray-300">
                  בסיום שלב זה נוודא שהאתר תואם את הציפיות שלך ושאתה מרוצה מהתוצאה. אנו נבצע שינויים ועדכונים לפי הצורך כדי להבטיח שהאתר עומד בסטנדרטים שלך.
                </p>
              </li>
              <li className="relative pr-6 before:content-[''] before:absolute before:right-0 before:top-2 before:w-3 before:h-3 before:bg-sky-400 before:rounded-full">
                <p className="font-semibold mb-2">בנה את האתר שלך:</p>
                <p className="text-gray-300">
                  במהלך החודש הראשון והשני נבנה את האתר שלך ביחד. המטרה היא ליצור אתר אינטרנט מעוצב ומהיר המותאם לצרכים הייחודיים של העסק שלך. זה כולל עיצוב מותאם אישית, תוכן ראשוני ואופטימיזציה בסיסית למנועי חיפוש (SEO).
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServiceSection;