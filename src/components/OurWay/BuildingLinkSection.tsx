import React from "react";
import { Link } from "lucide-react";

const BuildingLinkSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="md:w-1/4 flex justify-center md:justify-start">
            <div className="bg-teal-300 p-6 rounded-full">
              <Link size={64} className="text-slate-800" />
            </div>
          </div>
          
          <div className="md:w-3/4 md:border-l-4 md:border-teal-300 md:pl-8 text-right">
            <h2 className="font-rubik font-bold text-4xl md:text-5xl text-teal-300 mb-8">
              <span className="relative inline-block">
                חודש 5-6: בניית קישורים וחיבור לרשתות חברתיות
                <span className="absolute bottom-0 right-0 w-full h-1 bg-teal-300 transform -skew-x-12"></span>
              </span>
            </h2>
            <div className="text-white text-lg md:text-xl space-y-6">
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-teal-200">קישורים נכנסים</h3>
                <p className="text-gray-300">
                  במהלך חודשים אלו נתחיל לבנות קישורים חיצוניים מאתרים איכותיים שיקשרו לאתר שלכם. זה יעזור להגביר את הסמכות של האתר ולשפר את דירוג מנועי החיפוש.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-teal-200">התחבר לערוצי מדיה חברתית</h3>
                <p className="text-gray-300">
                  נתחיל לחבר את האתר שלך לערוצי המדיה החברתית שלך (פייסבוק, אינסטגרם, לינקדאין וכו'). נדאג שתהיה אינטגרציה מלאה בין האתר לערוצים אלו, וכן נקדם תכנים ברשתות החברתיות כדי להביא יותר תנועה לאתר.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-2xl mb-3 text-teal-200">מעורבות</h3>
                <p className="text-gray-300">
                  נתחיל לעסוק בערוצי מדיה חברתית, כמו פוסטים, קידום מכירות ושיתופי פעולה עם עסקים אחרים, כדי להגדיל את הנוכחות המקוונת שלך.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingLinkSection;