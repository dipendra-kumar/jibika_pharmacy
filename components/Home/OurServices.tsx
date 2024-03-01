"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import {
  ECGImg,
  EEGImg,
  USGImg,
  VaccinationImg,
  firstAidDressing,
  labImg,
  pharmaImg,
  xRayImg,
} from "@/assets";
import Image, { StaticImageData } from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";

interface Service {
  index: number;
  title: string;
  description: string;
  icon: StaticImageData;
}

const ServiceCard: React.FC<Service> = ({
  index,
  title,
  description,
  icon,
}) => {
  const controls = useAnimation();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-black"
    >
      <div className="relative overflow-hidden h-52">
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src={icon.src}
          alt={`${title}-service`}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};
const OurServices = () => {
  const serviceData = [
    {
      icon: labImg,
      title: "Lab Tests",
      description:
        "We offer a wide range of laboratory tests catering to various medical needs and diagnostic requirements, ensuring precise and detailed analysis for your health concerns.",
    },
    {
      icon: xRayImg,
      title: "X-Ray",
      description:
        "Our facility conducts diverse X-Ray examinations, utilizing advanced imaging technology to assist in identifying and diagnosing different medical conditions with precision and accuracy.",
    },
    {
      icon: USGImg,
      title: "USG",
      description:
        "Our ultrasound services cover a comprehensive array of diagnostic scans, providing detailed imaging to aid in understanding and diagnosing health issues effectively.",
    },
    {
      icon: ECGImg,
      title: "ECG",
      description:
        "Our ECG services help in assessing heart health by recording electrical impulses, aiding in the detection and analysis of various cardiac conditions.",
    },
    {
      icon: EEGImg,
      title: "EEG",
      description:
        "Our EEG services specialize in monitoring brain activity, assisting in diagnosing neurological conditions and disorders for comprehensive care.",
    },
    {
      icon: pharmaImg,
      title: "Pharmacy",
      description:
        "Our pharmacy services offer a wide range of medications and healthcare products, ensuring access to essential supplies for your health and wellness needs.",
    },
    {
      icon: firstAidDressing,
      title: "First Aid & Dressing",
      description:
        "Our dedicated first aid and dressing services provide immediate care and support for minor injuries, ensuring proper wound management and initial medical attention.",
    },
    {
      icon: VaccinationImg,
      title: "Vaccination",
      description:
        "Our vaccination services offer a comprehensive range of immunizations, safeguarding against various diseases and promoting individual and community health.",
    },
  ];

  return (
    <section id="our_services">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10">
        <motion.h2
          variants={textVariant()}
          className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize text-center duration-300 hover:tracking-wider cursor-default`}
        >
          Explore Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4 items-center justify-center mt-6">
          {serviceData.map((service, index) => (
            <ServiceCard
              index={index}
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(OurServices, "our_services");
