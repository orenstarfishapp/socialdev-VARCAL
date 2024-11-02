import React from "react";
import { Paintbrush, Palette, Type, LayoutGrid } from "lucide-react";

import { 
  Layout, 
  Users, 
  Smartphone, 
  CheckCircle, 
  Target, 
  Zap, 
  Layers, 
  Settings,
  ChevronDown,
  Star
} from "lucide-react";

const ContentSection: React.FC = () => {
  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "ממשק משתמש",
      desc: "עיצוב ויזואלי מושך ואינטואיטיבי",
      features: [
        "עיצוב נקי ומינימליסטי",
        "היררכיה ויזואלית ברורה",
        "פלטת צבעים עקבית",
        "טיפוגרפיה קריאה",
        "אייקונים ברורים"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "חוויית משתמש",
      desc: "זרימה טבעית ונוחה באפליקציה",
      features: [
        "ניווט אינטואיטיבי",
        "זמני טעינה מהירים",
        "משוב למשתמש",
        "מניעת טעויות",
        "התאמה אישית"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "רספונסיביות",
      desc: "התאמה למגוון מכשירים ומסכים",
      features: [
        "תמיכה בכל גדלי המסך",
        "תצוגה אופטימלית",
        "טעינה מהירה",
        "ממשק מותאם מגע",
        "גמישות בתצוגה"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            עיצוב אפליקציות מתקדם
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            המדריך המקיף לעיצוב אפליקציות
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>
{/* Additional Features Section */}
<div className="space-y-12">
  <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
    <span className="relative">
      עקרונות עיצוב מתקדמים
      <div className="absolute -top-6 -right-8">
        <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
      </div>
    </span>
  </h2>
  <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          icon: <Target className="w-6 h-6" />,
          title: "עיצוב ממוקד משתמש",
          subtitle: "יצירת חוויה ויזואלית מותאמת למשתמש",
          points: [
            "שימוש בעקרונות עיצוב אוניברסליים להנגשת המידע",
            "יצירת היררכיה ויזואלית ברורה להדגשת תוכן חשוב",
            "בחירת פלטת צבעים מדויקת התומכת במטרות העיצוב",
            "שימוש בטיפוגרפיה מותאמת לקריאות מיטבית",
            "עיצוב אלמנטים אינטראקטיביים ברורים ונגישים",
            "יצירת שפה עיצובית עקבית לאורך כל האפליקציה"
          ]
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "אנימציות ומעברים",
          subtitle: "תנועה ואינטראקציה בממשק המשתמש",
          points: [
            "עיצוב אנימציות מיקרו להעשרת חווית המשתמש",
            "יצירת מעברים חלקים בין מסכים ומצבים",
            "שימוש בתנועה להדגשת פעולות ואינטראקציות",
            "אנימציות משוב למשתמש בזמן אמת",
            "תזמון ועיתוי מדויק של אנימציות ממשק",
            "אפקטים ויזואליים התומכים בזרימת השימוש"
          ]
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "קומפוזיציה ומבנה",
          subtitle: "ארגון ויזואלי של מרכיבי הממשק",
          points: [
            "שימוש בגריד מדויק ליצירת מבנה עקבי",
            "ארגון אלמנטים בהתאם לעקרונות הגשטלט",
            "יצירת איזון ויזואלי בין מרכיבי העיצוב",
            "שימוש נכון במרווחים (White Space)",
            "בניית מדרג ויזואלי לניווט אינטואיטיבי",
            "התאמת המבנה לתצוגות ורזולוציות שונות"
          ]
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "סגנון ויזואלי",
          subtitle: "יצירת זהות עיצובית ייחודית",
          points: [
            "פיתוח שפה עיצובית עקבית וייחודית",
            "בחירת סכמת צבעים המשקפת את אופי המותג",
            "עיצוב אייקונים ואלמנטים גרפיים מותאמים",
            "שילוב טקסטורות ואפקטים ויזואליים",
            "התאמת סגנון לקהל היעד ומטרות האפליקציה",
            "יצירת חווית מותג עקבית בכל נקודות המגע"
          ]
        }
      ].map((section, index) => (
        <div key={index} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4 flex items-center gap-3">
              {section.icon}
              {section.title}
            </h3>
            <p className="text-gray-600 pr-6">{section.subtitle}</p>
          </div>
          <ul className="space-y-4">
            {section.points.map((point, idx) => (
              <li key={idx} className="flex items-center text-gray-700 gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                </div>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

O
can you add more below that for copy paste withiout chaging much?


I'll add another section below the existing one that continues the design focus:

jsx

Copy
{/* Design Principles Section */}
<div className="space-y-12 mt-16">
  <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative">
    <span className="relative">
      עקרונות מנחים בעיצוב
      <div className="absolute -top-6 -right-8">
        <Star className="w-8 h-8 text-yellow-400 animate-spin-slow" />
      </div>
    </span>
  </h2>
  <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          icon: <Paintbrush className="w-6 h-6" />,
          title: "עיצוב חזותי",
          subtitle: "יצירת שפה ויזואלית עוצמתית",
          points: [
            "שימוש מושכל בצבעים ליצירת אווירה מתאימה",
            "עיצוב אייקונים ייחודיים המשקפים את המותג",
            "בחירת פונטים המשדרים את המסר הנכון",
            "יצירת מערכת גריד עקבית ומקצועית",
            "שילוב אלמנטים גרפיים תומכים בחוויה",
            "עיצוב רספונסיבי המתאים לכל מסך"
          ]
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "חוויה אינטראקטיבית",
          subtitle: "עיצוב תגובתי ודינמי",
          points: [
            "אנימציות מיקרו מותאמות לפעולות משתמש",
            "משוב ויזואלי מיידי לפעולות",
            "מעברים חלקים בין מצבי ממשק",
            "עיצוב מצבי טעינה ושגיאה",
            "אפקטים ויזואליים תומכי משתמש",
            "אינטראקציות מותאמות למובייל"
          ]
        },
        {
          icon: <Type className="w-6 h-6" />,
          title: "טיפוגרפיה",
          subtitle: "היררכיה טקסטואלית מדויקת",
          points: [
            "בחירת משפחות פונטים מתאימות",
            "יצירת היררכיה טקסטואלית ברורה",
            "התאמת גדלי טקסט למסכים שונים",
            "שמירה על קריאות מקסימלית",
            "עיצוב כותרות ייחודי למותג",
            "איזון בין אסתטיקה ושימושיות"
          ]
        },
        {
          icon: <LayoutGrid className="w-6 h-6" />,
          title: "מערכות עיצוב",
          subtitle: "בניית תשתית עיצובית יציבה",
          points: [
            "יצירת ספריית קומפוננטים עקבית",
            "הגדרת סטנדרטים עיצוביים ברורים",
            "תיעוד מערכת העיצוב לשימוש עתידי",
            "יצירת סטייל גייד מקיף",
            "הגדרת כללים לשימוש באלמנטים",
            "בניית ספריית תבניות לשימוש חוזר"
          ]
        }
      ].map((section, index) => (
        <div key={index} className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 border-r-4 border-yellow-500 pr-4 flex items-center gap-3">
              {section.icon}
              {section.title}
            </h3>
            <p className="text-gray-600 pr-6">{section.subtitle}</p>
          </div>
          <ul className="space-y-4">
            {section.points.map((point, idx) => (
              <li key={idx} className="flex items-center text-gray-700 gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                </div>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-yellow-300 opacity-20 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 font-rubik text-white">
              מוכנים להתחיל?
            </h3>
            <p className="text-xl font-rubik mb-8 text-white">
              צרו איתנו קשר עכשיו לקבלת הצעת מחיר מותאמת אישית
            </p>
            <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              <Star className="w-6 h-6" />
              <span>צרו קשר עכשיו</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;