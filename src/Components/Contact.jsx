import React, { useState } from "react";
// import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Make sure to replace these with your own EmailJS Service ID, Template ID, and User ID
    const serviceID =  import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID =  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({
            email: "",
            name: "",
            address: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="flex flex-col font-serif md:flex-row justify-center items-center md:items-start p-6 text-white">
      {/* Left - Contact Form */}
      <div className="w-full md:w-1/2 p-6 border border-yellow-500 rounded-lg">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Contact Us</h2>
        <p className="mb-6">We would love to hear from you!</p>

        {successMessage && (
          <div className="bg-green-500 text-white p-4 rounded mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              className="w-full p-3 mb-4 md:mb-0 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:text-yellow-500"
              required
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full p-3 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:text-yellow-500"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full p-3 mb-4 md:mb-0 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:text-yellow-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone (e.g. +141)"
              className="w-full p-3 bg-gray-800  rounded-lg focus:outline-none focus:ring-2 focus:text-yellow-500"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 h-32 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:text-yellow-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-gray-600 rounded-lg hover:bg-yellow-50 transition duration-300 text-yellow-500"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right - Contact Information */}
      <div className="w-full md:w-1/2 p-6 text-sm">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-2">CALL US</h3>
          <p>+91-9335030775</p>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
