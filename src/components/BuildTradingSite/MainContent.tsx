import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            בניית חנות בשנת 2023 - כיצד לעשות זאת בהצלחה?
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p className="font-semibold">
              בניית חנות מקוונת בשנת 2023 היא רעיון מצוין. הנה כמה טיפים להצלחה:
            </p>
            <ul className="space-y-4 list-disc pr-6">
              <li>
                <strong>בחירת פלטפורמה מתאימה:</strong> Shopify, WooCommerce או BigCommerce מציעות פתרונות מקיפים וידידותיים למשתמש.
              </li>
              <li>
                <strong>עיצוב מקצועי ונקי:</strong> השקיעו בממשק משתמש פשוט וחווית משתמש מעולה לבניית אמון.
              </li>
              <li>
                <strong>הצגת מוצרים אטרקטיבית:</strong> תמונות איכותיות, תיאורים מפורטים, ואפשרויות מיון וסינון מתקדמות.
              </li>
              <li>
                <strong>מגוון אמצעי תשלום:</strong> הציעו אפשרויות כמו כרטיסי אשראי, פייפאל, ביט ועוד.
              </li>
              <li>
                <strong>מדיניות ברורה:</strong> הציגו מדיניות החזרות ומשלוחים שקופה להגברת אמון הלקוחות.
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            קוד נקי מול מערכת ניהול תוכן: מה ההבדל?
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p>
              ישנם הבדלים משמעותיים בין אתר מסחרי בנוי בקוד נקי לבין אתר המבוסס על מערכת ניהול תוכן (CMS):
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">אתר בקוד נקי</h3>
                <ul className="space-y-2 list-disc pr-6">
                  <li>שליטה מוחלטת והתאמה אישית</li>
                  <li>ביצועים מעולים</li>
                  <li>תהליך בנייה ארוך ומורכב</li>
                  <li>תחזוקה מאתגרת לאורך זמן</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#F7BA00] mb-4">אתר CMS</h3>
                <ul className="space-y-2 list-disc pr-6">
                  <li>ממשק ניהול פשוט ונוח</li>
                  <li>עדכוני תוכן קלים</li>
                  <li>מגבלות עיצוב ופונקציונליות</li>
                  <li>תמיכה ועדכונים שוטפים</li>
                  <li>זמינות תוספים ופתרונות מוכנים</li>
                </ul>
              </div>
            </div>
            
            <p className="font-semibold">
              לרוב, אתרי מסחר גדולים ומורכבים נוטים לבחור בקוד נקי, בעוד ש-CMS מתאים יותר לעסקים קטנים ובינוניים.
            </p>
          </div>
        </div>

        <div className="bg-[#F7BA00] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4 font-rubik">טיפ מקצועי:</h3>
          <p className="text-xl font-rubik">
            בחרו בפתרון המתאים לגודל העסק ולמשאבים שלכם. אם אתם מתחילים, CMS יכול להיות פתרון מצוין. ככל שתגדלו, תוכלו לשקול מעבר לפתרון מותאם אישית.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;