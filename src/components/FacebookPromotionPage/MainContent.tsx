import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            האם לבעלי עסקים יש צורך לפרסם בפייסבוק?
          </h2>
          <div className="text-xl text-[#4A5568] space-y-8 font-rubik leading-relaxed">
            <p className="text-2xl font-semibold">
              כן, לבעלי עסקים קטנים ובינוניים יש צורך משמעותי לנצל את הפלטפורמה של פייסבוק לשיווק וקידום העסק שלהם בעידן הדיגיטלי הנוכחי.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-[#F7BA00] mb-6">יתרונות הפרסום בפייסבוק:</h3>
              <ul className="space-y-4 list-none">
                {[
                  "חשיפה לקהל יעד רחב ומגוון",
                  "יכולת פילוח מדויקת של קהל היעד",
                  "אפשרויות פרסום מגוונות (תמונות, וידאו, קרוסלות)",
                  "מעקב ובקרה מדויקים אחר ביצועי הקמפיינים",
                  "עלויות פרסום נמוכות יחסית לערוצים מסורתיים"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#F7BA00] font-bold text-2xl ml-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            אסטרטגיות פרסום מובילות בפייסבוק
          </h2>
          <div className="text-xl text-[#4A5568] space-y-8 font-rubik leading-relaxed">
            <p className="text-2xl font-semibold">
              כדי להצליח בפרסום בפייסבוק, חשוב לאמץ אסטרטגיות מתקדמות ויעילות:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "תוכן ויזואלי מרתק", items: ["שימוש בתמונות איכותיות", "יצירת סרטוני וידאו קצרים ומעניינים", "עיצוב גרפי מקצועי ומושך"] },
                { title: "פרסונליזציה", items: ["התאמת המסרים לקהלי יעד ספציפיים", "שימוש בנתוני המשתמשים לפרסום ממוקד", "יצירת חוויה אישית לכל משתמש"] }
              ].map((section, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-3xl font-bold text-[#F7BA00] mb-6">{section.title}</h3>
                  <ul className="space-y-4 list-none">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#F7BA00] font-bold text-2xl ml-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            מגמות פרסום בפייסבוק לשנת 2023
          </h2>
          <div className="text-xl text-[#4A5568] space-y-8 font-rubik leading-relaxed">
            <p className="text-2xl font-semibold">
              פרסום בפייסבוק ממשיך להתפתח, והנה כמה מגמות מובילות לשנת 2023:
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ul className="space-y-6 list-none">
                {[
                  { title: "שימוש בבינה מלאכותית", desc: "ניצול כלי AI לאופטימיזציה של קמפיינים ויצירת תוכן" },
                  { title: "פרסום במציאות רבודה", desc: "שילוב טכנולוגיות AR ליצירת חוויות אינטראקטיביות" },
                  { title: "מיקוד בתוכן וידאו קצר", desc: "יצירת סרטונים קצרים ומרתקים בסגנון TikTok" },
                  { title: "שיווק באמצעות השפעה", desc: "שיתופי פעולה עם משפיענים ומובילי דעה בפייסבוק" }
                ].map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="text-[#F7BA00] font-bold text-2xl mb-2">{item.title}</span>
                    <span>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#F7BA00] to-[#FFA500] text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold mb-6 font-rubik">מוכנים להתחיל לפרסם בפייסבוק?</h2>
          <p className="text-2xl font-rubik mb-8">
            אנו מומחים בבניית אסטרטגיות פרסום מותאמות אישית בפייסבוק. נשמח לסייע לכם להגדיל את החשיפה ולהשיג תוצאות מרשימות. צרו איתנו קשר עוד היום!
          </p>
          <button className="bg-white text-[#F7BA00] text-xl font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
            צור קשר
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;