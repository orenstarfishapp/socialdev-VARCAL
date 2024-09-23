import React from "react";
import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/NavPages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/NavPages/AboutPage";
import ContactPage from "./pages/NavPages/ContactPage";
import PortfolioPage from "./pages/NavPages/PortfolioPage";
import OurWayPage from "./pages/NavPages/OurWayPage";
import WebsiteConstruction from "./pages/FooterPages/WebsiteConstructionPage";
import BuildingImageWebsitePage from "./pages/FooterPages/BuildingImageWebsitePage";
import BuildTradingSite from "./pages/FooterPages/BuildTradingSite";
import BuildPortalSite from "./pages/FooterPages/BuildPortalSite";
import WebDesignPage from "./pages/FooterPages/WebDesignPage";
import UIdesignPage from "./pages/FooterPages/UIdesignPage";
import InterfaceDesignPage from "./pages/FooterPages/InterfaceDesignPage";
import AppDesignPage from "./pages/FooterPages/AppDesignPage";
import FacebookPromotionPage from "./pages/FooterPages/FacebookPromotionPage";
import InstagramDesignPage from "./pages/FooterPages/InstagramDesignPage";
import TiktokPromotionPage from "./pages/FooterPages/TiktokPromotionPage";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/דף הבית" element={<HomePage />} />
          <Route path="/אודותינו" element={<AboutPage />} />
          <Route path="/תיק עבודות" element={<PortfolioPage />} />
          <Route path="/הדרך שלנו" element={<OurWayPage />} />
          <Route path="/צרו קשר" element={<ContactPage />} />
          <Route path="/בניית אתרים" element={<WebsiteConstruction />} />
          <Route
            path="/בניית אתר תדמית"
            element={<BuildingImageWebsitePage />}
          />
          <Route path="/בניית אתר מסחר" element={<BuildTradingSite />} />
          <Route path="/בניית אתר פורטל" element={<BuildPortalSite />} />
          <Route path="/עיצוב אתרים" element={<WebDesignPage />} />
          <Route path="/עיצוב UI/UX" element={<UIdesignPage />} />
          <Route path="/עיצוב ממשק משתמש" element={<InterfaceDesignPage />} />
          <Route path="/עיצוב אפליקציות" element={<AppDesignPage />} />
          <Route path="/קידום ב-Facebook" element={<FacebookPromotionPage />} />
          <Route path="/קידום ב-Instagram" element={<InstagramDesignPage />} />
          <Route path="/קידום ב-Tik Tok" element={<TiktokPromotionPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
