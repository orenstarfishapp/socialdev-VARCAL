// Import necessary modules and components from React and other libraries
import React, { useState, useEffect } from "react"; // Import React and hooks
import NavItem from "./NavItem"; // Import a custom navigation item component
import Logo from "../../../assets/images/logo1.png"; // Import a logo image
import { Link } from "react-router-dom"; // Import Link component for routing

// Define the props interface for the Header component
interface HeaderProps {
  navItems: string[]; // navItems is an array of strings representing navigation links
}

// Define the Header functional component with TypeScript type annotations
const Header: React.FC<HeaderProps> = ({ navItems }) => {
  // useState hook to manage the state of the mobile menu (open or closed)
  const [isOpen, setIsOpen] = useState(false);
  
  // useState hook to manage the background color of the header
  const [bgColor, setBgColor] = useState("#4E0559"); // Initial background color

  // useEffect hook to handle side effects, such as adding event listeners
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#4E0559"); // Set background color when scrolled down
      } else {
        setBgColor("#4E0559"); // Set background color when at the top (same color here)
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="w-full"> {/* Container div with full width */}
      <header
        dir="rtl" // Set text direction to right-to-left
        className="fixed px-[10px] w-full z-50 transition-colors shadow-custom-black duration-300 content-center"
        // Apply various Tailwind CSS classes:
        // - fixed: position fixed
        // - px-[10px]: horizontal padding of 10px
        // - w-full: full width
        // - z-50: high z-index to overlay other elements
        // - transition-colors: animate color changes
        // - shadow-custom-black: custom shadow (defined elsewhere)
        // - duration-300: transition duration of 300ms
        // - content-center: center the content
        style={{ backgroundColor: bgColor, minHeight: "100px" }} // Inline styles for background color and minimum height
      >
        <div className="container mx-auto mr-1 my-0 flex-wrap pl-14 flex-row md:flex-col xl:flex-row basis-auto flex-grow max-w-[1140px] w-full shrink flex items-center lg:-between py-[12px] h-full">
          {/* 
            Container div with multiple Tailwind CSS classes:
            - container mx-auto: center the container horizontally
            - mr-2 my-0: right margin 2 and vertical margins 0
            - flex-wrap: allow flex items to wrap
            - pl-4: padding-left of 1rem
            - flex-row md:flex-col xl:flex-row: row direction on small screens, column on medium, row on extra large
            - basis-auto flex-grow max-w-[1140px] w-full shrink flex items-center lg:justify-between py-[10px] h-full: various flex properties for layout
          */}
          
          <div className="flex-shrink-0 md:ml-5 w-[120px] h-[80px]">
            {/* 
              Logo container with:
              - flex-shrink-0: prevent shrinking
              - md:ml-5: left margin on medium screens
              - width 120px and height 80px
            */}
            <Link to="/דף הבית"> {/* Link to the home page (in Hebrew) */}
              {/* 
                Commented out img tag for the logo image:
                <img
                  loading="lazy"
                  src={Logo}
                  className="object-contain w-full h-full"
                  alt="Company logo"
                /> 
              */}
              <div className="object-contain w-full h-full">
                {/* 
                  Container for the SVG logo with:
                  - object-contain: contain the object within the container
                  - full width and height
                */}
                <svg
                  className={`text-white h-[6rem] w-24`} // SVG styling with Tailwind classes
                  viewBox="0 0 100 100" // Viewbox for SVG scaling
                  xmlns="http://www.w3.org/2000/svg" // XML namespace
                >
                  <path
                    className={`animate-bounce animate-duration-[4000ms]`} // Apply bounce animation with 4s duration
                    d="M20,80 Q40,40 60,20 Q80,40 60,80 Z" // SVG path definition
                    fill="#ff0000" // Red fill color
                  />
                  <path
                    className={`animate-bounce animate-duration-[3900ms]`} // Apply bounce animation with 3.9s duration
                    d="M40,80 Q60,40 80,20 Q100,40 80,80 Z" // Another SVG path definition
                    fill="#cccccc" // Gray fill color
                  />
                </svg>
              </div>
            </Link>
          </div>
          
          <div className="relative">

{/* 
              Navigation container with:
              - relative positioning
              - left offset on extra large screens
              - order-1: flex item order
            */}
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto mr-6">
            {/* 
                Navigation bar for desktop:
                - hidden on small screens
                - flex display on medium and larger screens
                - flex-grow: take available space
                - justify-center: center the items
                - space-x-4: horizontal spacing between items
              */}
              <ul className="flex items-center w-full justify-center">
                {/* 
                  Unordered list with flex display:
                  - items centered vertically
                  - full width
                  - items centered horizontally
                */}
                {navItems.map((item, index) => (
                  <NavItem key={index} text={item} /> // Render NavItem component for each navigation item
                ))}
              </ul>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              {/* 
                Hamburger menu container:
                - hidden on medium and larger screens
                - flex display with items centered vertically
              */}
              <button
                onClick={() => setIsOpen(!isOpen)} // Toggle the mobile menu open state on click
                className="text-yellow-500 focus:outline-none" // Button styling
              >
                {/* Hamburger icon as SVG */}
                <svg
                  className="w-6 h-6" // Width and height of the icon
                  fill="none" // No fill color
                  stroke="currentColor" // Stroke uses current text color
                  viewBox="0 0 24 24" // Viewbox for SVG scaling
                  xmlns="http://www.w3.org/2000/svg" // XML namespace
                >
                  <path
                    strokeLinecap="round" // Rounded line caps
                    strokeLinejoin="round" // Rounded line joins
                    strokeWidth="2" // Stroke width
                    d="M4 6h16M4 12h16m-7 6h7" // Path definition for hamburger lines
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#4E0559]">
              {/* 
                Mobile navigation menu:
                - visible only when isOpen is true
                - hidden on medium and larger screens
                - absolute positioning below the header
                - full width with specific background color
              */}
              <ul className="flex flex-col items-center py-2 space-y-2">
                {/* 
                  Unordered list with:
                  - flex display in column direction
                  - items centered horizontally
                  - vertical padding and spacing between items
                */}
                {navItems.map((item, index) => (
                  <NavItem
                    key={index} // Unique key for each item
                    text={item} // Text for the navigation item
                    onClick={() => setIsOpen(false)} // Close the mobile menu on item click
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

// Export the Header component as the default export
export default Header;
