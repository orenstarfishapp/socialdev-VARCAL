import React from "react";

interface NavItemProps {
  text: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick }) => {
  return (
    <li className="text-yellow-500 relative text-nowrap m-0 ">
      <a
        href={`${text.toLowerCase()}`}
        className="relative group inline-block px-5 font-sans transition duration-300 ease-in-out hover:text-yellow-400"
        style={{
          fontWeight: "700",
          fontSize: "16px",
          paddingTop: "13px",
          paddingBottom: "13px",
        }}
        onClick={onClick}
      >
        {text}
        <span className="block absolute h-1 left-0 w-0 bg-yellow-300 group-hover:w-full group-hover:right-0 bottom-0 transition-all duration-300"></span>
      </a>
    </li>
  );
};

export default NavItem;
