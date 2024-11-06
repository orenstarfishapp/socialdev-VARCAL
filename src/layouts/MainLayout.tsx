// src/layouts/MainLayout.tsx

import React from "react";
import Header from "../components/layoutComponents/Header";
import Footer from "../components/layoutComponents/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LeadModal from "../components/Modals/LeadModal";
import AccessibilityMenu from '../components/AccessibilityMenu/AccessibilityMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    "דף הבית",
    "אודותינו",
    "תיק עבודות",
  ];

  return (
    <div className="relative bg-[linear-gradient(0deg,#D6DCE4_0%,#D6DCE4_100%,#FFF)]">
      <div className="z-0 w-full min-h-[1200px] max-md:max-w-full">
        <Header navItems={navItems} />

        {/* Include AccessibilityMenu here */}
        <AccessibilityMenu />

        <ScrollToTopButton />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
