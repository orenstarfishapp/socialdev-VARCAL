import React from "react";

const ServiceTitle: React.FC = () => {
  return (
    <section dir="rtl" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Title */}
        <div className="text-center mb-20">
          <span className="text-sm font-light text-gray-600 block mb-4">
            שירותים מקצועיים
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-rubik mb-6">
            שיווק דיגיטלי ועריכת וידאו
          </h1>
          <div className="relative">
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-rubik">
              פתרונות דיגיטליים מקצועיים לעסקים מתקדמים
            </p>
            <div className="absolute -top-12 -right-8 text-6xl opacity-20">🎥</div>
            <div className="absolute -top-16 -left-8 text-6xl opacity-20">💻</div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight text-center">
            <span className="relative">
              השירותים שלנו
              <div className="absolute -bottom-2 right-0 w-full h-2 bg-yellow-200 opacity-30"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "פיתוח אתרים",
                desc: "בניית אתרים מותאמים אישית עם טכנולוגיות מתקדמות",
                icon: "💻",
                features: ["עיצוב מותאם אישית", "חווית משתמש מתקדמת", "תאימות למובייל"]
              },
              {
                title: "שיווק דיגיטלי",
                desc: "אסטרטגיות שיווק מתקדמות ברשתות החברתיות",
                icon: "📱",
                features: ["ניהול רשתות חברתיות", "קמפיינים ממומנים", "אופטימיזציה מתמדת"]
              },
              {
                title: "קידום אתרים",
                desc: "שיפור הדירוג שלך במנועי החיפוש",
                icon: "🔍",
                features: ["מחקר מילות מפתח", "אופטימיזציית תוכן", "בניית קישורים"]
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="text-yellow-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video Editing Services Section */}
        <div className="space-y-12 mt-24">
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight">
              <span className="relative">
                שירותי עריכת וידאו מקצועיים
                <div className="absolute -bottom-2 right-0 w-full h-2 bg-yellow-200 opacity-30"></div>
              </span>
            </h2>
            <div className="absolute -top-8 right-4 text-6xl opacity-20 transform -rotate-12">🎬</div>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-rubik mb-12 text-center">
            הפקה ועריכת וידאו ברמה הגבוהה ביותר עם דגש על איכות ויצירתיות
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Video Services */}
            <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4">
                סוגי עריכה
              </h3>
              <ul className="space-y-4">
                {[
                  {icon: "🎭", text: "סרטוני תדמית לעסקים"},
                  {icon: "📱", text: "סרטוני תוכן לרשתות חברתיות"},
                  {icon: "🎵", text: "עריכת Reels ו-TikTok"},
                  {icon: "📚", text: "סרטוני הדרכה ולימוד"},
                  {icon: "🎼", text: "קליפים מוזיקליים"},
                  {icon: "🎉", text: "עריכת וידאו לאירועים"}
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 group">
                    <span className="ml-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* Video Features */}
            <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4">
                תכונות מתקדמות
              </h3>
              <ul className="space-y-4">
                {[
                  {icon: "✨", text: "אפקטים ויזואליים מתקדמים"},
                  {icon: "🎨", text: "תיקוני צבע מקצועיים"},
                  {icon: "🎵", text: "עריכת סאונד ומוזיקה"},
                  {icon: "📐", text: "אנימציות וגרפיקה בתנועה"},
                  {icon: "💬", text: "כתוביות ותרגומים"},
                  {icon: "📱", text: "פורמטים מותאמים לכל פלטפורמה"}
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 group">
                    <span className="ml-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Work Process */}
        <div className="space-y-12 mt-24">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12 relative">
            <span className="relative">
              תהליך העבודה שלנו
              <div className="absolute -bottom-2 right-0 w-full h-2 bg-yellow-200 opacity-30"></div>
            </span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "פגישת ייעוץ",
                desc: "הבנת הצרכים והחזון שלך",
                icon: "🤝",
                step: "1"
              },
              {
                title: "תכנון וקונספט",
                desc: "בניית תסריט ותכנון הצילומים",
                icon: "📝",
                step: "2"
              },
              {
                title: "עריכה ראשונית",
                desc: "עריכה בסיסית והתאמת קצב",
                icon: "✂️",
                step: "3"
              },
              {
                title: "גימור מקצועי",
                desc: "הוספת אפקטים וליטוש סופי",
                icon: "✨",
                step: "4"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-l from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl mt-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 transform -translate-x-32 translate-y-32"></div>
          <h2 className="text-4xl font-bold mb-6 font-rubik text-white relative">
            מוכנים להפוך את החזון שלכם למציאות?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white relative">
            צוות העורכים המקצועי שלנו מחכה ליצור את הסרטון המושלם עבורכם
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative">
            צור קשר לייעוץ חינם
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTitle;