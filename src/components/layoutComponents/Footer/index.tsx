import React from "react";
import FooterLinks from "./FooterComponents/FooterLinks";
import FooterUnder from "./FooterComponents/FooterUnder";

const Footer: React.FC = () => {
  return (
    <div dir="rtl">
      <section>
        <div className="flex flex-col w-full">
          <div className=" mx-auto py-[10px] flex w-full">
            <div className=" max-w-full"></div>
          </div>
        </div>
        <FooterLinks />
        <FooterUnder />
      </section>
    </div>
  );
};

export default Footer;
