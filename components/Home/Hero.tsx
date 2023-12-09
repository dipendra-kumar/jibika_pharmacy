import React from "react";

import { Montserrat } from "next/font/google";
import { main_section_img } from "@/assets";
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#062d71] to-transparent "></div>
          <h2
            className={`${montserrat.className} absolute top-1/2 left-1/2 cursor-default transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-wider drop-shadow-[0 1.2px 1.2px rgba(0, 0, 0, 0.8)] duration-300   hover:tracking-widest hover:text-gray-300`}
          >
            Your Local Neighbourhood Pharmacy
          </h2>
        </div>
        <div className="absolute -z-10 w-full h-full overflow-hidden ">
          <Image
            className="w-full h-full object-cover"
            src={main_section_img}
            alt="main-section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
