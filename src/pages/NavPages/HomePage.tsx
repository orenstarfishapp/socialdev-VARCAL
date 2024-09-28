import React from "react";
import Hero from "../../components/HomePage/Hero";

import ContactForm from "../../components/HomePage/ContactForm";
import ServiceCards from "../../components/HomePage/ServiceCards/ServiceCards";
import FeatureCards from "../../components/HomePage/ServiceCards/FeatureCards/FeatureCards";
//import ContactSection from "../../components/HomePage/ContactSection/ContactSection";
import ServiceShowcase from "../../components/HomePage/ServiceShowcase";
import ServiceTitle from "../../components/HomePage/ServiceTitle";
import Services from "../../components/HomePage/ContactForm/Services";
// import HebrewTyping from "../../components/HebrewTyping";

const HomePage: React.FC = () => {
  return (
    <>
        <Hero />
      {/* <HebrewTyping/> */}
      <Services />
      <ServiceTitle />
      <ServiceCards />
      <FeatureCards />
      <ServiceShowcase /> 
      <ContactForm />
      <div className="flex flex-nowrap mx-auto w-full px-[10px]">
        <div className=" flex py-[10px] min-w-full"></div>
      </div>
    </>
  );
};

export default HomePage;
