import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    topic: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your server URL
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
    <div className="flex flex-col grow shrink justify-center w-[40%] mr-[60px] p-[10px]">
      <div className="items-center w-full">
        <div className="p-[30px] w-full rounded-[10px] bg-white shadow-custom-black">
          <form className="max-md:max-w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="post_id" value="1282" />
            <input type="hidden" name="form_id" value="1282" />
            <input type="hidden" name="referer_title" value="1282" />
            <input type="hidden" name="queried_id" value="1282" />

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

            {/* Topic Field */}
            <div className="flex flex-col flex-1 shrink self-stretch flex-wrap items-center mb-[10px] relative min-h-[1px] w-full bg-white border-b border-b-yellow-500 max-w-[1082px]">
              <select
                name="topic"
                id="form-field-field_22d8251"
                className="w-full bg-transparent outline-none py-2 px-4 text-right"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="">על מה נדבר?</option>
                <option value="אחר..">אחר..</option>
                <option value="פיתוח ל-UC">פיתוח ל-UC</option>
                <option value="קידום ברשתות החברתיות">
                  קידום ברשתות החברתיות
                </option>
                <option value="קידום אתרים אורגני (SEO)">
                  קידום אתרים אורגני (SEO)
                </option>
                <option value="עיצוב אתרים UI/UX">עיצוב אתרים UI/UX</option>
                <option value="פיתוח אתר ו/או אפליקציה">
                  פיתוח אתר ו/או אפליקציה
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex shrink self-stretch flex-wrap items-end justify-end px-[5px] mb-[10px] relative w-full font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
              <button
                type="submit"
                className="flex justify-center bg-yellow-500 px-6 rounded min-h-[40px] max-md:px-5"
              >
                <span className="self-stretch my-auto">צור פניה חדשה</span>
              </button>
            </div>

            {/* Display Success or Error Message */}
            {responseMessage && (
              <p className="text-green-500">{responseMessage}</p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
