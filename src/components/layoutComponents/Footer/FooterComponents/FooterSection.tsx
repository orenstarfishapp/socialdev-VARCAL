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
      </div>
    </div>
  );
};

export default FooterSection;
