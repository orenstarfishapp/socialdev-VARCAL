import React from "react";
import FastImg from "../../assets/images/Blue-Yellow-3D-Happy-World-Wide-Web-Instagram-Story-768x1365.png.png";
import ContactForm from "../Portfolio/ContactForm";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-right">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F7BA00] font-rubik leading-tight">
            עיצוב UI/UX - המפתח להצלחת המוצר הדיגיטלי שלכם
          </h2>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p>
              עיצוב ממשק משתמש (UI) ועיצוב חווית משתמש (UX) הם חלק מרכזי בהצלחתו של כל מוצר דיגיטלי. מדוע? כי בסופו של דבר, כל אתר, פורטל או אפליקציה מתוכננים קודם כל עבור המשתמשים.
            </p>
            <p>
              אתם רוצים משתמשים מרוצים שיחזרו למוצר שלכם שוב ושוב? אז אתם חייבים להבין אותם, וליצור מוצר שיגרום להם ליהנות מכל רגע.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#F7BA00] font-rubik">
            מה ההבדל בין UX ל-UI?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-[#F7BA00] mb-4">עיצוב UI</h4>
              <p className="text-[#4A5568]">
                User Interface או בקיצור UI, הוא כינוי לממשק החשוף לעיניו של המשתמש. עיצוב UI מתמקד בחוויה הגרפית שהמוצר מספק, וכולל את הצבעוניות, הטיפוגרפיה, הניגודיות ושאר האלמנטים העיצוביים.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-[#F7BA00] mb-4">עיצוב UX</h4>
              <p className="text-[#4A5568]">
                User Experience או בקיצור UX, הוא כינוי לחוויה הכוללת שחווה המשתמש בעת שימושו במוצר. UX מתמקד בתכונות שגורמות למוצר להיות שימושי ופשוט להבנה ותפעול.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#F7BA00] font-rubik">
            עקרונות ליצירת חווית משתמש מעולה
          </h3>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <ol className="space-y-6 list-decimal pr-6">
              <li>
                <h4 className="text-2xl font-semibold text-[#1e293b]">התאימו את המוצר לקהל היעד</h4>
                <p>הגדירו פרסונות שונות, חשבו על גיל המשתמשים, מגדר, תחומי עיסוק וצרכים ספציפיים.</p>
              </li>
              <li>
                <h4 className="text-2xl font-semibold text-[#1e293b]">אל תניחו הנחות על המשתמשים</h4>
                <p>הנגישו את המוצר בצורה ברורה ופשוטה, כמו מארח שמסביר איך הדברים עובדים.</p>
              </li>
              <li>
                <h4 className="text-2xl font-semibold text-[#1e293b]">תחשבו על הביצועים</h4>
                <p>שלבו בין נראות מרשימה לביצועים טכניים טובים, תוך שיתוף פעולה בין מעצבים למתכנתים.</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#F7BA00] font-rubik">
            מי צריך אפיון פרוייקט?
          </h3>
          <div className="text-xl text-[#4A5568] space-y-6 font-rubik leading-relaxed">
            <p>
              עיצוב ממשק משתמש ועיצוב חווית משתמש מהווים גורם מרכזי בהצלחת כל מוצר. מתן דגש על שני אלה, הוא מה שיתן למוצר שלכם את הערך המוסף ויצור את ההבדל היחסי בין המוצר שלכם למתחרים.
            </p>
            <p>
              אנחנו מתמחים בעיצוב UI/UX מוכוון משתמשים וביצועים. באמצעות תהליך מדויק ויצירתי, נפתח מוצר שיגרום למשתמשים שלכם להתמכר. מוכנים להתחיל?
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-[#F7BA00] font-rubik">צרו קשר</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;