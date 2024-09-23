import React from "react";
import FooterImg from "../../../../assets/images/logo1.png";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink items-start md:w-[14%] min-w-0">
      <div className="flex flex-col justify-center max-w-full">
        <img
          loading="lazy"
          src={FooterImg}
          className="object-contain self-stretch my-auto aspect-[1.49] max-w-[139px] w-[139px]"
          alt="Company logo"
        />
      </div>
    </div>
  );
};

export default Logo;
