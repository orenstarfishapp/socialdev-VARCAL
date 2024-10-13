import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            בניית אתר אינטרנט מודרני
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="mb-[38.4px]">
              כדי לבנות אתר אינטרנט מודרני ואיכותי, חשוב להקפיד על מספר עקרונות מרכזיים:
            </p>
            <ul className="list-disc pr-6 leading-[1.5em] space-y-4">
              <li>
                בחירת טכנולוגיות מתאימות – שימוש בפריימוורקים מודרניים כמו React, Vue.js או Angular לפיתוח חזית. Node.js או Python לצד שרת.
              </li>
              <li>
                עיצוב ממוקד משתמש – יישום עקרונות UX/UI מתקדמים, עיצוב רספונסיבי ונגישות.
              </li>
              <li>
                אבטחה – יישום פרוטוקולי אבטחה עדכניים, HTTPS, הגנה מפני XSS ו-CSRF.
              </li>
              <li>
                ביצועים – אופטימיזציה של זמני טעינה, שימוש ב-lazy loading וminification של קבצים.
              </li>
              <li>
                SEO – יישום שיטות קידום אורגני מתקדמות, כולל Schema markup ו-רובוטים meta tags.
              </li>
              <li>
                ארכיטקטורת מיקרו-שירותים – פיתוח מודולרי המאפשר גמישות ותחזוקה קלה.
              </li>
              <li>
                אינטגרציה עם API – שילוב שירותים חיצוניים ומערכות צד שלישי.
              </li>
              <li>
                ניהול מצב (State Management) – שימוש בכלים כמו Redux או MobX לניהול יעיל של מצב האפליקציה.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#F7BA00] font-rubik">
            מה ההבדל בין פיתוח Front-End לפיתוח Back-End?
          </h3>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="mb-[38.4px]">
              הבדלים עיקריים בין פיתוח Front-End לפיתוח Back-End:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-[#F7BA00] mb-4">Front-End</h4>
                <ul className="space-y-2 list-disc pr-6">
                  <li>עוסק בממשק המשתמש והחוויה הוויזואלית</li>
                  <li>שימוש ב-HTML, CSS, JavaScript</li>
                  <li>פריימוורקים: React, Vue.js, Angular</li>
                  <li>התמקדות בעיצוב רספונסיבי ונגישות</li>
                  <li>אינטראקציה ישירה עם המשתמש</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-bold text-[#F7BA00] mb-4">Back-End</h4>
                <ul className="space-y-2 list-disc pr-6">
                  <li>מתמקד בלוגיקה העסקית ועיבוד נתונים</li>
                  <li>שפות: Python, Java, PHP, Node.js</li>
                  <li>עבודה עם בסיסי נתונים ושרתים</li>
                  <li>פיתוח API וניהול אבטחה</li>
                  <li>אחראי על ביצועים וסקלביליות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            מגמות מובילות בפיתוח אתרים
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="mb-[38.4px]">מגמות חשובות בעולם פיתוח האתרים כיום:</p>
            <ul className="list-disc pr-6 leading-[2em] space-y-4">
              <li>
                Progressive Web Apps (PWA) – יצירת אפליקציות web עם חוויית משתמש דומה לאפליקציות native.
              </li>
              <li>
                Jamstack – ארכיטקטורה המבוססת על JavaScript, APIs, ו-Markup מוכן מראש.
              </li>
              <li>
                Serverless – פיתוח ללא ניהול שרתים, שימוש בפונקציות כשירות (FaaS).
              </li>
              <li>
                AI ו-Machine Learning – שילוב בינה מלאכותית לשיפור חוויית המשתמש והפרסונליזציה.
              </li>
              <li>
                Web Assembly – ביצועים משופרים עם קוד בינארי הרץ במהירות גבוהה בדפדפן.
              </li>
              <li>
                מציאות רבודה (AR) ומציאות מדומה (VR) – שילוב טכנולוגיות אלו בחוויית הגלישה.
              </li>
              <li>
                GraphQL – שפת שאילתות לAPI המאפשרת גמישות רבה יותר בבקשות נתונים.
              </li>
              <li>
                אבטחת Blockchain – שימוש בטכנולוגיית בלוקצ'יין לאבטחה משופרת ושקיפות.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#F7BA00] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 font-rubik">טיפ מקצועי:</h3>
          <p className="text-xl font-rubik">
            השקיעו בלמידה מתמדת והתעדכנות בטכנולוגיות חדשות. עולם פיתוח האתרים מתפתח במהירות, וחשוב להישאר מעודכנים כדי ליצור פרויקטים חדשניים ואיכותיים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;