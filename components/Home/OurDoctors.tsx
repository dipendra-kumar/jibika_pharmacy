"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import {
  DefaultDoctor,
  DrAnilJoshi,
  DrArunSigdel,
  DrArvindBhushal,
  DrChandan,
  DrDipak,
  MrHemant,
} from "@/assets";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface DoctorProfile {
  index: number;
  avatar?: StaticImageData;
  name: string;
  designation: string;
  qualification: string;
  testimonial: string;
  extraAttributes: string[];
}

const DoctorProfileCard: React.FC<DoctorProfile> = ({
  index,
  avatar,
  name,
  designation,
  qualification,
  testimonial,
  extraAttributes,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="shadow-md border rounded-xl bg-white max-w-sm  relative overflow-hidden md:min-h-[450px] md:max-h-[450px]"
    >
      {/* Profile Image */}
      <div className="relative h-60 mb-2">
        <Image
          className="object-cover w-full h-full"
          src={avatar ? avatar : DefaultDoctor}
          alt={name}
        />
        {/* Details Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-20 text-white p-4">
          <div className="text-xl font-bold mb-1">{name}</div>
          <div className="text-sm">{designation}</div>
          <div className="text-sm">{qualification}</div>
          <div className="text-sm">{extraAttributes}</div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="text-sm text-black italic px-5 py-2 text-justify">
        {testimonial}
      </div>
    </motion.div>
  );
};

const OurDoctors = () => {
  const doctors = [
    {
      avatar: DrArvindBhushal,
      name: "Dr. Arbind Bhusal",
      qualification: "MBBS, MD",
      designation: "Consultant Neuropsychiatrist ",
      extraAttributes: ["NMC No:7007"],
      testimonial:
        "As a Neuropsychiatrist, I strive to offer specialized care rooted in understanding and empathy. My aim is to create a safe space for patients, addressing their individual needs with tailored treatment plans. I am dedicated to supporting mental health and well-being, making a positive impact on each person's life.",
    },
    {
      avatar: DrDipak,
      name: "Dr. Dipak Paudel",
      qualification: "MBBS, MD",
      designation: "Consultant Endocrinologist ",
      extraAttributes: ["NMC No:7311"],
      testimonial:
        "As an Endocrinologist, my passion lies in restoring hormonal balance and improving lives. I am committed to providing comprehensive care, utilizing the latest advancements in endocrinology to diagnose and manage a wide spectrum of hormonal disorders. My goal is to empower patients through education and personalized treatment strategies, ensuring their well-being and long-term health.",
    },

    {
      avatar: DrChandan,
      name: "Dr. Chandan Baranwal",
      qualification: "MBBS, FCPS(ENT-HNS)",
      designation: "Consultant ENT-HNS ",
      extraAttributes: ["NMC No:6903"],
      testimonial:
        "Being an ENT-HNS specialist, my focus is on delivering precise and compassionate care to address ear, nose, and throat ailments. With a blend of expertise and innovation, I strive to offer advanced solutions and surgical interventions when necessary. My aim is to enhance the quality of life for my patients, fostering better hearing, breathing, and overall wellness.",
    },
    {
      avatar: DrArunSigdel,
      name: "Dr. Arun Sigdel",
      qualification: "MBBS (K.U), MS, Orthopedic (TUTH, IOM) ",
      designation: "Consultant Orthopedic ",
      extraAttributes: [""],
      testimonial:
        "As an orthopedic specialist, I'm dedicated to restoring mobility and enhancing quality of life for my patients. With a focus on cutting-edge treatments and compassionate care, I strive to empower individuals on their journey to optimal musculoskeletal health.",
    },
    {
      name: "Dr. Shree Ram Prashad Shah",
      qualification: "MBBS, MD",
      designation: "Consultant Pediaerician ",
      extraAttributes: ["NMC No:10047"],
      testimonial:
        "As a Pediatrician, my dedication revolves around nurturing the health and development of children. I am committed to providing families with guidance, support, and medical expertise from infancy through adolescence. My passion lies in ensuring each child's growth, advocating for preventive care, and addressing any health concerns with compassion and expertise.",
    },

    {
      avatar: DrAnilJoshi,
      name: "Mr. Anil Kumar Joshi",
      qualification: "BMLT, DPharma",
      designation: "Pharmacist ",
      extraAttributes: ["NPC No: A-9339"],
      testimonial:
        "As a dedicated Pharmacist and Pharmacy Owner, I am committed to providing comprehensive healthcare solutions. My approach combines expertise and empathy to ensure each patient receives personalized care. It's my privilege to support and contribute to the well-being of those I serve.",
    },
    {
      avatar: MrHemant,
      name: "Mr. Hemant Baduwal",
      qualification: "",
      designation: "Management Chief",
      extraAttributes: [""],
      testimonial:
        "As the Management Chief, I'm dedicated to ensuring top-quality service, seamless operations, and customer-centric care at our pharmacy. My focus is on excellence, efficiency, and the well-being of our patrons.",
    },
  ];
  return (
    <div className="p-5">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10 ">
        <motion.h2
          variants={textVariant()}
          className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize text-center duration-300 hover:tracking-wider cursor-default`}
        >
          Meet Our Team
        </motion.h2>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {doctors.map((doctor, index) => (
          <DoctorProfileCard
            index={index}
            key={doctor.name}
            avatar={doctor.avatar}
            name={doctor.name}
            qualification={doctor.qualification}
            designation={doctor.designation}
            testimonial={doctor.testimonial}
            extraAttributes={doctor.extraAttributes}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(OurDoctors, "our_doctors");
