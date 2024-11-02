import React from "react";
import { ChevronDown, Layout, Users, Smartphone, Code, Sparkles, Shield } from "lucide-react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center mb-32 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative mt-20">
            עיצוב ממשק משתמש מקצועי
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף לעיצוב UI/UX איכותי
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>
{/* Introduction Section */}
<div className="space-y-8">
  <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
    עיצוב ממשק משתמש - המפתח לחוויה דיגיטלית מושלמת
  </h2>
  <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
    <p>
      <em>ממשק משתמש</em> (באנגלית: <em>User Interface</em> או בקיצור UI) הוא הגשר המחבר בין המשתמש למערכת. לפי מחקרים עדכניים, 94% מהרושם הראשוני של משתמשים מבוסס על העיצוב, וחברות המשקיעות בעיצוב UI איכותי רואות עלייה ממוצעת של 32% בהמרות.
    </p>
    
    <div className="grid md:grid-cols-2 gap-8 my-8">
      <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-yellow-400">
        <h3 className="text-xl font-bold text-gray-800 mb-3">למה לבחור בסוכנות דיגיטלית קטנה?</h3>
        <ul className="space-y-2">
          <li>✓ יחס אישי והבנה מעמיקה של צרכי העסק</li>
          <li>✓ גמישות ויכולת התאמה מהירה לשינויים</li>
          <li>✓ תקשורת ישירה עם צוות המפתח</li>
          <li>✓ מחירים תחרותיים ויחס עלות-תועלת מצוין</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-yellow-400">
        <h3 className="text-xl font-bold text-gray-800 mb-3">סטטיסטיקות מעניינות:</h3>
        <ul className="space-y-2">
          <li>75% מהמשתמשים שופטים אמינות לפי העיצוב</li>
          <li>88% לא יחזרו לאתר אחרי חוויה גרועה</li>
          <li>עלייה של 83% בשביעות רצון עם UI מותאם אישית</li>
          <li>חיסכון של 50% בעלויות תמיכה</li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-50 p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">היתרון של ליווי ארוך טווח</h3>
      <p className="mb-4">
        בניגוד לפרויקטים חד-פעמיים, שיתוף פעולה מתמשך עם סוכנות דיגיטלית מאפשר:
      </p>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-[#F7BA00] font-bold ml-2">01.</span>
          <span>התפתחות והתאמה מתמדת של הממשק בהתאם לצרכים המשתנים של העסק והמשתמשים</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#F7BA00] font-bold ml-2">02.</span>
          <span>שיפור מתמיד מבוסס נתונים ומשוב משתמשים אמיתי</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#F7BA00] font-bold ml-2">03.</span>
          <span>חיסכון משמעותי בעלויות לעומת פרויקטים נפרדים</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#F7BA00] font-bold ml-2">04.</span>
          <span>בניית מערכת יחסים המבוססת על הבנה עמוקה של צרכי העסק</span>
        </li>
      </ul>
    </div>

    <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
      <h3 className="text-xl font-bold text-gray-800 mb-3">דוגמה מהשטח:</h3>
      <p>
        אחד מלקוחותינו, חברת סטארט-אפ בתחום הפינטק, חסך כ-40% מתקציב התמיכה השנתי שלו לאחר שדרוג ממשק המשתמש. בנוסף, ראינו עלייה של 60% במספר המשתמשים החדשים שהשלימו את תהליך ההרשמה בהצלחה.
      </p>
    </div>

          </div>
        </div>
{/* Core Elements Grid */}
<div className="space-y-12">
  <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
    אלמנטים מרכזיים בעיצוב ממשק מקצועי
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        icon: <Layout className="w-8 h-8" />,
        title: "מבנה ויזואלי",
        desc: "ארגון והיררכיה של המידע באופן ברור ונגיש",
        details: [
          "היררכיית מידע ברורה",
          "שימוש נכון במרווחים",
          "קונטרסט ויזואלי",
          "עקביות בעיצוב",
          "שילוב תמונות ואייקונים"
        ],
        stats: "75% מהמשתמשים מעריכים אתר לפי המבנה הויזואלי שלו",
        tip: "מבנה ויזואלי נכון מוביל לירידה של 35% בזמן ההתמצאות באתר"
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "אינטראקציה חכמה",
        desc: "תגובות חלקות ואינטואיטיביות לפעולות המשתמש",
        details: [
          "משוב מיידי לפעולות",
          "אנימציות מותאמות",
          "טפסים חכמים",
          "ניווט אינטואיטיבי",
          "מניעת טעויות"
        ],
        stats: "88% מהמשתמשים לא יחזרו לאתר אחרי חוויית משתמש גרועה",
        tip: "אינטראקציה טובה מעלה את שיעור ההמרה ב-48%"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: "רספונסיביות מלאה",
        desc: "התאמה מושלמת לכל סוגי המסכים והמכשירים",
        details: [
          "תצוגה מותאמת למובייל",
          "טעינה מהירה",
          "ניווט מותאם מגע",
          "תמיכה בכל הדפדפנים",
          "התאמה לכל גודל מסך"
        ],
        stats: "60% מהגלישה כיום מתבצעת ממכשירים ניידים",
        tip: "אתר רספונסיבי מעלה את זמן השהייה ב-40%"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      >
        <div className="mb-6 text-[#F7BA00] group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-6">{item.desc}</p>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-bold text-gray-800 mb-2">מרכיבים חשובים:</h4>
            <ul className="space-y-2">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full ml-2"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-r-4 border-yellow-400 pr-4">
            <p className="text-sm text-gray-600 font-bold">
              {item.stats}
            </p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-xl">
            <p className="text-sm text-gray-700">
              💡 <strong>טיפ מקצועי:</strong> {item.tip}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
    <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">
      למה חשוב לשלב את כל האלמנטים?
    </h3>
    <p className="text-gray-600 leading-relaxed">
      שילוב נכון של כל האלמנטים יוצר חוויית משתמש שלמה ומקצועית. מחקרים מראים שאתרים המשלבים את כל שלושת האלמנטים בצורה מיטבית רואים עלייה ממוצעת של 83% בשביעות רצון המשתמשים ו-47% בשיעורי ההמרה.
    </p>
        </div>
      </div>

        {/* Best Practices Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            עקרונות מנחים בעיצוב ממשק
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "עקרונות עיצוביים",
                  items: [
                    "עקביות בעיצוב ובאינטראקציה",
                    "היררכיה ויזואלית ברורה",
                    "מרחב לבן ואוורירי",
                    "טיפוגרפיה קריאה",
                    "צבעוניות מותאמת",
                    "עיצוב אינטואיטיבי"
                  ]
                },
                {
                  title: "שיקולי משתמש",
                  items: [
                    "נגישות לכל המשתמשים",
                    "זמני טעינה מהירים",
                    "משוב מיידי לפעולות",
                    "ניווט פשוט וברור",
                    "מניעת טעויות",
                    "התאמה לקהל היעד"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full ml-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 font-rubik">
            נקודה למחשבה:
          </h2>
          <p className="text-xl font-rubik leading-relaxed">
            עיצוב ממשק משתמש איכותי הוא הרבה מעבר לאסתטיקה. הוא מהווה את הגשר בין המשתמש למוצר, ומשפיע ישירות על ההצלחה של כל מוצר דיגיטלי. השקעה בעיצוב ממשק מקצועי היא השקעה בהצלחה ארוכת טווח.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;