"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
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
interface CardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  animation: Variants;
}

const Card: React.FC<CardProps> = ({ icon, color, title, animation }) => {
  return (
    <motion.div
      variants={animation}
      className={`flex flex-col items-center justify-center rounded-lg p-6 text-white`}
      style={{ backgroundColor: color }}
    >
      {icon}
      <p className="text-lg font-semibold mt-2">{title}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-5 lg:p-10 relative z-10">
      <motion.h2
        variants={textVariant()}
        className={`${dancingScript.className} text-black text-4xl lg:text-6xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
      >
        Welcome to Jibika Pharmacy & Health Clinic
      </motion.h2>
      <div className="w-full md:w-3/4 max-w-4xl ">
        <motion.p
          variants={textVariant()}
          className="text-lg lg:text-xl text-center mb-8 h-full flex items-center justify-center"
        >
          Jibika Pharmacy and Health Clinic is your trusted partner in health,
          providing comprehensive pharmaceutical services and personalized care.
          Our dedicated team of experts is committed to enhancing your
          well-being by offering a wide range of medications, wellness products,
          and healthcare services.
        </motion.p>
      </div>

      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={<FaHeart className="text-4xl mb-2 animate-pulse" />}
          color="red"
          title="Personalized Care"
          animation={fadeIn("right", "spring", 1 * 0.3, 0.75)}
        />

        <Card
          icon={<FaUserMd className="text-4xl mb-2" />}
          color="blue"
          title="Experienced Team"
          animation={fadeIn("up", "spring", 1 * 0.3, 0.75)}
        />

        <Card
          icon={
            <FaHandHoldingMedical className="text-4xl mb-2 animate-bounce" />
          }
          color="green"
          title="Holistic Wellness"
          animation={fadeIn("left", "spring", 1 * 0.3, 0.75)}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(AboutUs, "about_us");
