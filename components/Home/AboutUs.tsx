"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { FaHeart, FaUserMd, FaHandHoldingMedical } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";
import { AboutBg } from "@/assets";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden md:h-[550px] bg-gradient-to-r from-blue-700 to-green-500 text-white">
      <div className="w-full h-full flex flex-col items-center justify-between p-5 lg:p-10 relative z-10">
        <motion.h2
          variants={textVariant()}
          className={`${dancingScript.className} text-4xl lg:text-6xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
        >
          Welcome to Jibika Pharmacy & Health Clinic
        </motion.h2>
        <div className="w-full md:w-3/4 max-w-4xl ">
          <motion.p
            variants={textVariant()}
            className="text-lg lg:text-xl text-center mb-8 h-full flex items-center justify-center"
          >
            Jibika Pharmacy and Health Clinic is your trusted partner in health,
            providing comprehensive pharmaceutical services and personalized
            care. Our dedicated team of experts is committed to enhancing your
            well-being by offering a wide range of medications, wellness
            products, and healthcare services.
          </motion.p>
        </div>

        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={fadeIn("right", "spring", 1 * 0.3, 0.75)}
            className="flex flex-col items-center justify-center"
          >
            <FaHeart className="text-4xl text-red-600 mb-2 animate-pulse" />
            <p className="text-lg font-semibold text-white">
              Personalized Care
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 1 * 0.3, 0.75)}
            className="flex flex-col items-center justify-center"
          >
            <FaUserMd className="text-4xl text-blue-600 mb-2 " />
            <p className="text-lg font-semibold text-white">Experienced Team</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 1 * 0.3, 0.75)}
            className="flex flex-col items-center justify-center"
          >
            <FaHandHoldingMedical className="text-4xl text-green-700 mb-2 animate-bounce" />
            <p className="text-lg font-semibold text-white">
              Holistic Wellness
            </p>
          </motion.div>
        </div>
      </div>
      <Image
        src={AboutBg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
    </section>
  );
};

export default SectionWrapper(AboutUs, "about_us");
