import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Logo from "../../../assets/images/logo1.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#4E0559");

  // Change the header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#ffffff");
      } else {
        setBgColor("#4E0559");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <header
        dir="rtl"
        className="fixed px-[10px] w-full z-50 transition-colors shadow-custom-black duration-300 content-center"
        style={{ backgroundColor: bgColor, minHeight: "100px" }}
      >
        <div className="container mx-auto my-0 flex-wrap flex-col xl:flex-row basis-auto flex-grow max-w-[1140px] w-full shrink flex items-center justify-between py-[10px] h-full">
          <div className="flex-shrink-0 ml-5 w-[120px] h-[80px]">
            {" "}
            <Link to="/דף הבית">
              <img
                loading="lazy"
                src={Logo}
                className="object-contain w-full h-full"
                alt="Company logo"
              />
            </Link>
          </div>
          <div className=" relative xl:left-[250px] order-1">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-4">
              <ul className="flex items-center w-full justify-center">
                {navItems.map((item, index) => (
                  <NavItem key={index} text={item} />
                ))}
              </ul>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-yellow-500 focus:outline-none"
              >
                {/* Hamburger icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#4E0559]">
              <ul className="flex flex-col items-center py-2 space-y-2">
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    text={item}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
