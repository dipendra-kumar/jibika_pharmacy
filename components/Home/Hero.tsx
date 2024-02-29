'use client'
import React from "react";
import { Montserrat } from "next/font/google";
import { main_section_img } from "@/assets";
import {motion} from 'framer-motion'
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});
const Hero = () => {
  return (
    <section id="home">
      <div className=" flex justify-between items-center h-screen ">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#062d71] to-transparent  "></div>
          <motion.h2
            initial={{  opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            className={`${montserrat.className} absolute top-1/2 left-1/2 cursor-default transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-[0 1.2px 1.2px rgba(0, 0, 0, 0.8)] duration-300  hover:tracking-widest hover:text-gray-300`}
          >
            Your Local Neighbourhood Pharmacy
          </motion.h2>
        </div>
        <div className="absolute -z-10 w-full h-full overflow-hidden ">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full h-full"
          >
            <Image
              className="w-full h-full object-cover"
              src={main_section_img}
              alt="main-section-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
