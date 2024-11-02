import React from "react";
import { ChevronDown } from "lucide-react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white text-right">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            שיווק באינסטגרם
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף לשיווק ברשתות החברתיות
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>

        {/* Core Instagram Features Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              כלי אינסטגרם מתקדמים 2024
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Instagram Reels",
                desc: "יצירת תוכן וידאו קצר וויראלי עם אפקטים, מוזיקה ופילטרים מתקדמים",
                icon: "🎬"
              },
              {
                title: "Instagram Stories",
                desc: "סיפורים יומיים עם מדבקות אינטראקטיביות, סקרים ושאלות לקהל",
                icon: "📱"
              },
              {
                title: "Instagram Shop",
                desc: "חנות מקוונת משולבת עם תיוג מוצרים בפוסטים וסטוריז",
                icon: "🛍️"
              },
              {
                title: "Instagram Guides",
                desc: "יצירת מדריכים מקצועיים עם אוסף פוסטים מאורגנים לפי נושאים",
                icon: "📚"
              },
              {
                title: "Instagram Insights",
                desc: "ניתוח מעמיק של ביצועי התוכן, דמוגרפיה ומעורבות הקהל",
                icon: "📊"
              },
              {
                title: "Instagram Ads",
                desc: "קמפיינים ממומנים עם אפשרויות טרגוט מתקדמות ופורמטים מגוונים",
                icon: "🎯"
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

        {/* Content Strategy Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              אסטרטגיות תוכן לאינסטגרם
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "סוגי תוכן מובילים",
                  items: [
                    "Reels קצרים ומעניינים",
                    "סטוריז אינטראקטיביים יומיים",
                    "פוסטים ויזואליים מעוצבים",
                    "שידורים חיים עם הקהל",
                    "תוכן משתמשים מקורי",
                    "מדריכים מקצועיים מעמיקים"
                  ]
                },
                {
                  title: "טכניקות אופטימיזציה",
                  items: [
                    "שימוש בהאשטאגים ממוקדים",
                    "תזמון פרסום אופטימלי",
                    "עיצוב פיד אסתטי ואחיד",
                    "ניתוח מדדי ביצוע",
                    "שיתופי פעולה עם משפיענים",
                    "קידום ממומן אפקטיבי"
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

        {/* Best Practices Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              שיטות עבודה מומלצות
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-rubik mb-12">
            טיפים מעשיים לניהול נוכחות אפקטיבית באינסטגרם והשגת תוצאות מוכחות
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "תכנון תוכן מראש",
                desc: "בניית לוח תוכן חודשי עם תמהיל מאוזן של סוגי תוכן שונים",
                icon: "📅"
              },
              {
                title: "אינטראקציה עם הקהל",
                desc: "מענה לתגובות ומסרים, יצירת דיאלוג ובניית קהילה פעילה",
                icon: "💬"
              },
              {
                title: "ניטור ומדידה",
                desc: "מעקב אחר מדדי ביצוע מרכזיים והתאמת האסטרטגיה בהתאם",
                icon: "📈"
              },
              {
                title: "עיצוב ויזואלי",
                desc: "שמירה על שפה עיצובית אחידה ומקצועית בכל נקודות המגע",
                icon: "🎨"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 font-rubik text-white">
            מוכנים להגדיל את הנוכחות שלכם באינסטגרם?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white">
            צרו איתנו קשר לקבלת ייעוץ מקצועי ותוכנית פעולה מותאמת אישית
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            להתחיל עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;