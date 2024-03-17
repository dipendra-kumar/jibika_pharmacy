"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PharmaLogo } from "@/assets";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import "./Header.css";
import useWindowSize from "@/utils/useWindowSize";
import { HiBars3BottomRight, HiXCircle } from "react-icons/hi2";

const HeaderLink = ({
  linkTo,
  linkTitle,
  onClick,
}: {
  linkTo: string;
  linkTitle: string;
  onClick?: () => void;
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
      onClick={onClick}
    >
      {linkTitle}
    </Link>
  );
};

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { width } = useWindowSize();
  const scrollPositionRef = useRef(0);

  const handleScroll = () => {
    const position = scrollPositionRef.current;
    if (width) {
      setIsFixed(position > 54 || width < 1024);
    }
  };

  useEffect(() => {
    const updateScrollPosition = () => {
      scrollPositionRef.current = window.scrollY;
      handleScroll();
    };

    if (typeof window !== "undefined") {
      updateScrollPosition();
      window.addEventListener("scroll", updateScrollPosition, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", updateScrollPosition);
      };
    }
  }, [width]);

  const handleSidebarOpen = () => {
    setIsOpen(true);
  };

  const handleSidebarClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <motion.div
        className={` ${
          isFixed ? "fixed top-0 " : " absolute bg-opacity-90 "
        }  z-50 w-full h-28 flex items-center justify-center cursor-default duration-300 transition-all bg-white shadow-lg`}
      >
        <div className="relative w-[90%] flex items-center justify-end">
          <Link
            href="home"
            className="flex items-center gap-3 absolute -left-1  justify-center "
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

          {/* desktop nav bar */}
          <div className="gap-5 text-sm md:text-xl  pr-10 text-[#062d71] hidden lg:flex items-center">
            <HeaderLink linkTitle="Home" linkTo="home" />
            <HeaderLink linkTitle="Our Services" linkTo="our-services" />
            <HeaderLink linkTitle="Our Doctors" linkTo="our-doctors" />
            <HeaderLink linkTitle="Contact Us" linkTo="contact-us" />
            <Link href="get-appointment">
              <button className="border bg-primary px-10 py-5 hover:bg-secondary duration-300 font-bold text-lg text-light">
                Get Appointment
              </button>
            </Link>
          </div>

          <div className="relative lg:hidden">
            <button className="p-2" onClick={handleSidebarOpen}>
              <HiBars3BottomRight className="text-4xl text-secondary" />
            </button>
            {isOpen && (
              <div className="fixed inset-y-0 right-0 bg-white w-3/4 md:w-1/2 z-50 p-10 flex flex-col gap-10 font-semibold justify-center items-center text-2xl">
                <button
                  className="absolute top-6 right-6 p-2"
                  onClick={handleSidebarClose}
                >
                  <HiXCircle className="text-2xl text-secondary" size={42} />
                </button>

                <HeaderLink
                  linkTitle="Home"
                  linkTo="/home"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Our Services"
                  linkTo="/our-services"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Our Doctors"
                  linkTo="/our-doctors"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Contact Us"
                  linkTo="/contact-us"
                  onClick={handleSidebarClose}
                />
                <Link href="get-appointment">
                  <button className="border bg-primary px-10 py-5 hover:bg-secondary duration-300 font-bold text-lg text-light">
                    Get Appointment
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
