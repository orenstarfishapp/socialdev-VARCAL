import React from "react";
import ContactForm from "./ContactForm";

const MyComponent: React.FC = () => (
  <main className="flex justify-center pr-96 pl-96 mt-20 text-base text-right text-slate-800 max-md:px-5 max-md:mt-10">
    <div className="flex flex-col flex-1 shrink justify-center items-center p-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-6xl max-md:max-w-full">
        <ContactForm />
      </div>
    </div>
  </main>
);

export default MyComponent;
