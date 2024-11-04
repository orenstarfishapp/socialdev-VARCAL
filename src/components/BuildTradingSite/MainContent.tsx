import React, { useState } from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";
import { ShoppingBag, Code, Globe, Zap, Shield, Settings, ChevronDown, Award, TrendingUp } from "lucide-react";

const ContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cms');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F7BA00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#F7BA00]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto space-y-24 relative">
        {/* Enhanced Hero Section */}
        <div className="text-center relative mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F7BA00]/10 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-[#F7BA00]" />
            <span className="text-[#F7BA00] font-semibold">מדריך מקיף 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7BA00] via-yellow-500 to-[#F7BA00]">
              בניית חנות דיגיטלי
            </span>
          </h1>

          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: <TrendingUp className="w-5 h-5" />, text: "קל ליישום" },
              { icon: <Zap className="w-5 h-5" />, text: "מדריך מעשי" },
              { icon: <Shield className="w-5 h-5" />, text: "עדכני" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-gray-700">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Tips Section with Enhanced Cards */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7BA00] via-yellow-500 to-[#F7BA00] font-rubik leading-tight">
              כיצד לבנות חנות מצליחה?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "בחירת פלטפורמה",
                  desc: "Shopify, WooCommerce או BigCommerce מציעות פתרונות מקיפים וידידותיים למשתמש."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "עיצוב מקצועי",
                  desc: "השקיעו בממשק משתמש פשוט וחווית משתמש מעולה לבניית אמון."
                },
                {
                  icon: <ShoppingBag className="w-6 h-6" />,
                  title: "הצגת מוצרים",
                  desc: "תמונות איכותיות, תיאורים מפורטים, ואפשרויות מיון וסינון מתקדמות."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "אבטחה ותשלומים",
                  desc: "הציעו מגוון אמצעי תשלום מאובטחים והציגו תקני אבטחה."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  onMouseEnter={() => setIsHovered(idx)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isHovered === idx ? 'bg-[#F7BA00] text-white' : 'bg-[#F7BA00]/10 text-[#F7BA00]'
                    }`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Section with Tabs */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7BA00] via-yellow-500 to-[#F7BA00] font-rubik leading-tight">
              קוד נקי מול מערכת ניהול תוכן
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex gap-4 mb-8">
                {[
                  { id: 'cms', title: 'מערכת ניהול תוכן', icon: <Settings className="w-5 h-5" /> },
                  { id: 'code', title: 'קוד נקי', icon: <Code className="w-5 h-5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#F7BA00] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                {activeTab === 'cms' ? (
                  <ul className="space-y-4">
                    {[
                      "ממשק ניהול פשוט ונוח",
                      "עדכוני תוכן קלים",
                      "מגבלות עיצוב ופונקציונליות",
                      "תמיכה ועדכונים שוטפים",
                      "זמינות תוספים ופתרונות מוכנים"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#F7BA00] rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-4">
                    {[
                      "שליטה מוחלטת והתאמה אישית",
                      "ביצועים מעולים",
                      "תהליך בנייה ארוך ומורכב",
                      "תחזוקה מאתגרת לאורך זמן"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#F7BA00] rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="bg-gradient-to-r from-[#F7BA00] to-yellow-500 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 transform rotate-6 scale-150"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8" />
                <h3 className="text-3xl font-bold font-rubik">טיפ מקצועי:</h3>
              </div>
              <p className="text-xl font-rubik leading-relaxed">
                בחרו בפתרון המתאים לגודל העסק ולמשאבים שלכם. אם אתם מתחילים, CMS יכול להיות פתרון מצוין. 
                ככל שתגדלו, תוכלו לשקול מעבר לפתרון מותאם אישית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;