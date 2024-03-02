"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { main_section_img } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});
const Hero = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e2e2e] to-transparent z-0"></div>

        {/* Heading */}
        <motion.h2
          variants={fadeIn("right", "tween", 0.1, 0.5)}
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
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
