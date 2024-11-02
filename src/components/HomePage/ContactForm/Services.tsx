import React from "react";
import { Computer, Search, Smartphone } from "lucide-react";

interface Service {
  title: string;
  description: string[];
  icon: React.ReactNode;
  iconBgColor: string;
}

const services: Service[] = [
  {
    title: "פיתוח אתרים",
    description: [
      "בניית אתרים מותאמים אישית עם",
      "טכנולוגיות מתקדמות",
      "עיצוב מתואם אישית",
      "חוויות משתמש מתקדמת",
      "המרות למכירות"
    ],
    icon: <Computer className="w-8 h-8 text-amber-500" />,
    iconBgColor: "bg-amber-100"
  },
  {
    title: "שיווק דיגיטלי",
    description: [
      "אסטרטגיות שיווק מתקדמות ברשתות",
      "החברתיות",
      "ניהול רשתות חברתיות",
      "קמפיינים ממומנים",
      "אופטימיזציה מתמדת"
    ],
    icon: <Smartphone className="w-8 h-8 text-amber-500" />,
    iconBgColor: "bg-amber-100"
  },
  {
    title: "קידום אתרים",
    description: [
      "שיפור הדירוג שלך במנוע החיפוש",
      "מחקר מילות מפתח",
      "אופטימיזציית תוכן",
      "בניית קישורים"
    ],
    icon: <Search className="w-8 h-8 text-amber-500" />,
    iconBgColor: "bg-amber-100"
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex flex-col items-center">
      <div className={`${service.iconBgColor} p-4 rounded-full mb-6 transition-transform duration-300 hover:scale-110`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-amber-500 mb-6 hover:text-amber-600 transition-colors duration-300">
        {service.title}
      </h3>
      <ul className="space-y-3 text-right w-full">
        {service.description.map((item, index) => (
          <li key={index} className="text-gray-600 hover:text-gray-800 transition-colors duration-200 text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-amber-500 hover:text-amber-600 transition-colors duration-300">
            השירותים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            פתרונות דיגיטליים מקצועיים לעסקים מתקדמים
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;