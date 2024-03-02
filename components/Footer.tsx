import { PharmaLogo } from "@/assets";
import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242329] text-white py-4">
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-center lg:justify-between lg:items-start lg:gap-8">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <p className="font-bold tracking-wider text-sm lg:text-lg capitalize mb-2">
              Contact us
            </p>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <p className="text-xs lg:text-sm">+977-9851047834</p>
              <p className="text-xs lg:text-sm">+977-9806469216</p>
              <p className="text-xs lg:text-sm">jibikapharmacy@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:justify-self-center lg:gap-4">
            <Image
              src={PharmaLogo}
              alt="pharma_logo"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full mb-4 lg:mb-0"
            />
            <div className="text-xs lg:text-sm flex flex-col items-center">
              <h3 className="text-sm lg:text-base font-bold">
                Jibika Pharmacy & Health Clinic
              </h3>
              <p className="text-xs lg:text-sm">Buddhanagar-10, Kathmandu</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:justify-end">
            <p className="font-bold tracking-wider text-sm lg:text-lg capitalize mb-2">
              Follow us
            </p>
            <div className="flex space-x-2 lg:space-x-4">
              <a
                href="https://www.facebook.com/jibikapharmacy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="border rounded-full p-1 lg:p-2"
              >
                <FaFacebook className="text-sm lg:text-lg hover:text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/jibika_pharmacy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="border rounded-full p-1 lg:p-2"
              >
                <FaInstagram className="text-sm lg:text-lg hover:text-indigo-600" />
              </a>
              <a
                href="https://www.youtube.com/@jibikapharmacy4965"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="border rounded-full p-1 lg:p-2"
              >
                <FaYoutube className=" text-sm lg:text-lg hover:text-red-600" />
              </a>
              <a
                href="https://x.com/jibikapharmacy?s=11&t=dVEtJqFDZoxFRgsrUGFZqQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="border rounded-full p-1 lg:p-2"
              >
                <FaTwitter className=" text-sm lg:text-lg hover:text-blue-600" />
              </a>
              <a
                href="https://www.tiktok.com/@jibikapharmacy1?_t=8kIra4T1Gzv&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="border rounded-full p-1 lg:p-2"
              >
                <FaTiktok className="text-sm lg:text-lg hover:text-gray-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-b-2 mt-6 "></div>
        <p className="text-gray-500 mt-3 text-center text-xs lg:text-sm">
          <span>&copy;</span> 2024. Jibika Pharmacy and Health Clinic. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
