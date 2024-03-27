"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import "react-datepicker/dist/react-datepicker.css";
import { config } from "dotenv";
import HeadTitle from "@/components/HeadTitle";
import KnowOurLocation from "@/components/KnowOurLocation";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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

  const onSubmit = async (data: any) => {
    try {
      const API_ENDPOINT = "https://api.web3forms.com/submit";
      const { name, email, message } = data;

      const payload = {
        apikey: process.env.NEXT_PUBLIC_WEB3_FORMS_KEY,
        name,
        email,
        message,
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
  return (
    <div className="w-full">
      <HeadTitle title="Contact Us" subtitle="Have Any Query?" />
      <div className="w-full flex flex-wrap items-center justify-center gap-5 ">
        <motion.div
          variants={textVariant(0.25)}
          className="border px-10 py-5 gap-5 font-semibold bg-light rounded-xl flex items-center min-w-[425px] min-h-[125px]"
        >
          <BsEnvelopeFill className="text-primary-green bg-white h-14 w-14 text-secondary p-3 rounded-xl" />
          <div>
            <h2 className="text-gray-500 font-normal">Email address</h2>
            <p>jibikapharmacy@gmail.com</p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant(0.5)}
          className="border px-10 py-5 gap-5 font-semibold bg-light rounded-xl flex items-center min-w-[425px] min-h-[125px]"
        >
          <FaPhoneAlt className="text-primary-green bg-white text-secondary h-14 w-14 p-3 rounded-xl" />
          <div>
            <h2 className="text-gray-500 font-normal">Call us now</h2>
            <p>
              +977-9851047834 <br />
              +977-9806469216
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant(0.75)}
          className="border px-10 py-5 gap-5 font-semibold bg-light rounded-xl flex items-center min-w-[425px] min-h-[125px] "
        >
          <FaMapMarkerAlt className="text-primary-green bg-white text-secondary h-14 w-14 p-3 rounded-xl" />
          <div>
            <h2 className="text-gray-500 font-normal">Location</h2>
            <p>Buddhanagar-10, Kathmandu, Nepal</p>
          </div>
        </motion.div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-40 p-2 mt-10 ">
        <motion.form
          variants={fadeIn("up", "spring", 0.5, 1)}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-blue-900 w-full"
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
          <textarea
            cols={4}
            placeholder="What do you want to talk about?"
            {...register("message", { required: true })}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
          />
          {errors?.message && (
            <p className="text-red-500">
              {" "}
              Please specify the topic you want to talk about.
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
        <KnowOurLocation />
      </div>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact_us");
