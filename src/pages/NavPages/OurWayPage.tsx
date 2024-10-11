import { useState } from "react";
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

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your server URL
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
  return (
    <>
      <section className="flex flex-col pt-[150px] w-full bg-[#1E293B] max-md:max-w-full">
        <div className="flex flex-col items-center w-full p-[10px] gap-[20px] max-md:max-w-full">
          <div className="w-full text-center max-w-[1907px] max-md:max-w-full">
            <h2 className="w-full text-[#F7BA00] font-rubik font-bold text-[48px] leading-[58px] max-md:text-4xl max-md:max-w-full">
              החזון שלי
            </h2>
          </div>
          <div className="w-full text-center max-w-[1907px] max-md:max-w-full">
            <span className="block text-white font-rubik text-[48px] leading-[50px]">
              כולם רוצים להיות מקום 1 בגוגל.
              <br />
              אך אנחנו לא מבטיחים הבטחות אלא נותנים תוצאות.
            </span>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="md:w-1/5 flex justify-center md:justify-end">
              <div className="bg-sky-500 p-6 rounded-full">
                <Gem size={64} className="text-white" />
              </div>
            </div>

            <div className="md:w-4/5 md:border-l-4 md:border-sky-500 md:pl-8 text-right">
              <h2 className="font-rubik font-bold text-4xl md:text-5xl text-sky-400 mb-6">
                <span className="relative">
                  חודש 1-2: פיתוח ובניית אתרים
                  <span className="absolute bottom-0 right-0 w-full h-1 bg-sky-400 transform -skew-x-12"></span>
                </span>
              </h2>
              <ul className="text-white text-lg md:text-xl space-y-6 list-none">
                <li className="relative pr-6 before:content-[''] before:absolute before:right-0 before:top-2 before:w-3 before:h-3 before:bg-sky-400 before:rounded-full">
                  <p className="font-semibold mb-2">בדיקת שביעות רצון:</p>
                  <p className="text-gray-300">
                    בסיום שלב זה נוודא שהאתר תואם את הציפיות שלך ושאתה מרוצה מהתוצאה. אנו נבצע שינויים ועדכונים לפי הצורך כדי להבטיח שהאתר עומד בסטנדרטים שלך.
                  </p>
                </li>
                <li className="relative pr-6 before:content-[''] before:absolute before:right-0 before:top-2 before:w-3 before:h-3 before:bg-sky-400 before:rounded-full">
                  <p className="font-semibold mb-2">בנה את האתר שלך:</p>
                  <p className="text-gray-300">
                    במהלך החודש הראשון והשני נבנה את האתר שלך ביחד. המטרה היא ליצור אתר אינטרנט מעוצב ומהיר המותאם לצרכים הייחודיים של העסק שלך. זה כולל עיצוב מותאם אישית, תוכן ראשוני ואופטימיזציה בסיסית למנועי חיפוש (SEO).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-fuchsia-600 p-6 rounded-full">
                <Pen size={64} className="text-white" />
              </div>
            </div>

            <div className="md:w-3/4 md:border-l-4 md:border-fuchsia-600 md:pl-8 text-right">
              <h2 className="font-rubik font-bold text-4xl md:text-5xl text-fuchsia-600 mb-8">
                <span className="relative inline-block">
                  חודש 3-4: יצירת תוכן וקידום אורגני
                  <span className="absolute bottom-0 right-0 w-full h-1 bg-fuchsia-600 transform -skew-x-12"></span>
                </span>
              </h2>
              <div className="text-white text-lg md:text-xl space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">כתיבת מאמרים ותכנים איכותיים</h3>
                  <p className="text-gray-300">
                    במהלך חודשים אלו נתחיל להפיק מאמרים ותכנים נוספים לאתר שלכם. המאמרים יתמקדו במילות מפתח רלוונטיות לתחום שלכם וישמשו בסיס לקידום אורגני.
                  </p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">קידום אורגני (SEO)</h3>
                  <p className="text-gray-300">
                    בואו נתחיל בתהליך של קידום אורגני כדי להעלות את דירוג האתר שלכם במנועי החיפוש. זה כולל אופטימיזציה נוספת של תוכן, בניית קישורים פנימית ושיפור מבנה האתר כדי להבטיח שקל לאינדקס על ידי מנועי החיפוש.
                  </p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-fuchsia-400">מדידה ושיפור</h3>
                  <p className="text-gray-300">
                    נתחיל לעקוב אחר התוצאות והביצועים של התוכן והקידום, ונבצע שיפורים לפי הצורך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-16 px-4 md:px-8 rtl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-teal-300 p-6 rounded-full">
                <Link size={64} className="text-slate-800" />
              </div>
            </div>

            <div className="md:w-3/4 md:border-l-4 md:border-teal-300 md:pl-8 text-right">
              <h2 className="font-rubik font-bold text-4xl md:text-5xl text-teal-300 mb-8">
                <span className="relative inline-block">
                  חודש 5-6: בניית קישורים וחיבור לרשתות חברתיות
                  <span className="absolute bottom-0 right-0 w-full h-1 bg-teal-300 transform -skew-x-12"></span>
                </span>
              </h2>
              <div className="text-white text-lg md:text-xl space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-teal-200">קישורים נכנסים</h3>
                  <p className="text-gray-300">
                    במהלך חודשים אלו נתחיל לבנות קישורים חיצוניים מאתרים איכותיים שיקשרו לאתר שלכם. זה יעזור להגביר את הסמכות של האתר ולשפר את דירוג מנועי החיפוש.
                  </p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-teal-200">התחבר לערוצי מדיה חברתית</h3>
                  <p className="text-gray-300">
                    נתחיל לחבר את האתר שלך לערוצי המדיה החברתית שלך (פייסבוק, אינסטגרם, לינקדאין וכו'). נדאג שתהיה אינטגרציה מלאה בין האתר לערוצים אלו, וכן נקדם תכנים ברשתות החברתיות כדי להביא יותר תנועה לאתר.
                  </p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-2xl mb-3 text-teal-200">מעורבות</h3>
                  <p className="text-gray-300">
                    נתחיל לעסוק בערוצי מדיה חברתית, כמו פוסטים, קידום מכירות ושיתופי פעולה עם עסקים אחרים, כדי להגדיל את הנוכחות המקוונת שלך.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="w-full md:w-2/3 space-y-8 text-right">
              <h2 className="font-rubik font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-green-500">
                חודש 7-12: אופטימיזציה מתמשכת, רייטינג משופר ונוכחות מורחבת
              </h2>
              <div className="text-white font-rubik text-xl md:text-2xl lg:text-3xl space-y-8">
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
                <Star className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 text-green-500 relative z-10" strokeWidth={1} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" py-[50px] pl-[50px] flex justify-center">
        <div className="w-3/5 flex justify-center">
          <div className="flex flex-col grow shrink justify-center w-[40%] mr-[60px] p-[10px]">
            <div className="items-center w-full">
              <div className="p-[30px] w-full rounded-[10px] bg-white shadow-custom-black">
                <form className="max-md:max-w-full" onSubmit={handleSubmit}>
                  <input type="hidden" name="post_id" value="1282" />
                  <input type="hidden" name="form_id" value="1282" />
                  <input type="hidden" name="referer_title" value="1282" />
                  <input type="hidden" name="queried_id" value="1282" />

                  {/* Full Name Field */}
                  <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      dir="rtl"
                      className="w-full bg-transparent outline-none py-2 px-4 text-right"
                      placeholder="שם מלא *"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      dir="rtl"
                      className="w-full bg-transparent outline-none py-2 px-4 text-right"
                      placeholder="טלפון *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      dir="rtl"
                      className="w-full bg-transparent outline-none py-2 px-4 text-right"
                      placeholder="כתובת מייל *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Topic Field */}
                  <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                    <select
                      name="topic"
                      id="form-field-field_22d8251"
                      className="w-full bg-transparent outline-none py-2 px-4 text-right"
                      value={formData.topic}
                      onChange={handleChange}
                    >
                      <option value="">על מה נדבר?</option>
                      <option value="אחר..">אחר..</option>
                      <option value="פיתוח ל-UC">פיתוח ל-UC</option>
                      <option value="קידום ברשתות החברתיות">
                        קידום ברשתות החברתיות
                      </option>
                      <option value="קידום אתרים אורגני (SEO)">
                        קידום אתרים אורגני (SEO)
                      </option>
                      <option value="עיצוב אתרים UI/UX">עיצוב אתרים UI/UX</option>
                      <option value="פיתוח אתר ו/או אפליקציה">
                        פיתוח אתר ו/או אפליקציה
                      </option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="flex shrink self-stretch flex-wrap items-end justify-end px-[5px] mb-[10px] relative w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
                    <button
                      type="submit"
                      className="flex justify-center bg-yellow-500 px-6 rounded min-h-[40px] max-md:px-5"
                    >
                      <span className="self-stretch my-auto">צור פניה חדשה</span>
                    </button>
                  </div>

                  {/* Display Success or Error Message */}
                  {responseMessage && (
                    <p className="text-green-500">{responseMessage}</p>
                  )}
                  {error && <p className="text-red-500">{error}</p>}
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OurWay;
