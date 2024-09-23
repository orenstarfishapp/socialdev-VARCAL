import React from "react";

const FooterUnder: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center  pt-px w-full text-sm leading-5 text-center text-white border-t border-solid bg-[#35023D] border-t-slate-400 border-t-opacity-20 max-w-[1920px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 justify-center mx-auto py-[50px] max-w-[1140px] w-full">
        <div className="flex flex-col flex-1 w-full max-md:max-w-full">
          <div className="w-full max-md:px-5 max-md:max-w-full">
            © 2023 AI Web Dev | כל הזכויות שמורות
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUnder;
