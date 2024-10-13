import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  // State to manage success or error messages
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send POST request to your server's endpoint
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );
      setResponseMessage("Lead submitted successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form. Please try again.");
      setResponseMessage("");
    }
  };

  return (
    <section className="my-20 flex grow-0 shrink-0 w-full flex-row justify-center self-stretch">
      <div className="flex grow-0 shrink-0 w-3/5 justify-center mr-[60px] duration-300">
        <div className="max-w-full w-full">
          <div className="p-[30px] bg-white rounded-[10px] shadow-md">
            <form className="max-md:max-w-full" onSubmit={handleSubmit}>
              <input type="hidden" name="post_id" value="1282" />
              <input type="hidden" name="form_id" value="1282" />
              <input type="hidden" name="referer_title" value="1282" />
              <input type="hidden" name="queried_id" value="1282" />
              <div className="flex flex-wrap flex-col mx-[-5px] mb-[-10px] max-md:max-w-full">
                {/* Full Name Field */}
                <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    dir="rtl"
                    className="w-full bg-transparent outline-none py-2 px-4 text-right"
                    placeholder="שם מלא *"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                {/* Phone Field */}
                <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    dir="rtl"
                    className="w-full bg-transparent outline-none py-2 px-4 text-right"
                    placeholder="טלפון *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center px-[5px] mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    dir="rtl"
                    className="w-full bg-transparent outline-none py-2 px-4 text-right"
                    placeholder="כתובת מייל *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex shrink self-stretch flex-wrap items-end justify-end px-[5px] mb-[10px] relative w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
                  <button
                    type="submit"
                    className="flex justify-center bg-yellow-500 px-6 rounded min-h-[40px] max-md:px-5"
                  >
                    <span className="self-stretch my-auto">צור פניה חדשה</span>
                  </button>
                </div>
              </div>
            </form>
            {/* Success or Error Message */}
            {responseMessage && (
              <p className="text-green-500">{responseMessage}</p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
