"use client";
import React, { useEffect } from "react";
import { Montserrat } from "next/font/google";
import { main_section_img } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, zoomIn } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchDoctors } from "@/store/slices/doctorSlice";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
});
const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getDoctors = async () => {
    await dispatch(fetchDoctors());
  };
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2e2e2e] to-transparent"></div>

        {/* Heading */}
        <motion.h2
          variants={zoomIn(0.3, 0.7)}
          className={`${montserrat.className} relative z-10 text-center text-4xl font-extrabold uppercase tracking-wider text-white sm:text-6xl lg:text-8xl`}
        >
          Your Local Neighbourhood Pharmacy
        </motion.h2>
      </div>
      <div className="absolute -z-30 h-full w-full overflow-hidden">
        <div className="h-full w-full">
          <Image
            src={main_section_img}
            alt="main-section-image"
            className="duration-1000] h-full w-full object-cover opacity-0 transition-opacity"
            onLoad={(event) =>
              event.currentTarget.classList.remove("opacity-0")
            }
          />
        </div>
      </div>

      <Link href="get-appointment">
        <button className=" absolute bottom-10 left-1/2 flex -translate-x-1/2 transform rounded-full border bg-primary px-10 py-5 text-lg font-bold text-primary-foreground duration-300 hover:bg-secondary lg:hidden ">
          Shedule Appointment
        </button>
      </Link>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
