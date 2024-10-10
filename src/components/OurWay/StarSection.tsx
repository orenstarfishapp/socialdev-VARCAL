import React from "react";
import { Star } from "lucide-react";

const StarSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-2/3 space-y-8 text-right">
            <h2 className="font-rubik font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-green-500">
              חודש 7-12: אופטימיזציה מתמשכת, רייטינג משופר ונוכחות מורחבת
            </h2>
            <div className="text-white font-rubik text-xl md:text-2xl lg:text-3xl space-y-8">
              <p>
                אופטימיזציה מתמשכת: במהלך החודשים הנותרים, נמשיך לבצע אופטימיזציה על סמך הנתונים שנקבל. זה כולל שיפור מהירות האתר, אופטימיזציה נוספת של תוכן וקישורים והמשך בניית קישורים איכותיים.
              </p>
              <p>
                שיפור הדירוג במנועי החיפוש: נמשיך לעבוד על שיפור הדירוג במנועי החיפוש באמצעות אופטימיזציות נוספות והוספת תוכן חדש בהתאם לצרכיך.
              </p>
              <p>
                הרחבת הנוכחות שלך במדיה החברתית: נמשיך להרחיב את הנוכחות שלך במדיה החברתית, להגדיל את העוקבים והמעורבות, ולשלב קמפיינים ממומנים במידת הצורך כדי למשוך לקוחות פוטנציאליים נוספים.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 opacity-20 rounded-full blur-xl"></div>
              <Star className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 text-green-500 relative z-10" strokeWidth={1} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarSection;