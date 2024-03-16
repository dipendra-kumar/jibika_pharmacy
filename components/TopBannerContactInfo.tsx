import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const TopBannerContactInfo: React.FC = () => {
  return (
    <div className="lg:flex sticky items-center justify-between w-full h-fit hidden px-12 py-1 bg-primary z-30">
      <div className="flex gap-5 ">
        <div className="flex items-center py-3">
          <FaMapMarkerAlt className="text-light" />
          <p className="ml-2 text-dark ">Buddhanagar-10, Kathmandu, Nepal</p>
        </div>
        <div className="flex items-center py-3">
          <FaClock className="text-light" />
          <p className="ml-2 text-dark ">Sun - Sat : 09.00 AM - 09.00 PM</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <FaPhoneAlt className="text-light" />
          <p className="ml-2 text-dark">+977-9851047834</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            className="rounded-full h-8 w-8 flex items-center justify-center bg-white text-blue-500"
            href="https://www.facebook.com/jibikapharmacy"
          >
            <FaFacebookF />
          </a>
          <a
            className="rounded-full h-8 w-8 flex items-center justify-center bg-white text-purple-500 p-1"
            href="https://www.instagram.com/jibika_pharmacy/"
          >
            <FaInstagram />
          </a>
          <a
            className="rounded-full h-8 w-8 flex items-center justify-center bg-white text-blue-400"
            href="https://x.com/jibikapharmacy?s=11&t=dVEtJqFDZoxFRgsrUGFZqQ"
          >
            <FaTwitter />
          </a>
          <a
            className="rounded-full h-8 w-8 flex items-center justify-center bg-white text-red-500 p-1"
            href="https://www.youtube.com/@jibikapharmacy4965"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBannerContactInfo;
