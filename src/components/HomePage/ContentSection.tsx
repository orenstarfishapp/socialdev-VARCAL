import React from "react";

export default function ContentSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section with Enhanced Styling */}
        <div className="text-center mb-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <div className="absolute -top-10 right-0 w-72 h-72 bg-yellow-200 opacity-5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 left-0 w-72 h-72 bg-yellow-300 opacity-5 rounded-full blur-xl"></div>
          
          {/* Main Title with Enhanced Animation */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 font-rubik mb-8 animate-fade-in">
              חידושים בבניית אתרים
              <span className="block mt-2 text-yellow-500">2024</span>
            </h1>
            
            {/* Subtitle with Separator */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-rubik leading-relaxed">
                גלו את הטכנולוגיות והטרנדים החדשניים ביותר 
                <br />
                <span className="text-yellow-600 font-semibold">בעולם בניית האתרים</span>
              </p>
            </div>

            {/* Optional: Decorative Badge */}
            <div className="absolute -top-4 right-1/4 transform rotate-12">
              <div className="bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                חדש!
              </div>
            </div>
          </div>
        </div>

        {/* Innovations Grid Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight">
            המלצות עדכניות לפיתוח אתרים מודרני
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "חווית משתמש AI",
                desc: "יצירת חווית משתמש מותאמת אישית באמצעות בינה מלאכותית",
                icon: "🤖"
              },
              {
                title: "ממשק ללא מגע",
                desc: "שילוב טכנולוגיות Voice UI ותנועות ידיים לשיפור הנגישות",
                icon: "👋"
              },
              {
                title: "עיצוב מינימליסטי",
                desc: "שימוש בעיצוב נקי עם דגש על מהירות טעינה",
                icon: "⚡"
              },
              {
                title: "Web 3.0",
                desc: "אימוץ טכנולוגיות בלוקצ'יין לשיפור האבטחה והשקיפות",
                icon: "🔗"
              },
              {
                title: "עיצוב רספונסיבי",
                desc: "יישום עיצוב מתקדם המותאם למגוון רחב של מכשירים",
                icon: "📱"
              },
              {
                title: "מציאות רבודה",
                desc: "שילוב AR לחוויות אינטראקטיביות ייחודיות",
                icon: "🥽"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl transform transition-transform hover:scale-110">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight">
            תהליך בניית אתר אינטרנט מוצלח
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "אסטרטגיה ומחקר",
                  items: [
                    "הגדרת מטרות ואסטרטגיה דיגיטלית",
                    "מחקר קהל יעד מעמיק",
                    "תכנון ארכיטקטורת מידע",
                    "ניתוח התנהגות משתמשים",
                    "הגדרת KPIs",
                  ]
                },
                {
                  title: "עיצוב ופיתוח",
                  items: [
                    "עיצוב UI/UX חדשני",
                    "פיתוח מתקדם ומאובטח",
                    "אופטימיזציה למובייל",
                    "בדיקות ביצועים",
                    "השקה ותחזוקה שוטפת"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 group">
                        <span className="text-yellow-500 text-2xl transition-transform group-hover:scale-110">•</span>
                        <span className="text-gray-700 group-hover:text-yellow-600 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight">
            טיפים מקצועיים להצלחה
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6 border border-gray-100">
            {[
              { icon: "💡", tip: "השקיעו בחוויית משתמש יוצאת דופן" },
              { icon: "📝", tip: "שמרו על תוכן איכותי ומתעדכן" },
              { icon: "🔒", tip: "הקפידו על אבטחה ומהירות" },
              { icon: "🔍", tip: "בצעו אופטימיזציה למנועי חיפוש" },
              { icon: "📊", tip: "עקבו אחר מדדי ביצוע חשובים" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-yellow-50 group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <p className="text-xl text-gray-700 group-hover:text-yellow-700 transition-colors">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-l from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 font-rubik text-white">
            מוכנים להתחיל בבניית האתר החדש שלכם?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white">
            צוות המומחים שלנו כאן כדי לעזור לכם להפוך את החזון שלכם למציאות
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
            צרו קשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
} 