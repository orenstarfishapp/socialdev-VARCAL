import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            עיצוב אפליקציות - המפתח להצלחה
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="font-semibold">
              טיפים חשובים לעיצוב אפליקציות מוצלח:
            </p>
            <ul className="space-y-4 list-disc pr-6">
              <li>התמקדות בחוויית המשתמש (UX) - זרימה אינטואיטיבית וטבעית</li>
              <li>עקביות בעיצוב לאורך כל מסכי האפליקציה</li>
              <li>פשטות וקלות שימוש - ממשק נקי ובהיר</li>
              <li>מהירות - זמני טעינה מהירים ללא עיכובים</li>
              <li>רספונסיביות - התאמה למגוון גדלי מסך</li>
              <li>עקביות ויזואלית - פלטת צבעים ועיצוב אחידים</li>
              <li>ממשק משתמש אינטואיטיבי - מיקום הגיוני של אלמנטים</li>
              <li>שימוש מושכל באנימציות ואפקטים חזותיים</li>
              <li>התאמה למותג - שילוב זהות המותג בעיצוב</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            נקודות מפתח בעיצוב אפליקציה
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="font-semibold">
              דגשים חשובים לתהליך עיצוב האפליקציה:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">חוויית משתמש ועיצוב</h3>
                <ul className="space-y-2 list-disc pr-6">
                  <li>חוויית משתמש (UX) אינטואיטיבית</li>
                  <li>ממשק משתמש (UI) אסתטי ועקבי</li>
                  <li>פשטות ונוחות שימוש</li>
                  <li>זרימה לוגית בין מסכים</li>
                  <li>רספונסיביות למגוון מכשירים</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">ביצועים ונגישות</h3>
                <ul className="space-y-2 list-disc pr-6">
                  <li>מהירות וביצועים אופטימליים</li>
                  <li>נגישות לבעלי מוגבלויות</li>
                  <li>עיצוב קל משקל לטעינה מהירה</li>
                  <li>התאמה לזהות המותג</li>
                  <li>תמיכה במגוון שפות ותרבויות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            בחירת חברה לעיצוב אפליקציה
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="font-semibold">
              טיפים לבחירת חברה איכותית לעיצוב אפליקציות:
            </p>
            <ul className="space-y-4 list-disc pr-6">
              <li>בדיקת פורטפוליו - ניסיון מוכח בפרויקטים דומים</li>
              <li>קריאת ביקורות ממליצים - חוות דעת מלקוחות קודמים</li>
              <li>בחינת הצוות המקצועי - ניסיון ומומחיות המעצבים</li>
              <li>הבנת תהליך העבודה - שקיפות ושיתוף פעולה</li>
              <li>התמחות בפלטפורמת האפליקציה הרלוונטית</li>
              <li>יכולות נוספות כמו UX ופיתוח</li>
              <li>התאמה ללוחות זמנים ותקציב</li>
              <li>כימיה אישית והבנה הדדית</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#F7BA00] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 font-rubik">טיפ מקצועי:</h3>
          <p className="text-xl font-rubik">
            השקיעו בתכנון מעמיק לפני תחילת העיצוב. הגדירו את קהל היעד, המטרות העסקיות והפונקציונליות הנדרשת. תכנון טוב יוביל לתוצאה טובה יותר ויחסוך זמן ומשאבים בהמשך הדרך.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;