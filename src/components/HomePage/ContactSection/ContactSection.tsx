import React from "react";
import ContactForm from "./ContactForm";
import BulletPoints from "./BulletPoints";
import ContactSectionIcon from "../../../assets/images/contact-settion-logo.png";

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 w-full bg-[#19212A] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 mx-auto pl-44 py-[50px] max-w-full h-full w-[1140px] max-md:pl-5">
        <div className="flex flex-col grow shrink p-2.5 min-w-[240px] w-[363px] max-md:max-w-full">
          <h2 className="text-xs font-light leading-7 text-right text-white max-md:max-w-full">
            <span className="w-full max-md:max-w-full">צרו קשר</span>
          </h2>
          <h3 className="text-5xl font-bold leading-tight text-right text-white max-md:max-w-full max-md:text-4xl">
            <span className="w-full max-md:max-w-full max-md:text-4xl">
              <span className="pb-px w-full max-md:max-w-full max-md:text-4xl">
                בואו נעבוד ביחד
              </span>
            </span>
          </h3>
          <p className="text-2xl leading-tight text-right text-white max-md:max-w-full">
            <span className="w-full max-md:max-w-full">
              <span className="pb-px w-full max-md:max-w-full">
                פיתוח תוכנה מוצלח ואיכותי
              </span>
            </span>
          </p>
          <div className="z-10 max-md:max-w-full">
            <div className="items-center pl-14 w-full max-md:pl-5 max-md:max-w-full">
              <img
                loading="lazy"
                src={ContactSectionIcon}
                className="object-contain w-full rounded-xl aspect-square max-w-[434px]"
                alt="Software development illustration"
              />
            </div>
          </div>
          <ContactForm />
        </div>
        <BulletPoints />
      </div>
    </section>
  );
};

export default ContactSection;
