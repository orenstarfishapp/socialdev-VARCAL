import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="ast-scroll-top"
      tabIndex={0}
      className="fixed bottom-5 right-5 bg-[#046bd2] rounded-xl p-3 shadow-custom-black cursor-pointer"
      onClick={scrollToTop}
    >
      <span className="ast-icon icon-arrow">
        <svg
          className="ast-arrow-svg w-6 h-4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="57 35.171 26 16.043"
          enableBackground="new 57 35.171 26 16.043"
          xmlSpace="preserve"
          fill="white"
        >
          <path d="M57.5,50.693l12.5-12.5l12.5,12.5l-2.5,2.5l-10-10l-10,10L57.5,50.693z"></path>
        </svg>
      </span>
      <span className="sr-only">Scroll to Top</span>
    </div>
  );
};

export default ScrollToTopButton;
