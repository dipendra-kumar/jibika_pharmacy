"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PharmaLogo } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const HeaderLink = ({
  linkTo,
  linkTitle,
}: {
  linkTo: string;
  linkTitle: string;
}) => {
  const [currentPath, setCurrentPath] = useState<string>("home");
  const pathName = usePathname();

  useEffect(() => {
    const path: string = pathName.split("/")[1];
    setCurrentPath(path);
  }, [pathName]);
  return (
    <Link
      href={linkTo}
      className={`duration-300 hover:text-green-500 ${
        currentPath == linkTo ? "font-bold text-green-500" : ""
      }`}
    >
      {linkTitle}
    </Link>
  );
};

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 55 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scroll(0, 0);
  };

  return (
    <div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className={` ${
          isFixed ? "fixed top-0" : "absolute"
        }  z-50 w-full h-28 flex items-center justify-center cursor-default bg-white shadow-lg`}
      >
        <div className="relative w-[90%] flex items-center justify-end">
          <Link
            href="home"
            className="flex items-center gap-3 absolute -left-1  justify-center "
            // onClick={scrollToHome}
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

          <div className="gap-5 text-sm md:text-xl  pr-10 text-[#062d71] hidden lg:flex">
            <HeaderLink linkTitle="Home" linkTo="home" />
            <HeaderLink linkTitle="Our Services" linkTo="our-services" />
            <HeaderLink linkTitle="Our Doctors" linkTo="our-doctors" />
            <HeaderLink linkTitle="Contact Us" linkTo="contact-us" />
          </div>
          <Link href="get-appointment">
            <button className="border bg-primary px-10 py-5 hover:bg-secondary duration-300 font-bold text-lg text-primary-blue hover:text-green-500">
              Get Appointment
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
