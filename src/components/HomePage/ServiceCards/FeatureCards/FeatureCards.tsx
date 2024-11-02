import React from "react";
import ServiceCard from "../ServiceCard";

interface FeatureProps {
  svgIcon: React.ReactNode;
  url: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ svgIcon, url, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group m-4">
    <div className="flex flex-col items-center text-center">
      <div className="bg-amber-100 p-4 rounded-full mb-6 w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 group-hover:bg-purple-600">
        <div className="w-12 h-12 text-purple-600 group-hover:text-white">
          {svgIcon}
        </div>
      </div>
      <div className="mb-3">
        <h4 className="text-lg font-medium text-purple-600 mb-1">{url}</h4>
        <h3 className="text-2xl font-bold text-amber-500 mb-4 hover:text-amber-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  </div>
);

const featureData = [
  {
    url: "עיצוב אפליקציות ",
    svgIcon: (
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:fill-white"
          d="M50.1465 43.5325L40.4102 33.7961C39.9707 33.3567 39.375 33.1125 38.75 33.1125H37.1582C39.8535 29.6653 41.4551 25.3293 41.4551 20.6125C41.4551 9.39185 32.3633 0.300049 21.1426 0.300049C9.92188 0.300049 0.830078 9.39185 0.830078 20.6125C0.830078 31.8333 9.92188 40.925 21.1426 40.925C25.8594 40.925 30.1953 39.3235 33.6426 36.6282V38.22C33.6426 38.845 33.8867 39.4407 34.3262 39.8801L44.0625 49.6165C44.9805 50.5344 46.4648 50.5344 47.373 49.6165L50.1367 46.8528C51.0547 45.9348 51.0547 44.4504 50.1465 43.5325ZM21.1426 33.1125C14.2383 33.1125 8.64258 27.5266 8.64258 20.6125C8.64258 13.7083 14.2285 8.11255 21.1426 8.11255C28.0469 8.11255 33.6426 13.6985 33.6426 20.6125C33.6426 27.5168 28.0566 33.1125 21.1426 33.1125Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "קידום ברשתות החברתיות בעזרת בינה מלאוכתית",
    description:
      "קידום ברשתות החברתיות הוא כלי עוצמתי וחדשני שיכול להביא לתוצאות עצומות. אם זאת יש לזכור קידום מוצרים ושירותים צריך להיעשות בצורה אתית והוגנת",
  },
  {
    url: "קידום ב-Facebook",
    svgIcon: (
      <svg
        width="45"
        height="51"
        viewBox="0 0 45 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:fill-white"
          d="M34.6699 31.55C32.4621 31.55 30.4329 32.3136 28.8311 33.5906L18.8227 27.3353C19.119 25.9946 19.119 24.6054 18.8227 23.2647L28.8311 17.0094C30.4329 18.2865 32.4621 19.05 34.6699 19.05C39.8476 19.05 44.0449 14.8527 44.0449 9.67505C44.0449 4.49741 39.8476 0.300049 34.6699 0.300049C29.4923 0.300049 25.2949 4.49741 25.2949 9.67505C25.2949 10.3741 25.3721 11.0549 25.5172 11.7103L15.5088 17.9656C13.9069 16.6886 11.8777 15.925 9.66992 15.925C4.49229 15.925 0.294922 20.1224 0.294922 25.3C0.294922 30.4777 4.49229 34.675 9.66992 34.675C11.8777 34.675 13.9069 33.9115 15.5088 32.6345L25.5172 38.8898C25.3693 39.5581 25.2947 40.2406 25.2949 40.925C25.2949 46.1027 29.4923 50.3 34.6699 50.3C39.8476 50.3 44.0449 46.1027 44.0449 40.925C44.0449 35.7474 39.8476 31.55 34.6699 31.55Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "קידום אתרים SEO בשנת 2023",
    description:
      "קידום אורגני במנועי חיפוש - עדיין הדרך הטובה ביותר לקדם אתר. יש להקפיד על תוכן איכותי וייחודי, קישורים פנימיים וחיצוניים איכותיים, מהירות טעינה מהירה של האתר ונגישות למכשירים ניידים",
  },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-amber-500 hover:text-amber-600 transition-colors duration-300">
            תכונות מתקדמות
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            פתרונות דיגיטליים חדשניים המותאמים לצרכי השוק המודרני
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              svgIcon={feature.svgIcon}
              url={feature.url}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;