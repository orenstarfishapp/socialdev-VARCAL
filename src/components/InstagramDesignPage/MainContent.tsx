import React from "react";
// import SocialImg from "../../assets/images/social-networks-marketing-2.png.png";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight mb-8">
    {children}
  </h2>
);

const ContentBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
    <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#F7BA00] font-bold text-xl ml-2">•</span>
          <span className="text-[#4A5568]">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <SectionTitle>האם לבעלי עסקים יש צורך לפרסם באינסטגרם?</SectionTitle>
          <p className="text-xl text-[#4A5568] mb-8">
            כן, לבעלי עסקים קטנים ובינוניים יש היום צורך גדול לנצל את הפלטפורמה של אינסטגרם לשיווק וקידום העסק שלהם.
          </p>
        </div>

        <div>
          <SectionTitle>מה הסיבות שכדאי לבעלי עסקים להשתמש באינסטגרם?</SectionTitle>
          <ContentBlock
            title="יתרונות השימוש באינסטגרם לעסקים"
            items={[
              "קהל גדול – מיליוני משתמשים פעילים מדי יום",
              "אפשרויות שיווק מגוונות – קידום מותג, שיתוף תמונות וסרטונים, עריכת מבצעים",
              "קשר אישי עם לקוחות",
              "פוטנציאל ויראליות גבוה",
              "כלים מתקדמים למדידת ביצועים וניתוח נתונים",
              "עלויות שיווק נמוכות יחסית",
              "נוכחות במקום בו נמצאים המתחרים"
            ]}
          />
        </div>

        <div>
          <SectionTitle>פרסום ממומן באינסטגרם: טיפים לניצול מיטבי</SectionTitle>
          <ContentBlock
            title="אסטרטגיות לפרסום ממומן אפקטיבי"
            items={[
              "בחירת מדיה מתאימה – תמונות, וידאו, סטורי, קרוסלה או רילס",
              "הגדרת קהל יעד רלוונטי – גיל, מיקום, העדפות והתנהגות",
              "תכנון תקציב מושכל",
              "מעקב אחר מדדי ביצוע – צפיות, לייקים, קליקים, המרות",
              "אופטימיזציה מתמדת של הקמפיינים",
              "יצירת תוכן איכותי ומעניין",
              "שימוש בקריאות לפעולה ברורות",
              "שילוב עם אסטרטגיית שיווק כוללת",
              "ניתוח נתונים ושיפור מתמיד"
            ]}
          />
        </div>

        <div>
          <SectionTitle>איזו פלטפורמה לפרסם בשנת 2023?</SectionTitle>
          <ContentBlock
            title="פלטפורמות מובילות לפרסום עסקי"
            items={[
              "אינסטגרם – מיליארדי משתמשים, מתמקד בתוכן ויזואלי",
              "טיקטוק – צמיחה מהירה, מתמקד בסרטונים קצרים",
              "יוטיוב – פרסום וידאו אפקטיבי",
              "פייסבוק – עדיין רלוונטי עם קהל גדול",
              "לינקדאין – מצוין לשיווק B2B",
              "פינטרסט – מתאים לפרסום ויזואלי וקידום תוכן לקהלי נישה",
              "טוויטר – טוב לנושאים אקטואליים ותוכן טקסטואלי"
            ]}
          />
        </div>

        <div className="bg-gradient-to-r from-[#F7BA00] to-[#FFA500] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">תעבדו עם משרד דיגיטל מקצועי</h2>
          <p className="text-xl mb-6">
            שיתוף פעולה עם משרד דיגיטל שמכיר את השיטות החדשות ביותר יכול להוביל לתוצאות מרשימות ולהגדיל את הרווחים שלכם!
          </p>
          <button className="bg-white text-[#F7BA00] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300">
            צרו קשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;