import React from "react";

export default function ContentSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white text-right">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            שיווק פייסבוק - המפתח להצלחת המוצר
            <br />
            הדיגיטלי שלכם
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="space-y-12">
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            <div className="space-y-8 text-gray-700">
              <p className="text-xl leading-relaxed">
                עיצוב ממשק משתמש (UI) ועיצוב חווית משתמש (UX) הם חלק הכרחי בהצלחתו של כל מוצר דיגיטלי.
                בסופו של דבר, כל אתר, פורטל או אפליקציה מתוכננים קודם כל עבור המשתמשים.
              </p>
              <p className="text-xl leading-relaxed">
                אתם רוצים משתמשים חדשים שיחזרו למוצר שלכם שוב ושוב? אז אתם חייבים להבין אותם, וליצור
                מוצר שיהיה להם קל להימנע מכל רעש.
              </p>
              <p className="text-xl leading-relaxed">
                כדי להשיג זאת, חשוב להשתמש בכלים אוטומטיים שיעזרו לכם לנתח את התנהגות המשתמשים,
                להבין את הצרכים שלהם ולשפר את החוויה הכוללת. השוואה בין כלי אוטומציה שונים יכולה
                לעזור לכם לבחור את הכלי המתאים ביותר למוצר שלכם.
              </p>
            </div>
          </div>
        </div>

        {/* Marketing Types Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-yellow-500 leading-tight relative">
            <span className="relative">
              מה ההבדל בין פרסום ממומן לאורגני?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                פרסום ממומן
              </h3>
              <p className="text-gray-600 leading-relaxed">
                פרסום ממומן מאפשר להגיע לקהל יעד מדויק, לקבל תוצאות מהירות ולמדוד את ההצלחה של
                הקמפיין בצורה מדויקת.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                קידום אורגני
              </h3>
              <p className="text-gray-600 leading-relaxed">
                קידום אורגני בונה נוכחות לטווח ארוך, מייצר אמון ומאפשר בניית קהילה אותנטית סביב
                המותג שלכם.
              </p>
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-yellow-500 leading-tight relative">
            <span className="relative">
              עקרונות ליצירת נוכחות חזקה בפייסבוק
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-gray-100">
            {[
              { icon: "🎯", text: "התאימו את התוכן לקהל היעד" },
              { icon: "📅", text: "פרסמו באופן עקבי ושמרו על לוח זמנים" },
              { icon: "🎨", text: "הקפידו על איכות התמונות והסרטונים" },
              { icon: "⚙️", text: "השתמשו בכלי אוטומציה לניהול ותזמון פוסטים" },
              { icon: "📊", text: "עקבו ונתחו נתונים לשיפור מתמיד" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 space-x-reverse hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-xl text-gray-700">
                  {`${index + 1}. ${item.text}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-white">
            מוכנים להגדיל את הנוכחות הדיגיטלית שלכם?
          </h2>
          <p className="text-2xl mb-8 text-white">
            המומחים שלנו יבנו עבורכם אסטרטגיית שיווק מקיפה בפייסבוק
          </p>
          <button className="bg-white text-yellow-500 text-xl font-bold py-4 px-10 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            צרו קשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
}