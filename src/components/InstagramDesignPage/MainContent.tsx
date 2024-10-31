import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white text-right">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-rubik">
            הכוח של תוכן ויזואלי בעידן הדיגיטלי המודרני
          </p>
        </div>

        {/* Why Instagram Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              למה אינסטגרם חיוני לעסק שלך?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "חשיפה מירבית",
                desc: "גישה למיליארד משתמשים פעילים עם אפשרויות טרגוט מתקדמות",
                icon: "📱"
              },
              {
                title: "אימפקט ויזואלי",
                desc: "פלטפורמה אידיאלית להצגת מוצרים ושירותים בצורה מושכת",
                icon: "🎨"
              },
              {
                title: "מעורבות גבוהה",
                desc: "אינטראקציה משמעותית עם הקהל דרך סטוריז, רילס ופוסטים",
                icon: "❤️"
              },
              {
                title: "שיווק באמצעות משפיענים",
                desc: "שיתוף פעולה עם מובילי דעה להרחבת טווח ההגעה והאמון במותג",
                icon: "🤝"
              },
              {
                title: "כלי פרסום מתקדמים",
                desc: "שימוש בפיצ'רים כמו IGTV, Reels ו-Shop לקידום המוצרים",
                icon: "🛍️"
              },
              {
                title: "ניתוח נתונים בזמן אמת",
                desc: "מעקב אחרי ביצועים ושיפור מתמיד באמצעות Insights",
                icon: "📊"
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

        {/* Strategies Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              אסטרטגיות שיווק מתקדמות
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "תוכן ויזואלי אפקטיבי",
                  items: [
                    "סטוריז יומיים מעניינים",
                    "רילס וירליים מושקעים",
                    "פיד אסתטי ומקצועי",
                    "שימוש בפילטרים ייחודיים",
                    "תוכן משתמשים (UGC)",
                    "תמונות וסרטונים באיכות גבוהה"
                  ]
                },
                {
                  title: "אופטימיזציה לתוצאות",
                  items: [
                    "ניתוח מדדי ביצוע מתקדמים",
                    "תזמון פרסומים אופטימלי",
                    "שימוש בהאשטאגים אפקטיביים",
                    "אינטראקציה עם עוקבים",
                    "קידום ממומן ממוקד",
                    "A/B Testing לתוכן"
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

        {/* Marketing Platforms Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              פלטפורמות שיווק מובילות 2024
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-rubik mb-12">
            בעידן הדיגיטלי המתפתח, חשוב להכיר את הפלטפורמות השונות ולנצל את הייחודיות של כל אחת מהן
            כדי להגיע לקהל היעד שלכם בצורה המיטבית.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "אינסטגרם",
                desc: "פלטפורמת התוכן הויזואלי המובילה עם כלי שיווק מתקדמים",
                icon: "📸"
              },
              {
                title: "טיקטוק",
                desc: "רשת חברתית צומחת המתמקדת בתוכן וידאו קצר ודינמי",
                icon: "🎵"
              },
              {
                title: "פייסבוק",
                desc: "הרשת החברתית הגדולה בעולם עם אפשרויות טרגוט מדויקות",
                icon: "👥"
              },
              {
                title: "לינקדאין",
                desc: "הפלטפורמה המובילה לשיווק B2B ונטוורקינג עסקי",
                icon: "💼"
              },
              {
                title: "יוטיוב",
                desc: "הפלטפורמה הגדולה לשיתוף וידאו עם יכולות SEO מתקדמות",
                icon: "📺"
              },
              {
                title: "טוויטר",
                desc: "פלטפורמה למידע בזמן אמת ושיח ישיר עם הקהל",
                icon: "🐦"
              },
              {
                title: "פינטרסט",
                desc: "פלטפורמה ויזואלית להשראה ורעיונות, מצוינת למוצרים ותחומי לייף סטייל",
                icon: "📌"
              },
              {
                title: "סנאפצ'ט",
                desc: "רשת חברתית המתמקדת בתוכן זמני ובפילטרים ייחודיים",
                icon: "👻"
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

        {/* Additional Section: Case Studies */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              סיפורי הצלחה
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-rubik mb-12">
            למד מהצלחות של לקוחותינו וכיצד שיווק באינסטגרם שינה את פני העסק שלהם.
          </p>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 font-rubik text-white">
            מוכנים להגדיל את הנוכחות הדיגיטלית שלכם?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white">
            המומחים שלנו יבנו עבורכם אסטרטגיית שיווק מקיפה באינסטגרם
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
