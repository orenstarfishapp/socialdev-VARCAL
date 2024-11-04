import React from "react";
import { ArrowLeft, Check, Star, Sparkles, TrendingUp, Target, BarChart2, ArrowRight } from "lucide-react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      {/* Enhanced Hero Banner */}
      <div className="relative overflow-hidden mb-24 bg-gradient-to-r from-[#F7BA00]/10 to-yellow-500/10 rounded-3xl p-12">
        <div className="absolute inset-0 bg-[#F7BA00]/5 blur-3xl transform rotate-6"></div>
        <div className="absolute -top-10 right-0 w-72 h-72 bg-[#F7BA00]/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="bg-white/30 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-[#F7BA00] font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>עדכני ל-2024</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7BA00] via-yellow-500 to-[#F7BA00] font-rubik leading-tight">
              בניית אתר תדמית מקצועי
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: <Target className="w-5 h-5" />, text: "בניית מותג חזק" },
              { icon: <TrendingUp className="w-5 h-5" />, text: "הגדלת מכירות" },
              { icon: <BarChart2 className="w-5 h-5" />, text: "שיפור תוצאות" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-24">
        {/* First Content Section */}
        <div className="space-y-12">
          <div className="relative">
            <div className="absolute inset-0 bg-[#F7BA00] opacity-5 blur-3xl transform rotate-6"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7BA00] via-yellow-500 to-[#F7BA00] font-rubik leading-tight mb-8">
              האם זה עדיין משתלם ב-2024?
            </h2>

            {/* Added Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { number: "73%", desc: "מהלקוחות בודקים אתר לפני רכישה" },
                { number: "89%", desc: "עלייה בהמרות עם אתר מקצועי" },
                { number: "24/7", desc: "נגישות מלאה ללקוחות" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-all border border-gray-100">
                  <div className="text-3xl font-bold text-[#F7BA00] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rest of your content sections with similar styling... */}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-[#F7BA00] to-yellow-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 transform rotate-6 scale-150"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 text-white">
              מוכנים להתחיל בבניית האתר החדש שלכם?
            </h2>
            <p className="text-2xl mb-8 text-white/90">
              צוות המומחים שלנו כאן כדי לעזור לכם להפוך את החזון למציאות
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#F7BA00] px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                צור קשר עכשיו
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                למידע נוסף
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;