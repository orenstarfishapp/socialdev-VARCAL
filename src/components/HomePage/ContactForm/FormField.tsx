import React from "react";

interface FormFieldProps {
  label: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type = "text" }) => (
  <div className="flex flex-col justify-center pb-2.5 w-full min-h-[55px] max-md:max-w-full">
    <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[1082px] min-h-[40px] min-w-[240px] max-md:max-w-full">
        <label
          className="sr-only"
          htmlFor={label.toLowerCase().replace(/\s/g, "-")}
        >
          {label}
        </label>
        <input
          type={type}
          id={label.toLowerCase().replace(/\s/g, "-")}
          className="overflow-hidden w-full max-md:max-w-full"
          placeholder={label}
          aria-label={label}
          required
        />
      </div>
    </div>
  </div>
);

export default FormField;
