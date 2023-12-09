"use client";

import React from "react";

import { Anton } from "next/font/google";
import Image from "next/image";
import { PharmaLogo } from "@/assets";
import Link from "next/link";

const rubik_bubbles = Anton({
  subsets: ["latin"],
  weight: "400",
});

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
      className="duration-300 hover:text-[#099e33] hover:tracking-wider "
      onClick={handleScroll}
    >
      {linkTitle}
    </Link>
  );
};

const Header = () => {
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
    <div className="fixed z-50 w-full h-28 bg-[#fff] flex items-center p-5 justify-between shadow-xl cursor-default">
      <Link href="#home" className="flex items-center gap-3">
        <div className="flex items-center justify-center p-2">
          <Image
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
            src={PharmaLogo}
            alt="pharmacy_logo"
            width={200}
            height={200}
          />
        </div>
        <h1
          className={`${rubik_bubbles.className} text-2xl md:text-3xl text-[#062d71] tracking-widest text-center md:text-left`}
        >
          Jibika Pharmacy <span className="text-black">&</span> Health Clinic
        </h1>
      </Link>

      <div className="gap-10 text-sm md:text-xl font-bold pr-10 text-[#062d71] hidden md:flex">
        <HeaderLink linkTitle="About Us" linkTo="#about_us" />
        <HeaderLink linkTitle="Our Services" linkTo="#our_services" />
        <HeaderLink linkTitle="Our Doctors" linkTo="#our_doctors" />
      </div>
    </div>
  );
};

export default Header;
