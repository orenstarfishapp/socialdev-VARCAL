import React, { useState } from 'react';
import { Check, Zap, Globe, Share2 } from 'lucide-react';

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
      borderRadius: '8px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: '#333',
    },
    description: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: 1.6,
    },
  };

  return (
    <div
      style={cardStyles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardStyles.icon}>{icon}</div>
      <h3 style={cardStyles.title}>{title}</h3>
      <p style={cardStyles.description}>{description}</p>
    </div>
  );
};

const ServiceShowcase: React.FC = () => {
  const styles = {
    showcaseContainer: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center' as const,
      direction: 'rtl' as const,
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#333',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginBottom: '40px',
    },
  };

  return (
    <section style={styles.showcaseContainer}>
      <h2 style={styles.heading}>השירותים שלנו</h2>
      <div style={styles.serviceGrid}>
        <ServiceCard icon="🎥" title="הסרטונים שלי" description="צפו בתוכן וידאו מקצועי ומרתק שיעשיר את הידע שלכם" />
        <ServiceCard icon="📸" title="אינסטגרם" description="תמונות וסטוריז מעוררי השראה שיעצימו את הנוכחות שלכם ברשת" />
        <ServiceCard icon="🔍" title="קידום אתרים" description="SEO מתקדם להגדלת החשיפה ולהובלת העסק שלכם לפסגה" />
        <ServiceCard icon="⭐" title="ביקורות" description="גלו מה לקוחות מרוצים אומרים על השירותים שלנו" />
      </div>
    </section>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, icon: Icon, color, accentColor, isPopular = false }) => (
  <div className={`flex flex-col p-8 mx-auto w-full max-w-lg text-right bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative ${color}`}>
    {isPopular && (
      <div className="absolute top-4 left-4">
        <span className="bg-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full">
          פופולרי
        </span>
      </div>
    )}
    <div className={`absolute top-0 right-0 w-20 h-20 ${accentColor} transform rotate-45 translate-x-8 -translate-y-8`}></div>
    <div className="relative">
      <div className="flex items-center mb-6">
        <Icon className={`w-10 h-10 ml-4 ${accentColor} p-2 rounded-full`} />
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex items-baseline mb-8">
        <span className="text-5xl font-extrabold text-gray-900">₪{price}</span>
        <span className="mr-2 text-xl text-gray-500">/חודש</span>
      </div>
      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`flex-shrink-0 w-6 h-6 ml-3 ${accentColor}`} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${accentColor.replace('text', 'bg')}`}>
        בחר תוכנית
      </button>
    </div>
  </div>
);

const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "חבילת קידום סוציאל",
      price: 500,
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
      price: 650,
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
      price: 899,
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
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