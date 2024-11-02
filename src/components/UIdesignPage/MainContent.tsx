import React from "react";
import { ChevronDown } from "lucide-react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section with Template */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            שיווק דיגיטלי מתקדם
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף לשיווק ברשתות החברתיות
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>

        {/* Why UX/UI Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              למה חווית משתמש חשובה?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "שיפור שביעות רצון",
                desc: "חווית משתמש טובה מגבירה את שביעות הרצון ומעודדת חזרה למוצר",
                icon: "😊"
              },
              {
                title: "הגדלת המרות",
                desc: "ממשק נוח ואינטואיטיבי מוביל להמרות גבוהות יותר",
                icon: "📈"
              },
              {
                title: "חיסכון בזמן",
                desc: "עיצוב יעיל מקצר את זמן הביצוע של משימות",
                icon: "⏱️"
              },
              {
                title: "מיתוג חיובי",
                desc: "חווית משתמש טובה מחזקת את המותג ואת האמון בו",
                icon: "🎯"
              },
              {
                title: "הפחתת תמיכה",
                desc: "ממשק אינטואיטיבי מפחית פניות לתמיכת לקוחות",
                icon: "💡"
              },
              {
                title: "יתרון תחרותי",
                desc: "חווית משתמש מעולה מבדלת אותך מהמתחרים",
                icon: "🏆"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              עקרונות עיצוב מנצחים
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "עקרונות בסיסיים",
                  items: [
                    "עיצוב נקי ומינימליסטי",
                    "היררכיה ויזואלית ברורה",
                    "עקביות בעיצוב",
                    "נגישות לכל המשתמשים",
                    "זמני טעינה מהירים",
                    "התאמה למובייל"
                  ]
                },
                {
                  title: "אלמנטים חשובים",
                  items: [
                    "כפתורי פעולה בולטים",
                    "ניווט אינטואיטיבי",
                    "טפסים פשוטים וברורים",
                    "משוב למשתמש",
                    "חיפוש קל ונוח",
                    "תמיכה במולטי-דיווייס"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 font-rubik text-white">
            רוצים לשפר את חווית המשתמש שלכם?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white">
            המומחים שלנו יעזרו לכם ליצור חווית משתמש מושלמת
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            צרו קשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;