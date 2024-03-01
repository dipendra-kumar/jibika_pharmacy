"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "@/utils/motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { config } from "dotenv";
config();

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onSubmit = async (data: any) => {
    try {
      const API_ENDPOINT = "https://api.web3forms.com/submit";
      const { name, email, phone, query } = data;

      const payload = {
        apikey: process.env.NEXT_PUBLIC_WEB3_FORMS_KEY,
        name,
        email,
        phone,
        query,
        date: selectedDate.toDateString(),
        time: selectedDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
        url: API_ENDPOINT,
      };
      setButtonText("Sending");
      const response = await axios(options);
      setButtonText("Send");
      reset();
      if (response.data?.success) {
        setShowSuccessMessage(true);
      } else {
        setShowFailureMessage(true);
      }
    } catch (error) {
      setButtonText("Send");
      setShowFailureMessage(true);
    }
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-green-700  md:h-96">
        <motion.div variants={textVariant()} className="mx-auto mb-10 md:mt-20">
          <h1 className="text-4xl font-bold mt-4 text-gray-50">
            Want to schedule an appointment with us?
          </h1>
          <p className="text-sm mt-4 font-light text-gray-200">
            Fill the form and send in your queries. We will respond as soon as
            possible. Alternatively, You can reach out to us at our email
            address and phone number.
          </p>
        </motion.div>
        <motion.form
          variants={slideIn("down", "tween", 0.5, 1)}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-blue-900"
        >
          <h1 className="text-2xl font-bold text-gray-50">Send a message</h1>

          <label htmlFor="name" className=" font-light mt-8 text-gray-50">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name."
            {...register("name", { required: true })}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
          />
          {errors?.name && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-white font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email address."
            {...register("email", { required: true })}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="subject"
            className="text-white font-light mt-4 dark:text-gray-50"
          >
            Your query<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="What do you want to talk about?"
            {...register("query", { required: true })}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
          />
          {errors?.query && (
            <p className="text-red-500">
              {" "}
              Please specify the topic you want to talk about.
            </p>
          )}
          <label
            htmlFor="phone"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Provide us your phone number."
            {...register("phone", {
              required: true,
            })}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
          />
          {errors?.phone && (
            <p className="text-red-500">Phone number is required!</p>
          )}

          <label
            htmlFor="date"
            className="text-white font-light mt-4 dark:text-gray-50"
          >
            Date and Time<span className="text-red-500">*</span>
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select date and time"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
            minDate={new Date()}
          />
          {(selectedDate === null || selectedDate < new Date()) && (
            <p className="text-red-500">
              {selectedDate === null
                ? "Please select a date and time."
                : "Please select a date and time after today."}
            </p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-white text-gray-800 text-sm font-semibold rounded-md flex flex-row items-center hover:cursor-pointer hover:bg-gray-200 duration-300"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered. We will call you back
                regarding your issue.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </motion.form>
      </div>
      <section>
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        ></h1>
      </section>
    </>
  );
};

export default SectionWrapper(ContactUs, "contact_us");
