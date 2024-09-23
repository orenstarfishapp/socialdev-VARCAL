import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  {
    title: "קידום אתרים ודיגיטל",
    items: [
      { title: "קידום ב-Facebook", url: "קידום ב-Facebook" },
      { title: "קידום ב-Instagram", url: "קידום ב-Instagram" },
      { title: "קידום ב-Tik Tok", url: "קידום ב-Tik Tok" },
    ],
  },
  {
    title: "עיצוב אתרים",
    items: [
      { title: "עיצוב אתרים", url: "עיצוב אתרים" },
      { title: "עיצוב UI/UX", url: "עיצוב UI/UX" },
      { title: "עיצוב ממשק משתמש", url: "עיצוב ממשק משתמש" },
      { title: "עיצוב אפליקציות", url: "עיצוב אפליקציות" },
    ],
  },
  {
    title: "בניית אתרים",
    items: [
      { title: "בניית אתרים", url: "/בניית אתרים" },
      { title: "בניית אתר תדמית", url: "/בניית אתר תדמית" },
      { title: "בניית אתר מסחר", url: "בניית אתר מסחר" },
      { title: "בניית אתר פורטל", url: "בניית אתר פורטל" },
    ],
  },
];

const FooterLinks: React.FC = () => {
  return <FooterSection columns={footerData} />;
};

export default FooterLinks;
