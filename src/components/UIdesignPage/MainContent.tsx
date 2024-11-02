import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";
import ContactForm from "../Portfolio/ContactForm";

const ContentSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-rubik mb-6">
            עיצוב UI/UX מקצועי
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-rubik">
            המפתח להצלחת המוצר הדיגיטלי שלכם
          </p>
        </div>

        {/* Main Differences Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              מה ההבדל בין UX ל-UI?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "עיצוב UI",
                desc: "ממשק המשתמש הוא החלק הוויזואלי של המוצר, כולל צבעים, טיפוגרפיה, כפתורים ואלמנטים גרפיים",
                icon: "🎨"
              },
              {
                title: "עיצוב UX",
                desc: "חווית המשתמש מתמקדת באופן בו המשתמש מתנהל במוצר ובתחושה שהוא חווה במהלך השימוש",
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

        {/* Design Principles Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              עקרונות עיצוב מנצחים
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "נגישות",
                desc: "עיצוב המתאים לכל המשתמשים, כולל בעלי מוגבלויות",
                icon: "♿"
              },
              {
                title: "שימושיות",
                desc: "ממשק אינטואיטיבי שקל להבנה ולתפעול",
                icon: "🎯"
              },
              {
                title: "עקביות",
                desc: "שמירה על אחידות בעיצוב לאורך כל המוצר",
                icon: "🔄"
              },
              {
                title: "היררכיה ויזואלית",
                desc: "סידור תוכן בצורה ברורה ומובנת",
                icon: "📊"
              },
              {
                title: "משוב למשתמש",
                desc: "תגובות ברורות לפעולות המשתמש",
                icon: "💬"
              },
              {
                title: "ביצועים",
                desc: "מהירות טעינה ותגובה אופטימלית",
                icon: "⚡"
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

        {/* Process Section */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
            <span className="relative">
              תהליך העבודה שלנו
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "שלב האפיון",
                  items: [
                    "הגדרת קהל היעד",
                    "ניתוח צרכי המשתמשים",
                    "מחקר מתחרים",
                    "אפיון דרישות",
                    "יצירת פרסונות",
                    "הגדרת מטרות"
                  ]
                },
                {
                  title: "שלב העיצוב",
                  items: [
                    "עיצוב ממשק משתמש",
                    "בחירת צבעים וטיפוגרפיה",
                    "יצירת אבות טיפוס",
                    "בדיקות משתמשים",
                    "אופטימיזציה",
                    "תיעוד מפורט"
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
            מוכנים לשדרג את המוצר שלכם?
          </h2>
          <p className="text-2xl font-rubik mb-8 text-white">
            צוות המומחים שלנו יעצב עבורכם חווית משתמש מושלמת
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