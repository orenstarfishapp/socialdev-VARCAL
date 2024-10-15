import React from "react";
import HeroBg from "../../assets/images/Background.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[372px] w-full text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HeroBg}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#300034]/70 to-[#300034]/70"></div>
        </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <p className="text-sm sm:text-base text-zinc-300 tracking-wider uppercase animate-fade-in-down">
          אודותינו/דף הבית
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
          אודותינו
        </h1>
        <p className="text-lg sm:text-xl text-zinc-100 max-w-2xl mx-auto animate-fade-in">
          גלה את הסיפור שלנו ואת המחויבות שלנו לעסקים קטנים ובינוניים
        </p>
        <button className="mt-8 px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up">
          קרא עוד מידע
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

<style>
{`
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .animate-fade-in-down {
    animation: fade-in-down 0.5s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out;
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`}
</style>
