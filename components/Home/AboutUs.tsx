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
      <p className="mt-2 text-lg font-semibold">{title}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className="relative z-10 my-10 flex h-full w-full flex-col items-center justify-between p-5 lg:p-10">
      <HeadTitle title="Welcome to" subtitle="" />
      <h1
        className={`mb-5 text-center text-4xl font-extrabold tracking-normal text-[#062d71] drop-shadow-2xl  md:text-left md:tracking-wider`}
      >
        Jibika Pharmacy
        <span className="  text-green-600">&nbsp;&</span>
        &nbsp;Health Clinic
      </h1>

      <div className="w-full max-w-4xl md:w-3/4 ">
        <motion.p
          variants={textVariant()}
          className="mb-8 flex h-full items-center justify-center text-center text-lg lg:text-xl"
        >
          Jibika Pharmacy and Health Clinic is your trusted partner in health,
          providing comprehensive pharmaceutical services and personalized care.
          Our dedicated team of experts is committed to enhancing your
          well-being by offering a wide range of medications, wellness products,
          and healthcare services.
        </motion.p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:w-3/4 md:grid-cols-3">
        <Card
          icon={<FaHeart className="mb-2 animate-pulse text-4xl" />}
          color="rgb(232 82 79)"
          title="Personalized Care"
          index={0}
        />

        <Card
          icon={<FaUserMd className="mb-2 text-4xl" />}
          color="rgb(100 172 244)"
          title="Experienced Team"
          index={1}
        />

        <Card
          icon={
            <FaHandHoldingMedical className="mb-2 animate-bounce text-4xl" />
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
