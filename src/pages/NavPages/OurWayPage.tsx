import React, { useState } from "react";
import { Gem, Pen, Link, Star } from "lucide-react";
import axios from "axios";

const OurWay: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    topic: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );
      setResponseMessage("Lead submitted successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form. Please try again.");
      setResponseMessage("");
    }
  };

  interface TimelineItem {
    title: string;
    description: string;
  }

  interface TimelineSectionProps {
    icon: React.ElementType; // This allows any React component
    color: string;
    title: string;
    items: TimelineItem[];
  }

  // TimelineSection component
  const TimelineSection: React.FC<TimelineSectionProps> = ({ icon: Icon, color, title, items }) => (
    <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-start gap-8">
          <div className="md:w-1/5 flex justify-center md:justify-end">
            <div className={`bg-${color} p-6 rounded-full`}>
              <Icon size={64} className="text-white" />
            </div>
          </div>
          <div className="md:w-4/5 md:border-l-4 md:border-${color} md:pl-8 text-right">
            <h2 className={`font-rubik font-bold text-3xl md:text-4xl text-${color} mb-6`}>
              <span className="relative">
                {title}
                <span className={`absolute bottom-0 right-0 w-full h-1 bg-${color} transform -skew-x-12`}></span>
              </span>
            </h2>
            <ul className="text-white text-lg space-y-6 list-none">
              {items.map((item, index) => (
                <li key={index} className="relative pr-6 before:content-[''] before:absolute before:right-0 before:top-2 before:w-3 before:h-3 before:bg-${color} before:rounded-full">
                  <p className="font-semibold mb-2">{item.title}</p>
                  <p className="text-gray-300">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-slate-900 text-white">
      <section className="flex flex-col pt-24 pb-16 w-full max-md:max-w-full">
        <div className="flex flex-col items-center w-full p-4 gap-6 max-md:max-w-full">
          <h2 className="text-yellow-400 font-rubik font-bold text-5xl leading-tight text-center max-md:text-4xl max-md:max-w-full">
            החזון שלי
          </h2>
          <p className="text-center font-rubik text-3xl leading-snug max-w-4xl">
            כולם רוצים להיות מקום 1 בגוגל.
            <br />
            אך אנחנו לא מבטיחים הבטחות אלא נותנים תוצאות.
          </p>
        </div>
      </section>

      <TimelineSection
        icon={Gem}
        color="sky-500"
        title="חודש 1-2: פיתוח ובניית אתרים"
        items={[
          {
            title: "בדיקת שביעות רצון:",
            description: "בסיום שלב זה נוודא שהאתר תואם את הציפיות שלך ושאתה מרוצה מהתוצאה. אנו נבצע שינויים ועדכונים לפי הצורך כדי להבטיח שהאתר עומד בסטנדרטים שלך."
          },
          {
            title: "בנה את האתר שלך:",
            description: "במהלך החודש הראשון והשני נבנה את האתר שלך ביחד. המטרה היא ליצור אתר אינטרנט מעוצב ומהיר המותאם לצרכים הייחודיים של העסק שלך. זה כולל עיצוב מותאם אישית, תוכן ראשוני ואופטימיזציה בסיסית למנועי חיפוש (SEO)."
          }
        ]}
      />

      <TimelineSection
        icon={Pen}
        color="fuchsia-600"
        title="חודש 3-4: יצירת תוכן וקידום אורגני"
        items={[
          {
            title: "כתיבת מאמרים ותכנים איכותיים",
            description: "במהלך חודשים אלו נתחיל להפיק מאמרים ותכנים נוספים לאתר שלכם. המאמרים יתמקדו במילות מפתח רלוונטיות לתחום שלכם וישמשו בסיס לקידום אורגני."
          },
          {
            title: "קידום אורגני (SEO)",
            description: "בואו נתחיל בתהליך של קידום אורגני כדי להעלות את דירוג האתר שלכם במנועי החיפוש. זה כולל אופטימיזציה נוספת של תוכן, בניית קישורים פנימית ושיפור מבנה האתר כדי להבטיח שקל לאינדקס על ידי מנועי החיפוש."
          },
          {
            title: "מדידה ושיפור",
            description: "נתחיל לעקוב אחר התוצאות והביצועים של התוכן והקידום, ונבצע שיפורים לפי הצורך."
          }
        ]}
      />

      <TimelineSection
        icon={Link}
        color="teal-300"
        title="חודש 5-6: בניית קישורים וחיבור לרשתות חברתיות"
        items={[
          {
            title: "קישורים נכנסים",
            description: "במהלך חודשים אלו נתחיל לבנות קישורים חיצוניים מאתרים איכותיים שיקשרו לאתר שלכם. זה יעזור להגביר את הסמכות של האתר ולשפר את דירוג מנועי החיפוש."
          },
          {
            title: "התחבר לערוצי מדיה חברתית",
            description: "נתחיל לחבר את האתר שלך לערוצי המדיה החברתית שלך (פייסבוק, אינסטגרם, לינקדאין וכו'). נדאג שתהיה אינטגרציה מלאה בין האתר לערוצים אלו, וכן נקדם תכנים ברשתות החברתיות כדי להביא יותר תנועה לאתר."
          },
          {
            title: "מעורבות",
            description: "נתחיל לעסוק בערוצי מדיה חברתית, כמו פוסטים, קידום מכירות ושיתופי פעולה עם עסקים אחרים, כדי להגדיל את הנוכחות המקוונת שלך."
          }
        ]}
      />

      <section className="bg-slate-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-full md:w-2/3 space-y-8 text-right">
              <h2 className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-green-500">
                חודש 7-12: אופטימיזציה מתמשכת, רייטינג משופר ונוכחות מורחבת
              </h2>
              <div className="text-white font-rubik text-lg md:text-xl lg:text-2xl space-y-6">
                <p>
                  אופטימיזציה מתמשכת: במהלך החודשים הנותרים, נמשיך לבצע אופטימיזציה על סמך הנתונים שנקבל. זה כולל שיפור מהירות האתר, אופטימיזציה נוספת של תוכן וקישורים והמשך בניית קישורים איכותיים.
                </p>
                <p>
                  שיפור הדירוג במנועי החיפוש: נמשיך לעבוד על שיפור הדירוג במנועי החיפוש באמצעות אופטימיזציות נוספות והוספת תוכן חדש בהתאם לצרכיך.
                </p>
                <p>
                  הרחבת הנוכחות שלך במדיה החברתית: נמשיך להרחיב את הנוכחות שלך במדיה החברתית, להגדיל את העוקבים והמעורבות, ולשלב קמפיינים ממומנים במידת הצורך כדי למשוך לקוחות פוטנציאליים נוספים.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 opacity-20 rounded-full blur-xl"></div>
                <Star className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 text-green-500 relative z-10" strokeWidth={1} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <form className="bg-white rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">צור קשר</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-right"
                placeholder="שם מלא *"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-right"
                placeholder="טלפון *"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-right"
                placeholder="כתובת מייל *"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name="topic"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-right"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="">על מה נדבר?</option>
                <option value="אחר..">אחר..</option>
                <option value="פיתוח ל-UC">פיתוח ל-UC</option>
                <option value="קידום ברשתות החברתיות">קידום ברשתות החברתיות</option>
                <option value="קידום אתרים אורגני (SEO)">קידום אתרים אורגני (SEO)</option>
                <option value="עיצוב אתרים UI/UX">עיצוב אתרים UI/UX</option>
                <option value="פיתוח אתר ו/או אפליקציה">פיתוח אתר ו/או אפליקציה</option>
              </select>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-yellow-600 transition-colors"
              >
                צור פניה חדשה
              </button>
            </div>
            {responseMessage && (
              <p className="mt-4 text-green-500 text-center">{responseMessage}</p>
            )}
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default OurWay;
