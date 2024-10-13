import React from "react";
import { Pen } from "lucide-react";

const ContentServiceSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="md:w-1/4 flex justify-center md:justify-start">
            <div className="bg-fuchsia-600 p-6 rounded-full">
              <Pen size={64} className="text-white" />
            </div>
          </div>
          
          <div className="md:w-3/4 md:border-l-4 md:border-fuchsia-600 md:pl-8 text-right">
            <h2 className="font-rubik font-bold text-4xl md:text-5xl text-fuchsia-600 mb-8">
              <span className="relative inline-block">
                חודש 3-4: יצירת תוכן וקידום אורגני
                <span className="absolute bottom-0 right-0 w-full h-1 bg-fuchsia-600 transform -skew-x-12"></span>
              </span>
            </h2>
            <div className="text-white text-lg md:text-xl space-y-6">
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">כתיבת מאמרים ותכנים איכותיים</h3>
                <p className="text-gray-300">
                  במהלך חודשים אלו נתחיל להפיק מאמרים ותכנים נוספים לאתר שלכם. המאמרים יתמקדו במילות מפתח רלוונטיות לתחום שלכם וישמשו בסיס לקידום אורגני.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">קידום אורגני (SEO)</h3>
                <p className="text-gray-300">
                  בואו נתחיל בתהליך של קידום אורגני כדי להעלות את דירוג האתר שלכם במנועי החיפוש. זה כולל אופטימיזציה נוספת של תוכן, בניית קישורים פנימית ושיפור מבנה האתר כדי להבטיח שקל לאינדקס על ידי מנועי החיפוש.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">מדידה ושיפור</h3>
                <p className="text-gray-300">
                  נתחיל לעקוב אחר התוצאות והביצועים של התוכן והקידום, ונבצע שיפורים לפי הצורך.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServiceSection;