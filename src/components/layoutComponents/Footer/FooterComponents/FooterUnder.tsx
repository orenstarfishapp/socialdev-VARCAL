import React from "react";
import footerImage from "../../../../assets/images/image_2024_10_11T14_09_58_211Z.png";

const FooterUnder: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center pt-px w-full text-sm leading-5 text-center text-white border-t border-solid bg-[#35023D] border-t-slate-400 border-t-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center mx-auto py-[100px] max-w-[1140px] w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          <div className="w-full max-md:px-5 max-md:max-w-full">
            <img 
              src={footerImage}
              alt="Footer Logo" 
              className="mb-4"
            />
            <div>© 2023 AI Web Dev | כל הזכויות שמורות</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUnder;
