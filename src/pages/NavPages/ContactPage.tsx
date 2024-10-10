import React from "react";
import HeroSection from "../../components/ContactUs/HeroSection";
import ContactForm from "../../components/Portfolio/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <HeroSection />
          <div className="mt-[80px] mb-[100px] mx-auto">
            <div className="w-3/5 flex mx-auto">
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;
