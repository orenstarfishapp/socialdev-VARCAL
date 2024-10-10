import React from "react";

const ContentSection: React.FC = () => {
  const sections = [
    {
      title: "החזון שלנו",
      content: "לאחר שעבדתי בהייטק משנת 2013 והחלטתי להקים את החברה, הצבתי לעצמי מטרה לספק פתרונות דיגיטליים ברמה הגבוהה ביותר לעסקים קטנים ובינוניים.",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "המומחיות שלנו",
      content: "היום, אנחנו מתמחים בכל תחומי הדיגיטל, מתוך חזון ואמונה שכל בעל עסק קטן ראוי לפתרון דיגיטלי מלא, מותאם אישית וללא פשרות.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "המטרה שלנו",
      content: "בכל פרויקט, המטרה שלנו היא לפתח מוצר ידידותי למשתמש עבור עסקים קטנים, שמתאים לצרכים הייחודיים שלהם וללקוחותיהם, תוך שמירה על חדשנות וטכנולוגיה מתקדמת.",
      color: "from-teal-600 to-green-600"
    }
  ];

  return (
    <section className="flex flex-col justify-center w-full text-lg leading-relaxed text-right min-h-[490px] bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div dir="rtl" className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="relative overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                    {section.title}
                  </h2>
                  <div className={`w-24 h-1 bg-gradient-to-r ${section.color} mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  <p className="text-gray-700 relative z-10">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;