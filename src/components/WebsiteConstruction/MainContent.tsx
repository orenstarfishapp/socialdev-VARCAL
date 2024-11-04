import React, { useState } from "react";
import { ChevronDown, ArrowRight, Award, TrendingUp, Users, Target, BarChart2, Zap } from "lucide-react";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section dir="rtl" className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            שיווק מתקדם בטיקטוק
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף להצלחה בפלטפורמה החברתית המובילה
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
              יתרונות השיווק בטיקטוק
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "חשיפה לקהל צעיר",
                desc: "גישה למיליוני משתמשים צעירים ומעורבים בישראל",
                icon: <Target className="text-yellow-500" size={32} />,
                stats: "מעל 1.5M משתמשים בישראל"
              },
              {
                title: "ויראליות מהירה",
                desc: "פוטנציאל להגיע למיליוני צפיות תוך שעות",
                icon: <TrendingUp className="text-yellow-500" size={32} />,
                stats: "עד פי 10 יותר חשיפה"
              },
              {
                title: "מעורבות גבוהה",
                desc: "אחוזי מעורבות הגבוהים ביותר מכל הרשתות",
                icon: <Users className="text-yellow-500" size={32} />,
                stats: "מעורבות של 95%"
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
                <div className="flex items-center gap-4">
                  <BarChart2 className="text-yellow-500" size={32} />
                  <span className="text-2xl font-bold text-gray-800">{item.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;