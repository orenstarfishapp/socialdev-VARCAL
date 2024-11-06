import React from "react";
import FooterImg from "../../../../assets/images/footer-logo.png";

const Logo: React.FC = () => {
  return (
    <div className="!hidden md:!flex md:flex-col grow shrink items-start md:w-[14%] min-w-0">
      <div className="!hidden md:!flex md:flex-col justify-center max-w-full">
        <img
          loading="lazy"
          src={FooterImg}
          className="footer-logo !hidden md:!block object-contain self-stretch my-auto aspect-[1.49] max-w-[139px] w-[139px]"
          alt="Company logo"
        />
      </div>
    </div>
  );
};

export default Logo;
