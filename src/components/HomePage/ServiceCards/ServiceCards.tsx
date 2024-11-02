import React from "react";

interface ServiceProps {
  svgIcon: React.ReactNode;
  url: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ svgIcon, url, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group m-4">
    <div className="flex flex-col items-center text-center">
      <div className="bg-amber-100 p-4 rounded-full mb-6 w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 group-hover:bg-purple-600">
        <div className="w-12 h-12">
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

const services = [
  {
    svgIcon: (
      <svg
        width="32"
        height="51"
        viewBox="0 0 32 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.9375 0.550049H5.0625C2.47461 0.550049 0.375 2.64966 0.375 5.23755V45.8625C0.375 48.4504 2.47461 50.55 5.0625 50.55H26.9375C29.5254 50.55 31.625 48.4504 31.625 45.8625V5.23755C31.625 2.64966 29.5254 0.550049 26.9375 0.550049ZM16 47.425C14.2715 47.425 12.875 46.0286 12.875 44.3C12.875 42.5715 14.2715 41.175 16 41.175C17.7285 41.175 19.125 42.5715 19.125 44.3C19.125 46.0286 17.7285 47.425 16 47.425ZM26.9375 36.8782C26.9375 37.5227 26.4102 38.05 25.7656 38.05H6.23438C5.58984 38.05 5.0625 37.5227 5.0625 36.8782V6.40942C5.0625 5.76489 5.58984 5.23755 6.23438 5.23755H25.7656C26.4102 5.23755 26.9375 5.76489 26.9375 6.40942V36.8782Z"
          fill="currentColor"
          className="group-hover:fill-white"
        />
      </svg>
    ),
    url: "עיצוב UIUX ",
    title: "UX/UI",
    description:
      "עיצוב ממשק משתמש לאתרים ואפליקציות תוך מתן דגש עיקרי וללא פשרות על חווית משתמש מירבית",
  },
  {
    svgIcon: (
      <svg
        width="44"
        height="51"
        viewBox="0 0 44 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.875 23.9875V33.3625C43.875 33.6637 43.8402 33.964 43.7712 34.2573L40.6462 47.5385C40.2311 49.303 38.6564 50.55 36.8438 50.55H16.5313C15.9151 50.55 15.3077 50.4043 14.7587 50.1247C14.2096 49.8451 13.7345 49.4396 13.3721 48.9414L0.872367 31.7539C-0.396481 30.0091 -0.0107388 27.5661 1.73389 26.2972C3.47871 25.0283 5.92178 25.4141 7.19063 27.1588L10.2813 31.4086V4.4563C10.2813 2.29897 12.0301 0.550049 14.1875 0.550049C16.3449 0.550049 18.0938 2.29897 18.0938 4.4563V23.9875H18.875V20.0813C18.875 17.924 20.6238 16.175 22.7813 16.175C24.9387 16.175 26.6875 17.924 26.6875 20.0813V23.9875H27.4688V21.6438C27.4688 19.4865 29.2176 17.7375 31.375 17.7375C33.5324 17.7375 35.2813 19.4865 35.2813 21.6438V23.9875H36.0625C36.0625 21.8302 37.8113 20.0813 39.9688 20.0813C42.1262 20.0813 43.875 21.8302 43.875 23.9875ZM18.875 31.8H18.0938V41.175H18.875V31.8ZM27.4688 31.8H26.6875V41.175H27.4688V31.8ZM36.0625 31.8H35.2813V41.175H36.0625V31.8Z"
          fill="currentColor"
          className="group-hover:fill-white"
        />
      </svg>
    ),
    url: "עיצוב אפליקציות ",
    title: "פיתוח אפליקציות",
    description:
      "פיתוח אפליקציות למובייל. אפליקציות שמשתמשים מבינים בעלות ממשק משתמש מדהים ונוח לשימוש",
  },
  {
    svgIcon: (
      <svg
        viewBox="0 0 50 41"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9242 20.9915C20.4125 21.4797 21.2039 21.4797 21.6922 20.9915L22.5758 20.1079C23.0641 19.6196 23.0641 18.8282 22.5758 18.3399L19.7852 15.55L22.575 12.7594C23.0633 12.2711 23.0633 11.4797 22.575 10.9915L21.6914 10.1079C21.2031 9.61958 20.4117 9.61958 19.9234 10.1079L15.3656 14.6657C14.8773 15.154 14.8773 15.9454 15.3656 16.4336L19.9242 20.9915ZM27.425 20.1086L28.3086 20.9922C28.7969 21.4805 29.5883 21.4805 30.0766 20.9922L34.6344 16.4344C35.1227 15.9461 35.1227 15.1547 34.6344 14.6665L30.0766 10.1086C29.5883 9.62036 28.7969 9.62036 28.3086 10.1086L27.425 10.9922C26.9367 11.4805 26.9367 12.2719 27.425 12.7602L30.2148 15.55L27.425 18.3407C26.9367 18.829 26.9367 19.6204 27.425 20.1086ZM48.75 33.05H29.8078C29.75 34.5977 28.6586 35.55 27.25 35.55H22.5C21.0398 35.55 19.9203 34.1852 19.9398 33.05H1.25C0.5625 33.05 0 33.6125 0 34.3V35.55C0 38.3 2.25 40.55 5 40.55H45C47.75 40.55 50 38.3 50 35.55V34.3C50 33.6125 49.4375 33.05 48.75 33.05ZM45 4.30005C45 2.23755 43.3125 0.550049 41.25 0.550049H8.75C6.6875 0.550049 5 2.23755 5 4.30005V30.55H45V4.30005ZM40 25.55H10V5.55005H40V25.55Z"
          fill="currentColor"
          className="group-hover:fill-white"
        />
      </svg>
    ),
    url: "בניית אתרים",
    title: "בניית אתרים",
    description:
      "בניית אתרים בהתאמה אישית תוך שימוש בטכנולוגיות המתקדמות ביותר וליווי אישי לאורך כל תהליכי הפיתוח",
  },
];

const ServiceCards: React.FC = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              svgIcon={service.svgIcon}
              url={service.url}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;