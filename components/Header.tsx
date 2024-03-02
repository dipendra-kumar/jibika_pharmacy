"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PharmaLogo } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";

const HeaderLink = ({
  linkTo,
  linkTitle,
}: {
  linkTo: string;
  linkTitle: string;
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Link
      href={linkTo}
      onClick={handleScroll}
      className="duration-300 hover:text-[#099e33] hover:tracking-wider w-36 text-center  "
    >
      {linkTitle}
    </Link>
  );
};

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0;

      if (scrollPosition > scrollThreshold) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.01, ease: "linear", delay: 0 }}
      className={`fixed  z-50 w-full h-28 flex items-center justify-center cursor-default duration-500  ${
        isHeaderFixed ? "top-0 transition-all bg-white shadow-2xl" : "x "
      }`}
      id="nav_bar"
    >
      <div
        className={` relative w-[90%] h-24 flex items-center p-5 justify-end bg-white rounded-full ${
          isHeaderFixed ? "shadow-none" : "shadow-xl"
        }`}
      >
        <Link
          href="#home"
          className="flex items-center gap-3 absolute -left-1  justify-center "
          onClick={scrollToHome}
        >
          <div className="flex items-center justify-center p-2">
            <Image
              className="w-24 h-24 rounded-full shadow-2xl md:shadow-none  "
              src={PharmaLogo}
              alt="pharmacy_logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`text-2xl md:text-3xl text-[#062d71] tracking-normal md:tracking-wider font-extrabold text-center md:text-left drop-shadow-2xl`}
            >
              Jibika Pharmacy <br />
            </h1>
            <h2 className="text-green-600 text-2xl tracking-wider font-extrabold text-center">
              & Health Clinic
            </h2>
          </div>
        </Link>

        <div className="gap-5 text-sm md:text-xl font-bold pr-10 text-[#062d71] hidden lg:flex">
          <HeaderLink linkTitle="Our Services" linkTo="#our_services" />
          <HeaderLink linkTitle="Our Doctors" linkTo="#our_doctors" />
          <HeaderLink linkTitle="Contact Us" linkTo="#contact_us" />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
