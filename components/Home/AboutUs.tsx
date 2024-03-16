"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { FaHeart, FaUserMd, FaHandHoldingMedical } from "react-icons/fa";
import { Nunito_Sans } from "next/font/google";
import HeadTitle from "../HeadTitle";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
interface CardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ icon, color, title, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
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
    <div className="w-full h-full flex flex-col items-center justify-between p-5 lg:p-10 relative z-10 my-20">
      <HeadTitle
        title="Welcome to"
        subtitle="Jibika Pharmacy & Health Clinic"
      />

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
          color="rgb(232 82 79)"
          title="Personalized Care"
          index={0}
        />

        <Card
          icon={<FaUserMd className="text-4xl mb-2" />}
          color="rgb(100 172 244)"
          title="Experienced Team"
          index={1}
        />

        <Card
          icon={
            <FaHandHoldingMedical className="text-4xl mb-2 animate-bounce" />
          }
          color="rgb(84 186 84)"
          title="Holistic Wellness"
          index={2}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(AboutUs, "about_us");
