import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const LeadModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
 const preventScroll = (e: TouchEvent) => {
   //e.preventDefault();
 };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed"; // Prevent scrolling by fixing the body's position
    document.body.style.width = "100%"; // Maintain full body width

    // Add touchmove event listener to prevent scrolling
   
    document.body.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    // Delay to show the modal (2 seconds for demonstration)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2000ms = 2 seconds (adjust as needed)

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "scroll";// Reset overflow
      document.body.style.position = "relative"; // Reset position
      document.body.style.width = ""; // Reset width
      document.body.removeEventListener("touchmove", preventScroll); // Remove the touchmove event listener
    };
  }, []);
  

    
  

  // Close modal
  const closeModal = () => {
    setIsVisible(false);
document.body.style.overflow = "scroll"; // Reset overflow
document.body.style.position = "relative"; // Reset position
document.body.style.width = "auto"; // Reset width
document.body.removeEventListener("touchmove", preventScroll); 
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission using Axios
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      if (response.status === 200) {
        alert(response.data.message); // Notify user of success
        closeModal(); // Close modal on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
        }); // Clear form after success
        setError(""); // Clear any previous errors
      } else {
        setError("Something went wrong");
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.errors) {
        setError(err.response.data.errors.join(", ")); // Display backend errors
      } else {
        setError("Failed to submit the form");
      }
    }
  };

  // Close modal when clicking on the background
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal if the background is clicked
    }
  };

  return (
    <>
      {isVisible && (
        <div
          dir="ltr"
          className="fixed overflow-hidden inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick}
        >
          <div className="flex flex-col bg-[#19212A]    font-rubik h-auto  md:h-auto rounded-lg shadow-lg">
            <div className="flex justify-end mr-5">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-700 text-5xl text-end"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col w-[65%] mx-auto  gap-5">
                <div className="flex flex-col text-center gap-5 mx-auto">
                  <h2 className="text-[12px] text-white text-end">צרו קשר</h2>
                  <h2 className="md:text-[86px] sm:text-[40px] text-[35px]   font-rubik font-bold text-white text-end md:leading-[1.3em]">
                    בואו נעבוד ביחד
                  </h2>
                  <h2 className="text-[24px] font-rubik font-normal text-white text-end">
                    החל מ-500 ש"ח לחודש לקידום: אינסטגרם / פייסבוק וקידום לוקאלי
                    בגוגל
                  </h2>
                  <div>
                    <div className="p-[30px] mb-8 rounded-[10px] shadow-custom-black">
                      <form className="mt-4" onSubmit={handleSubmit}>
                        <input type="hidden" name="post_id" value="4079" />
                        <input type="hidden" name="form_id" value="a181e66" />
                        <input type="hidden" name="queried_id" value="2272" />
                        <div
                          dir="rtl"
                          className="mx-[-8px] mb-[-16px] bg-[#19212A] flex flex-wrap items-start"
                        >
                          <div className="flex flex-col text-white px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="text"
                              placeholder="שם מלא *"
                              id="form-field-name"
                              name="fullName"
                              dir="rtl"
                              value={formData.fullName}
                              onChange={handleChange}
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col text-white px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="text"
                              placeholder="טלפון *"
                              id="form-field-phone"
                              name="phone"
                              dir="rtl"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col text-white px-2 mb-[16px] w-full md:w-1/2">
                            <input
                              type="email"
                              placeholder="אימייל *"
                              id="form-field-email"
                              name="email"
                              dir="rtl"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-transparent outline-none py-2 px-4 text-right border-b border-b-yellow-500 focus-within:border-gray-300 focus-within:rounded-sm"
                              required
                            />
                          </div>
                          <div className="flex flex-col w-full px-2 mb-[16px] items-end">
                            <button
                              type="submit"
                              className="bg-[#19212A] border-solid border-spacing-1 md:w-2/5 w-full border-[1px] border-yellow-500 text-yellow-500 p-[14px] rounded hover:text-white hover:border-white"
                            >
                              צור פניה חדשה
                            </button>
                          </div>
                        </div>
                        {error && (
                          <p className="text-red-500 text-center">{error}</p>
                        )}{" "}
                        {/* Display error */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadModal;
