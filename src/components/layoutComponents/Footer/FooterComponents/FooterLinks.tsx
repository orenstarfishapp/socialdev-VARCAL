import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  {
    title: "קידום דיגיטלי - מדריכים מקצועיים לכל הפלטפורמות",
    items: [
      { title: "אסטרטגיות מתקדמות לקידום בפייסבוק", url: "קידום ב-Facebook" },
      { title: "אסטרטגיות מתקדמות לקידום באינסטגרם", url: "קידום ב-Instagram" },
      { title: "אסטרטגיות מנצחות לטיקטוק", url: "קידום ב-Tik Tok" },
    ],
  },
  {
    title: "עיצוב מותאם אישית לפרויקטים דיגיטליים",
    items: [
      { title: "פיתוח חווית משתמש מתקדמת", url: "עיצוב UIUX" },
      { title: "עיצוב ממשק משתמש מקצועי - פתרונות אינטראקטיביים", url: "עיצוב ממשק משתמש" },
      { title: "עיצוב אפליקציות מקצועי - מהרעיון למציאות", url: "עיצוב אפליקציות" },
    ],
  },
  {
    title: "בניית אתרים חדשניים - מהתכנון ועד העלייה לאוויר",
    items: [
      { title: "בניית אתרים חדשניים", url: "/בניית אתרים" },
      { title: "בניית אתר תדמית - מיתוג דיגיטלי מקצועי", url: "/בניית אתר תדמית" },
      { title: "בניית פלטפורמת מסחר דיגיטלית", url: "בניית אתר מסחר" },
      { title: "הקמת אתר מתקדם", url: "בניית אתר חדש" },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return <FooterSection columns={footerData} />;
};

export default FooterLinks;
