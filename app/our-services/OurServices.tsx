"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Nunito_Sans } from "next/font/google";
import {
  ECGImg,
  EEGImg,
  HomeSampleCollection,
  USGImg,
  VaccinationImg,
  firstAidDressing,
  labImg,
  pharmaImg,
  xRayImg,
} from "@/assets";
import Image, { StaticImageData } from "next/image";

import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import HeadTitle from "../../components/HeadTitle";

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
      className="block min-h-[425px] rounded-lg bg-white text-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          className="h-full w-full rounded-t-lg object-cover"
          src={icon.src}
          alt={`${title}-service`}
          fill
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
    {
      icon: HomeSampleCollection,
      title: "Home Sample Collection",
      description:
        "We are providing the home blood sample collection as our service, to ensure maximum hospitality of our patients near us.",
    },
  ];

  return (
    <div className="my-40 px-10 md:px-40">
      <div className="flex w-full flex-col items-center justify-center p-5 lg:p-10">
        <HeadTitle title="Our Services" subtitle="Health Care Solutions" />
        <p className="mb-8 text-center text-lg text-gray-700 md:text-xl">
          At our health care center, we provide a wide range of services
          tailored to meet your medical needs. From diagnostic tests to advanced
          imaging procedures, our dedicated team is committed to ensuring your
          well-being and providing comprehensive care solutions.
        </p>
        <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-3 lg:grid-cols-3">
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
    </div>
  );
};

export default SectionWrapper(OurServices, "our_services");
