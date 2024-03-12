import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const TopBannerContactInfo: React.FC = () => {
  return (
    <div className="lg:flex sticky items-center justify-between w-full h-fit hidden px-12 py-1 bg-secondary z-30">
      <div className="flex gap-5 ">
        <div className="flex items-center py-3">
          <FaMapMarkerAlt className="text-primary-green" />
          <p className="ml-2 text-secondary ">
            Buddhanagar-10, Kathmandu, Nepal
          </p>
        </div>
        <div className="flex items-center py-3">
          <FaClock className="text-primary-green" />
          <p className="ml-2 text-secondary ">
            Sun - Sat : 09.00 AM - 09.00 PM
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <FaPhoneAlt className="text-primary-green" />
          <p className="ml-2 text-secondary">+977-9851047834</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            className=" rounded-full h-8 w-8 flex items-center justify-center bg-white text-primary-green "
            href="#"
          >
            <FaFacebookF />
          </a>
          <a
            className=" rounded-full h-8 w-8 flex items-center justify-center bg-white text-primary-green "
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className=" rounded-full h-8 w-8 flex items-center justify-center bg-white text-primary-green p-1"
            href="#"
          >
            <FaLinkedinIn />
          </a>
          <a
            className=" rounded-full h-8 w-8 flex items-center justify-center bg-white text-primary-green p-1"
            href="#"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBannerContactInfo;
