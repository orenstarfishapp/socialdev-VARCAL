import React from "react";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";

const ContactForm: React.FC = () => (
  <form className="flex flex-col flex-1 px-6 pt-8 pb-8 w-full bg-white rounded-xl shadow-custom-black max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col justify-center w-full max-md:max-w-full">
      <FormField label="שם מלא *" />
      <FormField label="טלפון *" type="tel" />
      <FormField label="כתובת מייל *" type="email" />
      <SubmitButton />
    </div>
  </form>
);

export default ContactForm;
