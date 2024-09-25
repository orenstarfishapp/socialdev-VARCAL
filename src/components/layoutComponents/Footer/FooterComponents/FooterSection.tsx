import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

interface FooterSectionProps {
  columns: {
    title: string;
    items: { title: string; url: string }[];
  }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ columns }) => {
  return (
    <div className="bg-[#35023D] text-white self-center flex-row">
      <div className="flex flex-wrap flex-1 justify-center flex-grow shrink my-0 mx-auto pt-[100px] pb-[50px] size-full max-w-[1140px] w-full max-md:px-5">
        <Logo />
        {columns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
        <div>
          <svg
            className={`text-white h-[9rem] w-24`}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`animate-bounce animate-duration-[4000ms]`}
              d="M20,80 Q40,40 60,20 Q80,40 60,80 Z"
              fill="#ff0000"
            />
            <path
              className={`animate-bounce animate-duration-[3900ms]`}
              d="M40,80 Q60,40 80,20 Q100,40 80,80 Z"
              fill="#cccccc"
            />
          </svg>
          
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
