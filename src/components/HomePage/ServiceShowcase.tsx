import React, { useState } from 'react';
import { Check, Zap, Globe, Share2 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
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

interface PricingPlanProps {
  title: string;
  price: number;
  features: string[];
  icon: React.ComponentType<{ className?: string }>; // Allow className as a prop
  color: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ title, price, features, icon: Icon, color }) => (
  <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 xl:p-8 ${color}`}>
    <div className="flex justify-center mb-4">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="mb-4 text-2xl font-bold">{title}</h3>
    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">₪{price}</span>
      <span className="text-gray-500">/חודש</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-right">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="mt-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white transition-colors duration-300">
      בחר תוכנית
    </button>
  </div>
);


const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "חבילת פיתוח אתרים",
      price: 400,
      features: [
        "בניית אתר מותאם אישית",
        "עיצוב רספונסיבי",
        "אופטימיזציה ל-SEO בסיסי",
        "תמיכה טכנית"
      ],
      icon: Globe,
      color: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      title: "סושיאל פלוס קידום אתרים",
      price: 600,
      features: [
        "ניהול רשתות חברתיות",
        "קידום אתר וקישורים",
        "יצירת תוכן שבועי",
        "ניתוח ביצועים",
        "קידום ממומן בסיסי"
      ],
      icon: Share2,
      color: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      title: "פרימיום אול-אין-וואן",
      price: 800,
      features: [
        "כל התכונות של החבילות הקודמות",
        "אסטרטגיית שיווק דיגיטלי מקיפה",
        "קמפיינים ממומנים מתקדמים",
        "אופטימיזציה מתמדת",
        "דוחות ביצועים שבועיים"
      ],
      icon: Zap,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100"
    }
  ];

  return (
    <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">תוכניות קידום ופיתוח אתרים</h2>
        <p className="mb-5 font-light text-gray-600 sm:text-xl">בחר את התוכנית המושלמת להצלחת העסק הדיגיטלי שלך</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

const CombinedComponent: React.FC = () => {
  return (
    <div>
      <ServiceShowcase />
      <PricingPlans />
    </div>
  );
};

export default CombinedComponent;
