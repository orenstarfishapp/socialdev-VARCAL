import React from "react";
import ServiceCard from "../ServiceSection/ServiceCard";
import OverviewImg1 from "../../../assets/images/overview-icon1.png.png";
import OverviewImg2 from "../../../assets/images/overview-icon2.png.png";
import OverviewImg3 from "../../../assets/images/overview-icon3.png.png";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

const services: Service[] = [
  {
    title: "קידום בפייסבוק ויצירת תוכן",
    description:
      "אנו נדאג לקידום ממוקד בפייסבוק שימשוך את קהל היעד שלך ויביא לתוצאות מיטביות. ניצור עבורך תוכן איכותי ומקצועי, נבצע ניהול קמפיינים, ונבנה עבורך אסטרטגיות תוכן שמותאמות לצרכים העסקיים שלך. כל זה בכדי להבטיח שהלקוחות הפוטנציאליים שלך יוכלו להתחבר למותג שלך ולהפוך ללקוחות נאמנים.",
    imageUrl: OverviewImg3,
    backgroundColor: "bg-amber-100",
  },
  {
    title: "קידום באינסטגרם",
    description:
      "קידום העסק שלך באינסטגרם באמצעות אסטרטגיות ממוקדות שיביאו לחשיפה רחבה יותר. ניצור עבורך פוסטים איכותיים ומעוררי עניין, נבצע אופטימיזציה למודעות וננהל את הקמפיינים שלך כדי להבטיח שהמותג שלך יזכה להכרה וירחיב את קהל הלקוחות. הקידום שלנו באינסטגרם מותאם במיוחד כדי למשוך את תשומת הלב של הקהל הנכון ולהוביל לתוצאות מצוינות.",
    imageUrl: OverviewImg2,
    backgroundColor: "bg-rose-200",
  },
  {
    title: "בניית אתר אינטרנט",
    description:
      "אנו מתמחים בבניית אתרים מותאמים אישית, שמותאמים במיוחד לצרכים הייחודיים של העסק שלך. האתר שנבנה עבורך יכלול עיצוב מקצועי, חוויית משתמש מעולה, ואופטימיזציה כדי להבטיח שהלקוחות ימצאו אותך בקלות. עם אתר אינטרנט יעיל, העסק שלך יזכה לחשיפה גבוהה יותר ויגדיל את ההמרות.",
    imageUrl: OverviewImg1,
    backgroundColor: "bg-[#D7CCD8]",
  },
];

const Services: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-16 w-full text-center bg-gray-50">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-sky-400 mb-4">
          השותף הדיגיטלי בשירות המלא שלך
        </h2>
        <p className="text-lg text-neutral-500 mb-12">
          לא משנה מה אתה צריך, דאגנו לך:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="col-span-1">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;