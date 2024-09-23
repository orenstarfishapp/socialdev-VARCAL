import React from "react";
import { Link, NavLink } from "react-router-dom";

interface FooterItem {
  title: string;
  url: string;
}

interface FooterColumnProps {
  title: string;
  items: FooterItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col grow shrink items-end px-5 text-right min-w-0 w-[25%]">
      <h2 className="flex flex-col justify-center w-full text-lg font-semibold leading-tight text-yellow-500 max-w-full">
        <span className="pb-px w-full">{title}</span>
      </h2>
      <nav
        dir="rtl"
        className="flex flex-col justify-center mt-1 max-w-full text-base leading-loose text-gray-200 w-full"
      >
        <ul className="flex flex-col w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center mt-1 w-full hover:cursor-pointer group" // Added 'group' for targeting children on hover
            >
              <Link
                to={item.url}
                className="relative flex flex-1 shrink items-center self-stretch my-auto w-full basis-0 group-hover:text-yellow-500 transition-colors duration-300"
              >
                <span className="self-stretch pb-px my-auto">{item.title}</span>
                {/* Add the yellow line effect */}
                <span
                  dir="rtl"
                  className="absolute bottom-0 left-[40%] h-[3px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-[60%] group-hover:right-0"
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default FooterColumn;
