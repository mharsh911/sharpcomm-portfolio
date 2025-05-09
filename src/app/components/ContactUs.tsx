"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center px-4 py-6"
      style={{ backgroundColor: "#49C4DB" }}
    >
      {/* Left Section */}
      <div className="w-full md:w-[30%] flex justify-center items-center mb-6 md:mb-0">
        <div className="text-5xl uppercase font-bold text-black text-center md:text-left">
          Connect with Us
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full max-w-3xl p-8">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-white text-black placeholder-gray-600 text-lg focus:outline-none focus:ring-0"
            required
          />

          {/* Email & Phone Fields in a Row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your E-Mail"
              className="w-full sm:w-2/3 p-3 bg-white text-black placeholder-gray-600 text-lg focus:outline-none focus:ring-0"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full sm:w-1/3 p-3 bg-white text-black placeholder-gray-600 text-lg focus:outline-none focus:ring-0"
            />
          </div>

          {/* Message Field */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 bg-white text-black placeholder-gray-600 text-lg focus:outline-none focus:ring-0 h-24 resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 block px-8 py-3 text-white text-lg border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
