import React, { useState } from 'react';
import { Check, Zap, Globe, Share2, Star, Crown, Shield, ChevronDown, Users, BadgeCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingPlanProps {
  title: string;
  price: number;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  accentColor: string;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    card: {
      backgroundColor: isHovered ? '#e0e0e0' : '#f8f9fa',
      borderRadius: '16px',
      padding: '30px',
      boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      border: '1px solid',
      borderColor: isHovered ? '#d1d5db' : 'transparent',
    },
    icon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    },
    title: {
      fontSize: '1.75rem',
      marginBottom: '15px',
      color: '#1f2937',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '1.1rem',
      color: '#4b5563',
      lineHeight: 1.7,
    },
  };

  return (
    <div
      style={cardStyles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-transparent opacity-20 transform rotate-45"></div>
      <div style={cardStyles.icon}>{icon}</div>
      <h3 style={cardStyles.title}>{title}</h3>
      <p style={cardStyles.description}>{description}</p>
    </div>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, icon: Icon, color, accentColor, isPopular = false }) => (
  <div className={`flex flex-col p-8 mx-auto w-full max-w-lg text-right bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative ${color} group`}>
    {/* Enhanced popular badge */}
    {isPopular && (
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <Crown className="w-4 h-4" />
          פופולרי
        </span>
      </div>
    )}
    
    {/* Enhanced background decoration */}
    <div className={`absolute top-0 right-0 w-32 h-32 ${accentColor} transform rotate-45 translate-x-8 -translate-y-8 opacity-10`}></div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative">
      {/* Enhanced header */}
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-xl ${accentColor.replace('text', 'bg')} bg-opacity-10 flex items-center justify-center mr-4`}>
          <Icon className={`w-6 h-6 ${accentColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Enhanced price display */}
      <div className="flex items-baseline mb-8">
        <span className="text-6xl font-extrabold text-gray-900 group-hover:scale-105 transition-transform duration-300">₪{price}</span>
        <span className="mr-2 text-xl text-gray-500">/חודש</span>
      </div>

      {/* Enhanced features list */}
      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center group/item">
            <div className={`w-6 h-6 rounded-full ${accentColor.replace('text', 'bg')} bg-opacity-10 flex items-center justify-center ml-3 group-hover/item:scale-110 transition-transform duration-300`}>
              <Check className={`w-4 h-4 ${accentColor}`} />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Enhanced CTA button */}
      <button 
        className={`w-full py-4 px-6 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${accentColor.replace('text', 'bg')} relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <span className="relative flex items-center justify-center gap-2">
          <span>בחר תוכנית</span>
          <BadgeCheck className="w-5 h-5" />
        </span>
      </button>
    </div>
  </div>
);

const ServiceShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced title section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-yellow-100 opacity-10 rounded-full blur-3xl transform animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-heebo mb-6 relative">
            השירותים שלנו
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-heebo">
            פתרונות דיגיטליים מתקדמים
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronDown className="mx-auto" size={32} />
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon="🎥" title="הסרטונים שלי" description="צפו בתוכן וידאו מקצועי ומרתק שיעשיר את הידע שלכם" />
          <ServiceCard icon="📸" title="אינסטגרם" description="תמונות וסטוריז מעוררי השראה שיעצימו את הנוכחות שלכם ברשת" />
          <ServiceCard icon="🔍" title="קידום אתרים" description="SEO מתקדם להגדלת החשיפה ולהובלת העסק שלכם לפסגה" />
          <ServiceCard icon="⭐" title="ביקורות" description="גלו מה לקוחות מרוצים אומרים על השירותים שלנו" />
        </div>
      </div>
    </section>
  );
};

const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "חבילת קידום סוציאל",
      price: 600,
      features: [
        "העלאת ועריכת שני פוסטים בשבוע",
        "סרטון אחד",
        "קידום רשת חברתית",
        "כלי ניהול מתקדמים",
        "תמיכה במייל"
      ],
      icon: Share2,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      accentColor: "text-blue-600",
      isPopular: false
    },
    {
      title: "חבילת קידום וWeb",
      price: 750,
      features: [
        "כל התכונות של החבילה הקודמת",
        "בניית אתר בטכנולוגיות חדשניות",
        "קידום חודשי",
        "אופטימיזציה",
        "תמיכה בצ'אט"
      ],
      icon: Globe,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      accentColor: "text-purple-600",
      isPopular: true
    },
    {
      title: "חבילת פרימיום",
      price: 1199,
      features: [
        "כל התכונות של החבילות הקודמות",
        "תמיכה 24/7",
        "דוחות חודשיים",
        "מידע מתקדם",
        "ניתוח עסקי מקיף"
      ],
      icon: Zap,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      accentColor: "text-yellow-600",
      isPopular: false
    }
  ];

  return (
    <section dir="rtl" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-light text-gray-600 block mb-4">
            תוכניות במחירים אטרקטיביים
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-rubik leading-tight relative inline-block">
            תוכניות קידום ופיתוח
            <div className="absolute -bottom-2 right-0 w-full h-2 bg-yellow-200 opacity-30"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            בחר את התוכנית המושלמת להצלחת העסק הדיגיטלי שלך
          </p>
        </div>
        
        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Shield, text: "אבטחה מלאה" },
            { icon: Users, text: "+10 לקוחות מרוצים" },
            { icon: Star, text: "דירוג 4.9 מתוך 5" },
            { icon: BadgeCheck, text: "שירות מקצועי" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm">
              <item.icon className="w-8 h-8 text-yellow-500 mb-3" />
              <span className="text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CombinedComponent: React.FC = () => {
  return (
    <div className="bg-white">
      <ServiceShowcase />
      <PricingPlans />
    </div>
  );
};

export default CombinedComponent;