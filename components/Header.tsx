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
  const pathName = usePathname();
  const [currentPath, setCurrentPath] = useState<string>(
    pathName.split("/")[1] || "home",
  );

  useEffect(() => {
    const path: string = pathName.split("/")[1];
    setCurrentPath(path || "home");
  }, [pathName]);
  return (
    <Link
      href={linkTo === "home" ? "/" : linkTo}
      className={`duration-300 hover:text-green-500 ${
        currentPath === linkTo ? "font-bold text-green-500" : ""
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
        }  z-50 flex h-28 w-full cursor-default items-center justify-center bg-white shadow-lg transition-all duration-300`}
      >
        <div className="relative flex w-[90%] items-center justify-end">
          <Link
            href=""
            className="absolute -left-1 flex items-center justify-center  gap-3 "
          >
            <div className="flex items-center justify-center p-2">
              <Image
                className="h-24 w-24 rounded-full shadow-2xl md:shadow-none  "
                src={PharmaLogo}
                alt="pharmacy_logo"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1
                className={`text-center text-2xl font-extrabold tracking-normal text-[#062d71] drop-shadow-2xl md:text-left md:text-3xl md:tracking-wider`}
              >
                Jibika Pharmacy <br />
              </h1>
              <h2 className="text-center text-2xl font-extrabold tracking-wider text-green-600">
                & Health Clinic
              </h2>
            </div>
          </Link>

          {/* desktop nav bar */}
          <div className="hidden items-center gap-5  pr-10 text-sm text-[#062d71] md:text-xl lg:flex">
            <HeaderLink linkTitle="Home" linkTo="home" />
            <HeaderLink linkTitle="Our Services" linkTo="our-services" />
            <HeaderLink linkTitle="Our Doctors" linkTo="our-doctors" />
            <HeaderLink linkTitle="Contact Us" linkTo="contact-us" />
            <Link href="get-appointment">
              <button className="border bg-primary px-10 py-5 text-lg font-bold text-primary-foreground duration-300 hover:bg-secondary">
                Get Appointment
              </button>
            </Link>
          </div>

          <div className="relative lg:hidden">
            <button className="p-2" onClick={handleSidebarOpen}>
              <HiBars3BottomRight className="text-4xl text-secondary" />
            </button>
            {isOpen && (
              <div className="fixed inset-y-0 right-0 z-50 flex w-3/4 flex-col items-center justify-center gap-10 bg-white p-10 text-2xl font-semibold md:w-1/2">
                <button
                  className="absolute right-6 top-6 p-2"
                  onClick={handleSidebarClose}
                >
                  <HiXCircle className="text-2xl text-secondary" size={42} />
                </button>

                <HeaderLink
                  linkTitle="Home"
                  linkTo="home"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Our Services"
                  linkTo="our-services"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Our Doctors"
                  linkTo="our-doctors"
                  onClick={handleSidebarClose}
                />
                <HeaderLink
                  linkTitle="Contact Us"
                  linkTo="contact-us"
                  onClick={handleSidebarClose}
                />
                <Link href="get-appointment">
                  <button className="border bg-primary px-10 py-5 text-lg font-bold text-primary-foreground duration-300 hover:bg-secondary">
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
