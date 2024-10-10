import React from "react";
// import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F7BA00] font-heebo leading-tight">
            חידושים בבניית אתרים לשנת 2024
          </h2>
          <div className="text-xl text-[#1e293b] space-y-6 font-heebo leading-relaxed">
            <p className="font-semibold">
              כמומחה לפיתוח אתרים ובינה מלאכותית, הנה המלצותיי העדכניות ביותר:
            </p>
            <ul className="space-y-4 list-disc pr-6">
              <li>יצירת חווית משתמש מותאמת אישית באמצעות בינה מלאכותית</li>
              <li>שילוב טכנולוגיות ללא מגע (Voice UI, תנועות ידיים) לשיפור הנגישות</li>
              <li>שימוש בעיצוב מינימליסטי עם דגש על מהירות טעינה</li>
              <li>אימוץ טכנולוגיות Web 3.0 כמו בלוקצ'יין לשיפור האבטחה והשקיפות</li>
              <li>יישום עיצוב רספונסיבי מתקדם המותאם למגוון רחב של מכשירים</li>
              <li>שילוב מציאות רבודה (AR) לחוויות אינטראקטיביות ייחודיות</li>
              <li>אופטימיזציה למנועי חיפוש קוליים ועוזרים וירטואליים</li>
              <li>שימוש בניתוח נתונים מתקדם לשיפור מתמיד של חווית המשתמש</li>
            </ul>
          </div>
        </div>

        <div className="text-center p-8 bg-gray-100 rounded-xl shadow-lg">
          {/* <img
            className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            src={FastImg}
            alt="אתר מהיר ומודרני"
          /> */}
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F7BA00] font-heebo leading-tight">
            תהליך בניית אתר אינטרנט מוצלח ב-2024
          </h2>
          <div className="text-xl text-[#1e293b] space-y-6 font-heebo leading-relaxed">
            <p className="font-semibold">
              הנה התהליך המומלץ והמעודכן לבניית אתר אינטרנט מצליח:
            </p>
            <ol className="space-y-4 list-decimal pr-6">
              <li>הגדרת מטרות ואסטרטגיה דיגיטלית מקיפה</li>
              <li>מחקר מעמיק של קהל היעד וניתוח התנהגות משתמשים</li>
              <li>תכנון ארכיטקטורת מידע מתקדמת ומותאמת לעידן המובייל</li>
              <li>עיצוב UI/UX חדשני עם דגש על נגישות ואינטראקטיביות</li>
              <li>יצירת תוכן איכותי ומותאם לקידום אורגני</li>
              <li>בחירת פלטפורמה טכנולוגית גמישה ומאובטחת</li>
              <li>פיתוח מתקדם עם דגש על ביצועים ואבטחה</li>
              <li>בדיקות מקיפות כולל אופטימיזציה למכשירים ניידים</li>
              <li>יישום אסטרטגיית שיווק דיגיטלי רב-ערוצית</li>
              <li>ניטור וניתוח ביצועים מתמשך לשיפור מתמיד</li>
            </ol>
          </div>
        </div>

        <div className="bg-[#F7BA00] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 font-heebo">טיפ מקצועי:</h3>
          <p className="text-xl font-heebo">
            השקיעו בחוויית משתמש יוצאת דופן ובתוכן איכותי. אלה המפתחות להצלחה בעולם הדיגיטלי של 2024.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;