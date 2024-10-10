import React from "react";
import HeroSection from "../../components/OurWay/HeroSection";
import ContactForm from "../../components/Portfolio/ContactForm";
import WebServiceSection from "../../components/OurWay/WebServiceSection";
import ContentServiceSection from "../../components/OurWay/ContentServiceSection";
import BuildingLinkSection from "../../components/OurWay/BuildingLinkSection";
import StarSection from "../../components/OurWay/StarSection";

const OurWay: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WebServiceSection />
      <ContentServiceSection />
      <BuildingLinkSection />
      <StarSection />
      <div className=" py-[50px] pl-[50px] flex justify-center">
        <div className="w-3/5 flex justify-center">
        <ContactForm />

        </div>
      </div>
    </>
  );
};

export default OurWay;
