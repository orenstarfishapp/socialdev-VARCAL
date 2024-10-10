import React, { useEffect, useState } from "react";
import Header from "../components/layoutComponents/Header";
import Footer from "../components/layoutComponents/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LeadModal from "../components/Modals/LeadModal";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    "דף הבית",
    "אודותינו",
    "תיק עבודות",
    "הדרך שלנו",
    "צרו קשר",
  ];

  return (
    <>
      <LeadModal />
      <div className="relative bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
        <div className="z-0 w-full min-h-[1200px] max-md:max-w-full">
          <Header navItems={navItems} />
          <ScrollToTopButton />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
