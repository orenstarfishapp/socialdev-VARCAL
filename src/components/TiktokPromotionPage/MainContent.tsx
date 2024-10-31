import React, { useState } from "react";
import { ChevronDown, ArrowRight, Award, TrendingUp, Users, Target, BarChart2, Zap } from "lucide-react";

const ContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section dir="rtl" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
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

        {/* Key Points Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <Award className="text-yellow-500" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-heebo leading-tight">
              יתרונות השיווק הדיגיטלי
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "הגעה לקהל יעד",
                desc: "זיהוי והגעה מדויקת לקהל היעד הרלוונטי לעסק שלך",
                icon: <Target className="text-yellow-500" size={32} />,
                stats: "פי 3 יותר אפקטיבי"
              },
              {
                title: "מדידה מדויקת",
                desc: "ניתוח נתונים בזמן אמת ומעקב אחר ביצועי הקמפיין",
                icon: <TrendingUp className="text-yellow-500" size={32} />,
                stats: "100% שקיפות בנתונים"
              },
              {
                title: "בניית קהילה",
                desc: "יצירת קהילה נאמנה סביב המותג שלך",
                icon: <Users className="text-yellow-500" size={32} />,
                stats: "הגדלת נאמנות ב-85%"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:-translate-y-2 ${
                  expandedCard === index ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="text-yellow-500 font-bold text-lg">{item.stats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Tactics Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <BarChart2 className="text-yellow-500" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-heebo leading-tight">
              טקטיקות שיווק מתקדמות
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab('basic')}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'basic'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                טקטיקות בסיסיות
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === 'advanced'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                טקטיקות מתקדמות
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {activeTab === 'basic' ? (
                <div className="space-y-6">
                  {[
                    "בניית תוכנית שיווק אסטרטגית",
                    "יצירת תוכן איכותי ומעניין",
                    "אופטימיזציה לחיפוש",
                    "ניהול מדיה חברתית",
                    "פרסום ממומן בסיסי"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {[
                    "אוטומציה של תהליכי שיווק",
                    "פרסונליזציה מתקדמת",
                    "שילוב בינה מלאכותית",
                    "ניתוח נתונים מתקדם",
                    "אופטימיזציה רציפה"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Zap className="text-yellow-500" size={24} />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="bg-yellow-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">נתונים מעניינים</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">שיפור במכירות</span>
                    <span className="font-bold text-yellow-500">245%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">חסכון בעלויות</span>
                    <span className="font-bold text-yellow-500">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">הגדלת תנועה</span>
                    <span className="font-bold text-yellow-500">180%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-10 transform rotate-12 scale-150"></div>
          <h2 className="text-4xl font-bold mb-6 font-heebo text-white relative">
            מוכנים להתחיל בשינוי הדיגיטלי?
          </h2>
          <p className="text-2xl font-heebo mb-8 text-white relative">
            צוות המומחים שלנו מוכן לעזור לך להגיע להצלחה
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <span>צור קשר עכשיו</span>
            <ArrowRight className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;