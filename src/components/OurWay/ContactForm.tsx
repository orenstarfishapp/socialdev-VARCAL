import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send the lead form data to your server
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      ); // Update with your backend endpoint
      setResponseMessage("Lead submitted successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("There was an error submitting the form. Please try again.");
      setResponseMessage("");
    }
  };

  return (
    <section className="flex justify-center py-12 w-full px-[480px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center items-center p-2.5 w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-w-[960px] max-md:max-w-full">
          <form
            className="flex flex-col flex-1 px-6 pt-8 pb-8 w-full bg-white rounded-xl shadow-sm max-md:px-5 max-md:max-w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[890px] min-h-[40px] min-w-[240px] max-md:max-w-full">
                    <label htmlFor="fullName" className="sr-only">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full bg-transparent"
                      placeholder="שם מלא *"
                      required
                      aria-label="שם מלא"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[890px] min-h-[40px] min-w-[240px] max-md:max-w-full">
                    <label htmlFor="phone" className="sr-only">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent"
                      placeholder="טלפון *"
                      required
                      aria-label="טלפון"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center pb-2.5 w-full text-base text-right min-h-[55px] text-slate-800 max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[45px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 shrink self-stretch px-3 pt-3 pb-3.5 my-auto w-full bg-white rounded-sm border-b border-solid basis-0 border-b-yellow-500 max-w-[890px] min-h-[40px] min-w-[240px] max-md:max-w-full">
                    <label htmlFor="email" className="sr-only">
                      כתובת מייל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-transparent"
                      placeholder="כתובת מייל *"
                      required
                      aria-label="כתובת מייל"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center pb-2.5 w-full min-h-[50px] max-md:max-w-full">
                <div className="flex flex-wrap justify-center items-center px-1.5 w-full min-h-[40px] max-md:max-w-full">
                  <div className="flex relative flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <label htmlFor="message" className="sr-only">
                      על מה נדבר?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex z-0 flex-col flex-1 shrink justify-center pt-1.5 pr-3.5 pb-2 pl-5 text-base leading-loose text-right bg-white rounded border-b border-solid basis-0 border-b-yellow-500 max-w-[880px] min-h-[40px] min-w-[240px] text-slate-800 max-md:max-w-full"
                      placeholder="על מה נדבר?"
                      aria-label="על מה נדבר?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center pb-2.5 w-full text-base font-medium leading-none text-center text-white min-h-[50px] max-md:max-w-full">
                <div className="flex flex-wrap items-end pl-1 w-full min-h-[40px] pr-[738px] max-md:pr-5 max-md:max-w-full">
                  <button
                    type="submit"
                    className="flex flex-col grow shrink justify-center px-6 py-3.5 bg-yellow-500 rounded min-h-[40px] w-[118px] max-md:px-5"
                  >
                    <div className="flex justify-center items-center pr-1.5 w-full">
                      <span className="self-stretch my-auto">
                        צור פניה חדשה
                      </span>
                    </div>
                  </button>
                </div>
              </div>
              {responseMessage && (
                <p className="text-green-500">{responseMessage}</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
