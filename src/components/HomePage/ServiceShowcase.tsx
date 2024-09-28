import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardStyles = {
    card: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
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
    <div style={cardStyles.card}>
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
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    socialLink: {
      textDecoration: 'none',
      color: '#007bff',
      fontSize: '1.1rem',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <section style={styles.showcaseContainer}>
      <h2 style={styles.heading}>השירותים שלנו</h2>
      
      <div style={styles.serviceGrid}>
        <ServiceCard
          icon="🎥"
          title="הסרטונים שלי"
          description="צפו בתוכן וידאו מקצועי ומרתק שיעשיר את הידע שלכם"
        />
        <ServiceCard
          icon="📸"
          title="אינסטגרם"
          description="תמונות וסטוריז מעוררי השראה שיעצימו את הנוכחות שלכם ברשת"
        />
        <ServiceCard
          icon="🔍"
          title="קידום אתרים"
          description="SEO מתקדם להגדלת החשיפה ולהובלת העסק שלכם לפסגה"
        />
        <ServiceCard
          icon="⭐"
          title="ביקורות"
          description="גלו מה לקוחות מרוצים אומרים על השירותים שלנו"
        />
      </div>
      
      <div style={styles.socialLinks}>
        <a href="#" style={styles.socialLink}>YouTube</a>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>Facebook</a>
      </div>
    </section>
  );
};

export default ServiceShowcase;