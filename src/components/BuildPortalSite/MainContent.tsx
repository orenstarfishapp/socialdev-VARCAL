import React from "react";
import { ChevronDown, Code, Server, Laptop, Zap, Database, Shield, Globe, Sparkles } from "lucide-react";

const ContentSection: React.FC = () => {
  const modernWebsitePrinciples = {
    title: "בניית אתר אינטרנט מודרני",
    items: [
      "בחירת טכנולוגיות מתאימות – שימוש בפריימוורקים מודרניים כמו React, Vue.js או Angular לפיתוח חזית. Node.js או Python לצד שרת.",
      "עיצוב ממוקד משתמש – יישום עקרונות UX/UI מתקדמים, עיצוב רספונסיבי ונגישות.",
      "אבטחה – יישום פרוטוקולי אבטחה עדכניים, HTTPS, הגנה מפני XSS ו-CSRF.",
      "ביצועים – אופטימיזציה של זמני טעינה, שימוש ב-lazy loading וminification של קבצים.",
      "SEO – יישום שיטות קידום אורגני מתקדמות, כולל Schema markup ו-רובוטים meta tags.",
      "ארכיטקטורת מיקרו-שירותים – פיתוח מודולרי המאפשר גמישות ותחזוקה קלה.",
      "אינטגרציה עם API – שילוב שירותים חיצוניים ומערכות צד שלישי.",
      "ניהול מצב (State Management) – שימוש בכלים כמו Redux או MobX לניהול יעיל של מצב האפליקציה.",
    ],
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            פיתוח אתרים מתקדם
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף לבניית אתרים מודרניים
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>

        {/* Modern Development Principles */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              עקרונות פיתוח מודרניים
              <div className="absolute -top-6 -right-8">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
              </div>
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Front-End",
                desc: "פיתוח ממשק משתמש מתקדם"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Back-End",
                desc: "פיתוח צד שרת חכם"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "בסיסי נתונים",
                desc: "ניהול מידע מתקדם"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "אבטחה",
                desc: "הגנה על המידע והמשתמשים"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Comparison */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              השוואת טכנולוגיות
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Front-End",
                icon: <Laptop className="w-12 h-12" />,
                items: [
                  "עוסק בממשק המשתמש והחוויה הוויזואלית",
                  "שימוש ב-HTML, CSS, JavaScript",
                  "פריימוורקים: React, Vue.js, Angular",
                  "התמקדות בעיצוב רספונסיבי ונגישות",
                  "אינטראקציה ישירה עם המשתמש",
                ]
              },
              {
                title: "Back-End",
                icon: <Globe className="w-12 h-12" />,
                items: [
                  "מתמקד בלוגיקה העסקית ועיבוד נתונים",
                  "שפות: Python, Java, PHP, Node.js",
                  "עבודה עם בסיסי נתונים ושרתים",
                  "פיתוח API וניהול אבטחה",
                  "אחראי על ביצועים וסקלביליות",
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-yellow-500 mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-yellow-300 opacity-20 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 font-rubik text-white">
              מוכנים להתחיל בפרויקט?
            </h3>
            <p className="text-xl font-rubik mb-8 text-white">
              צרו איתנו קשר עכשיו ונבנה יחד את האתר המושלם עבורכם
            </p>
            <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              <Zap className="w-6 h-6" />
              <span>התחילו עכשיו</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;