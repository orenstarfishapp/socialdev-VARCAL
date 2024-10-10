import React from "react";

const SubmitButton: React.FC = () => (
  <div className="flex flex-col justify-center pb-2.5 w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
    <div className="flex flex-wrap items-end pl-1 w-full min-h-[40px] pr-[930px] max-md:pr-5 max-md:max-w-full">
      <button
        type="submit"
        className="flex flex-col grow shrink justify-center px-6 py-3.5 bg-yellow-500 rounded min-h-[40px] w-[118px] max-md:px-5"
      >
        <div className="flex justify-center items-center pr-1.5 w-full">
          <span className="self-stretch my-auto">צור פניה חדשה</span>
        </div>
      </button>
    </div>
  </div>
);

export default SubmitButton;
