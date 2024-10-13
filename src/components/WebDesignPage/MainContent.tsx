import React from "react";

const ExactDesignContentSection = () => {
  return (
    <div className="bg-[#1e293b] min-h-screen text-right font-sans">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          עיצוב ממשק משתמש
        </h1>
        
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-white" style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)"
          }}></div>
          
          <div className="relative z-10 bg-white text-[#1e293b] pt-40 pb-16 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fbbf24] mb-6">
              עיצוב ממשק משתמש - המפתח לחוויה דיגיטלית מושלמת
            </h2>
            <p className="text-lg mb-8">
              ממשק משתמש (באנגלית: User Interface או בקיצור UI) הוא החלק של המערכת המקשר בין המשתמש למערכת.
              זהו הכלי דרכו מתקיימת האינטראקציה בין האדם למכונה.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">מהו עיצוב ממשק משתמש?</h3>
            <p className="text-lg mb-8">
              עיצוב ממשק משתמש (UI) הוא תהליך יצירת הממשק החזותי של אתר או יישום. המטרה: ליצור חוויה נעימה
              למשתמש. זה כולל את כל האלמנטים הגרפיים והאינטראקטיביים שהמשתמש רואה ומשתמש בהם.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">חשיבות עיצוב UI איכותי:</h3>
            <ul className="list-disc list-inside text-lg space-y-2 mb-8">
              <li>מאפשר ניווט פשוט וידידותי</li>
              <li>מציג תכנים ופונקציונליות בצורה ברורה ונגישה</li>
              <li>יוצר חוויית שימוש אינטואיטיבית</li>
              <li>מעודד אינטראקציה עם המוצר</li>
              <li>משפר את המיקוד, הבהירות והיעילות של השימוש</li>
            </ul>
            
            <h3 className="text-2xl font-bold mb-4">עקרונות בעיצוב ממשק משתמש:</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExactDesignContentSection;