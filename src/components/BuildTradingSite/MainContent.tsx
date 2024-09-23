import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-[10px] w-full text-base leading-loose text-right min-h-[490px] text-neutral-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 max-w-[1140px] gap-[20px] my-0 mx-auto py-[10px] w-full">
        <div className="mt-[50px]">
          <div>
            <h2 className=" text-[#F7BA00] font-bold font-rubik text-5xl">
              בניית חנות בשנת 2023 אך אני עושה את זה?
            </h2>
          </div>
        </div>
        <div className="font-rubik font-normal text-2xl text-[#7A7A7A]">
          <div className=" block">
            <p className="mb-[38.4px]">
              בניית חנות מקוונת בשנת 2023 היא רעיון מצוין, כאן כמה טיפים כיצד
              לעשות זאת בהצלחה:
            </p>
            <div>
              <ul
                className=" list-disc leading-[2em]"
                style={{ padding: "revert" }}
              >
                <li>
                  <p>
                    בחר פלטפורמה מתאימה – פלטפורמות מובילות כמו Shopify,
                    WooCommerce או BigCommerce מציעות פתרונות שלמים לבניית חנות
                    אונליין. הן קלות לשימוש גם ללא ידע קודם.
                  </p>
                </li>
                <li>
                  <p>
                    הקפד על עיצוב אתר נקי ומקצועי – עיצוב מודרני ונקי משדר
                    אמינות. השקע בעיצוב ממשק משתמש פשוט וחווית משתמש טובה.
                  </p>
                </li>
                <li>
                  <p>
                    הצג את המוצרים בצורה אטרקטיבית – תמונות איכותיות, תיאורי
                    מוצר מפורטים, מגוון אפשרויות מיון וסינון.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    שלב מגוון אמצעי תשלום – אפשר תשלום בכרטיס אשראי, פייפאל, ביט
                    ועוד.
                  </p>
                </li>
                <li>
                  <p>
                    הקפד על מדיניות החזרות ומשלוחים ברורה – זה מגביר את אמון
                    הלקוחות.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div>
            <h2 className=" text-[#F7BA00] font-bold font-rubik text-5xl">
              ההבדל בין אתר מסחר שהוקם בקוד נקי לעומת מערכת לניהול תוכן
            </h2>
          </div>
        </div>
        <div className="font-rubik font-normal text-2xl text-[#7A7A7A]">
          <div className=" block">
            <p className="mb-[38.4px]">
              ישנם מספר הבדלים עיקריים בין אתר מסחרי שנבנה ישירות בקוד לבין אתר
              המבוסס על מערכת לניהול תוכן (CMS):
            </p>
            <p className="mb-[38.4px]">אתר בנוי בקוד נקי:</p>
            <div>
              <ul
                className=" list-disc leading-[2em]"
                style={{ padding: "revert" }}
              >
                <li>
                  <p>
                    מאפשר שליטה מוחלטת על ההיבטים הטכניים ואפשרויות התאמה אישית
                    מלאות.
                  </p>
                </li>
                <li>
                  <p>
                    הקפד על עיצוב אתר נקי ומקצועי – עיצוב מודרני ונקי משדר
                    אמינות. השקע בעיצוב ממשק משתמש פשוט וחווית משתמש טובה.
                  </p>
                </li>
                <li>
                  <p>תהליך בנייה ארוך ומורכב יותר.</p>
                </li>
                <li>
                  <p>קשה יותר לעדכן ולתחזק את האתר לאורך זמן.</p>
                </li>
              </ul>
            </div>
            <p className="mb-[38.4px]">אתר CMS:</p>
            <div>
              <ul
                className=" list-disc leading-[2em]"
                style={{ padding: "revert" }}
              >
                <li>
                  <p>
                    מאפשר בנייה ועריכה של תכנים בקלות דרך ממשק פשוט ללא צורך
                    בידע תכנות.
                  </p>
                </li>
                <li>
                  <p>קל ופשוט יותר לעדכן תכנים באתר עם פאנל ניהול.</p>
                </li>
                <li>
                  <p>קיימות מגבלות עיצוב ופונקציונליות בהתאם לתבנית נבחרת.</p>
                </li>
                <li>
                  <p>תמיכה ועדכונים שוטפים למערכת על ידי הספק.</p>
                </li>
                <li>
                  <p>זמינות תוספים ופתרונות מוכנים להרחבת אפשרויות האתר.</p>
                </li>
              </ul>
            </div>
            <p className="mb-[38.4px]">
              באופן כללי, אתר מסחרי גדול ומורכב יותר יוטה לקוד נקי, בעוד CMS
              מתאים יותר לאתרים קטנים ופשוטים יחסית.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
