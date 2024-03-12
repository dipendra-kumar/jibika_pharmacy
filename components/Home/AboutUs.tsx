"use client";
import { About_1, About_2 } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import HeadTitle from "../HeadTitle";

const AboutUs: FC = () => {
  return (
    <div className=" w-full py-5 flex items-center justify-center h-screen md:h-[600px] ">
      <div className="w-[75%] h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-96">
          <div className="relative w-full h-96">
            <div className="absolute top-0 right-0 w-3/4 rounded-lg p-5 bg-white">
              <Image
                className="w-full rounded-lg "
                src={About_1}
                alt="about1"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/4  rounded-lg p-5 bg-white">
              <Image className="w-full" src={About_2} alt="about1" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <HeadTitle title="About Us" subtitle=" Get to Know About Us!" />
            <p className="text-secondary">
              Our pharmacy is dedicated to providing exceptional service and
              high-quality medications to our customers. With a focus on
              customer satisfaction and health, we strive to meet your
              pharmaceutical needs with care and professionalism.
            </p>
            <p className="mb-4 text-secondary">
              At our pharmacy, we understand the importance of trust and
              reliability when it comes to your health. Our team of experienced
              professionals is committed to offering personalized assistance and
              guidance on medications, ensuring that you receive the best
              possible care.
            </p>

            <p className="flex items-center gap-1 text-secondary">
              <FaCheckCircle className="text-primary-blue me-3" />
              Quality health care
            </p>
            <p className="flex items-center gap-1 text-secondary">
              <FaCheckCircle className="text-primary-blue me-3" />
              Only Qualified Doctors
            </p>
            <p className="flex items-center gap-1 text-secondary">
              <FaCheckCircle className="text-primary-blue me-3" />
              Medical Research Professionals
            </p>
            <a
              className="bg-blue-600 text-white rounded-full py-3 px-5 mt-3 max-w-fit"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
