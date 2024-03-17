"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { main_section_img } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});
const Hero = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e2e2e] to-transparent z-0"></div>

        {/* Heading */}
        <motion.h2
          variants={zoomIn(0.3, 0.7)}
          className={`${montserrat.className} text-center text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-wider relative z-10`}
        >
          Your Local Neighbourhood Pharmacy
        </motion.h2>
      </div>
      <div className="absolute -z-30 w-full h-full overflow-hidden ">
        <div className="w-full h-full">
          <Image
            src={main_section_img}
            alt="main-section-image"
            className="object-cover w-full h-full transition-opacity opacity-0 duration-[1s]"
            onLoad={(event) =>
              event.currentTarget.classList.remove("opacity-0")
            }
          />
        </div>
      </div>

      <Link href="get-appointment">
        <button className=" flex lg:hidden absolute left-1/2 bottom-10 transform -translate-x-1/2 border bg-primary px-10 py-5 hover:bg-secondary duration-300 font-bold text-lg text-light ">
          Shedule Appointment
        </button>
      </Link>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
