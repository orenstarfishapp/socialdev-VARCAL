import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioPicture from "../../assets/images/screencapture-yoniyosha-co-il-2023-07-27-14_08_16-1.png";
import ExplorerImage from "../../assets/images/explorer_gaEmeYI7Ic.png";
import SallonImage from "../../assets/images/sallonmary_portfolio.png";
import BarberImage from "../../assets/images/image_2024_10_11T14_09_58_211Z.png";
import { ArrowLeft, CheckCircle2, Globe, Palette, Users } from "lucide-react";

interface PortfolioData {
  id: number;
  name: string;
  title: string;
  url: string;
  imageSrc: string;
  description: string;
  services: Array<{
    text: string;
    icon: 'design' | 'web' | 'users' | 'seo';
  }>;
  completionDate: string;
  category: string;
}

const portfolioItems: PortfolioData[] = [
  {
    id: 1,
    name: "יונתן יהושוע",
    title: "בפסיכולוגיה,לוגותרפיסט",
    url: "https://yoniyosha.co.il/",
    imageSrc: PortfolioPicture,
    description: "פיתוח אתר תדמית מקצועי עם דגש על חווית משתמש ומיתוג אישי",
    category: "אתר תדמית",
    completionDate: "",
    services: [
      { text: "עיצוב UI/UX מותאם אישית", icon: 'design' },
      { text: "אופטימיזציה למנועי חיפוש", icon: 'seo' },
      { text: "ממשק ניהול תוכן מתקדם", icon: 'web' },
      { text: "התאמה למובייל", icon: 'users' }
    ]
  },
  {
    id: 2,
    name: "דניאל ברבר",
    title: "עיצוב שיער",
    url: "https://danielbarber.co.il",
    imageSrc: BarberImage,
    description: "בניית אתר מקצועי למספרה כולל מערכת ניהול תורים והצגת תיק עבודות",
    category: "אתר עסקי",
    completionDate: "",
    services: [
      { text: "מערכת הזמנת תורים", icon: 'web' },
      { text: "גלריית עבודות דינמית", icon: 'design' },
      { text: "אינטגרציה עם רשתות חברתיות", icon: 'users' },
      { text: "SEO מתקדם", icon: 'seo' }
    ]
  },
];

const getIcon = (type: string) => {
  switch(type) {
    case 'design':
      return <Palette className="h-5 w-5" />;
    case 'web':
      return <Globe className="h-5 w-5" />;
    case 'users':
      return <Users className="h-5 w-5" />;
    case 'seo':
      return <CheckCircle2 className="h-5 w-5" />;
    default:
      return null;
  }
};

const Portfolio: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            תיק עבודות
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            הצצה לפרויקטים נבחרים שלנו - כל פרויקט מותאם אישית לצרכי הלקוח ומשלב טכנולוגיות מתקדמות
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 group hover:border-yellow-400/50 transition-all duration-500"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <PortfolioItem
                      name={item.name}
                      title={item.title}
                      imageSrc={item.imageSrc}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {item.completionDate}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    {item.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <span className="text-yellow-400">
                          {getIcon(service.icon)}
                        </span>
                        <span className="text-sm">{service.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center justify-between text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      <span className="font-medium">צפה בפרויקט</span>
                      <ArrowLeft className="w-5 h-5 transform -rotate-180 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            <span>רוצה גם? בוא נדבר</span>
            <ArrowLeft className="w-5 h-5 transform -rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;