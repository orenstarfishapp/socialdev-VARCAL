import React from "react";

interface BulletPointsProps {}

const BulletPoints: React.FC<BulletPointsProps> = () => {
  const bulletPoints = [
    "החשיבות של אופטימיזציה אורגנית למנועי חיפוש.",
    "יצירת אסטרטגיה ארוכת טווח.",
    "רשתות חברתיות כחלק מהאסטרטגיה השיווקית.",
    "חשיבות העבודה הסינרגטית בכל הערוצים.",
    "גמישות והתאמות בהתאם לצרכים שלך.",
    "השגת תוצאות אופטימליות והצלחה מתמשכת.",
  ];

  return (
    <div className="flex flex-col grow shrink p-2.5 text-2xl text-right text-white min-w-[240px] w-[412px] max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-[503px] max-md:max-w-full">
        <div className="flex flex-col flex-1 py-24 pr-12 w-full max-md:pr-5 max-md:max-w-full">
          <h1 className="self-start pt-1.5 font-semibold leading-[56px] max-md:max-w-full">
            פיתוח אתר איכותי הוא רק הצעד הראשון.
          </h1>
          <ul className="flex flex-col self-end max-w-full leading-7 w-[329px]">
            {bulletPoints.map((point, index) => (
              <li key={index} className="w-full">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BulletPoints;
