import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            בניית אתר תדמית חדש - האם זה עדיין שווה?
          </h2>
          <div className="text-xl text-gray-700 space-y-6 font-rubik leading-relaxed">
            <p className="bg-white p-6 rounded-lg shadow-md">
              בשנת 2023, נוכחות באינטרנט היא הכרחית להצלחתו של כל עסק. עסקים חייבים להשקיע באתר אינטרנט מקצועי ואטרקטיבי על מנת להציג את עצמם באופן מיטבי בפני לקוחות פוטנציאליים.
            </p>
            <p className="bg-white p-6 rounded-lg shadow-md">
              אתר אינטרנט מהווה את החזית הדיגיטלית של העסק – המקום בו לקוחות לומדים על המוצרים והשירותים, בוחנים את המותג והמוניטין ומתרשמים מהמקצועיות. עסק ללא נוכחות דיגיטלית עלול להיתפס כלא רלוונטי או לא אמין.
            </p>
            <p className="bg-white p-6 rounded-lg shadow-md">
              עם זאת, אין צורך באסטרטגיות שיווק מורכבות ויקרות על מנת לבנות אתר איכותי. אתר תדמית פשוט וממוקד, המציג בבהירות את תחומי העיסוק והערכים של העסק, יכול לשמש ככרטיס הביקור הדיגיטלי של העסק ולהפוך אותו לנגיש ורלוונטי עבור הלקוחות.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            האם זה לא מאוחר מידי לבנות אתר בשנת 2023?
          </h2>
          <div className="text-xl text-gray-700 space-y-6 font-rubik leading-relaxed">
            <p className="bg-white p-6 rounded-lg shadow-md">
              לא, בהחלט לא מאוחר מידי לבנות אתר אינטרנט איכותי עבור העסק שלך בשנת 2023. למעשה, זו הזדמנות מצוינת ליצור נוכחות דיגיטלית חזקה עבור העסק שלך.
            </p>
            <p className="font-semibold text-2xl text-[#F7BA00]">הסיבות העיקריות שבניית אתר עדיין רלוונטית וחשובה:</p>
            <ul className="space-y-4">
              {[
                "יותר ויותר אנשים מחפשים מידע ורוכשים מוצרים ושירותים באופן מקוון. אם אין לך אתר, אתה מפספס הזדמנויות מכירה.",
                "אתר מקנה לעסק שלך לגיטימציה ונוכחות מקצועית. לקוחות פוטנציאליים רוצים לראות שיש לך אתר לפני שהם קונים ממך.",
                "אתר מאפשר לך להציג את המותג והמוצרים/שירותים שלך באופן הטוב ביותר, ולשלוט במסרים ובתכנים.",
                "אתר זמין 24/7 ומאפשר ללקוחות פוטנציאליים למצוא אותך וללמוד עליך בכל שעה.",
                "ניתן לשלב באתר כלים דיגיטליים כמו מכירות אונליין, צ'אט, ניהול לידים ועוד."
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md">
                  <span className="flex-shrink-0 w-6 h-6 text-green-500 mt-1 ml-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="bg-[#F7BA00] text-white p-6 rounded-lg shadow-md font-semibold text-2xl">
              אל תחמיץ את ההזדמנות לבסס את העסק שלך עם אתר איכותי ומקצועי ב-2023!
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800 font-rubik">
            לבנות אתר תדמית ומודרני - מה דרוש?
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F7BA00] font-rubik leading-tight">
            בניית אתר תדמית בשנת 2023
          </h2>
          <div className="text-xl text-gray-700 space-y-6 font-rubik leading-relaxed">
            <p className="bg-white p-6 rounded-lg shadow-md">
              גם עסקים ותיקים שעדיין אין להם נוכחות דיגיטלית צריכים לשקול בחיוב בניית אתר תדמית בשנת 2023. האתר יסייע להם להתחבר לקהל לקוחות צעיר ומודרני, לחזק את המותג ולהתחרות בהצלחה בעידן הדיגיטלי. זו הזדמנות טובה ליצור ערך מוסף ללקוחות ולהעלות את העסק לרמה הבאה.
            </p>
            <p className="font-semibold text-2xl text-[#F7BA00]">
              פלטפורמות מומלצות לבניית אתר תדמית מקצועי:
            </p>
            <ul className="space-y-4">
              {[
                { name: "Wix", desc: "פלטפורמה פופולרית וידידותית למשתמש המאפשרת בנייה קלה של אתרים יפים באמצעות תבניות וכלי גרירה ושחרור." },
                { name: "Squarespace", desc: "פלטפורמה מקצועית לבניית אתרים עם עיצובים ייחודיים ואלגנטיים. קלה לשימוש, מתאימה מאוד לאתרי תדמית." },
                { name: "Webflow", desc: "כלי חזק וגמיש המאפשר שליטה מלאה בעיצוב האתר ללא צורך בקוד. מתאים למשתמשים מתקדמים." },
                { name: "WordPress", desc: "פלטפורמה פופולרית וחזקה עם אלפי תבניות זמינות. מאפשרת הרבה שליטה והתאמה אישית." },
                { name: "Weebly", desc: "פתרון פשוט וזול לבניית אתר תדמית עם ממשק גרירה ושחרור." }
              ].map((item, index) => (
                <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-2xl text-[#F7BA00] mb-2">{item.name}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#" className="inline-flex items-center bg-[#F7BA00] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#E5AB00] transition-colors duration-300">
          למידע נוסף
          <span className="mr-2">←</span>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;