import React from "react";
import Hero from "../../components/HomePage/Hero";

import ContactForm from "../../components/HomePage/ContactForm";
import ServiceCards from "../../components/HomePage/ServiceCards/ServiceCards";
import FeatureCards from "../../components/HomePage/ServiceCards/FeatureCards/FeatureCards";
import ContactSection from "../../components/HomePage/ContactSection/ContactSection";
import ServiceTitle from "../../components/HomePage/ServiceTitle";
import Services from "../../components/HomePage/ContactForm/Services";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <ServiceTitle />
      <ServiceCards />
      <FeatureCards />
      <ContactSection />
      <ContactForm />
      <div className="flex flex-nowrap mx-auto w-full px-[10px]">
        <div className=" flex py-[10px] min-w-full"></div>
      </div>
    </>
  );
};

export default HomePage;
