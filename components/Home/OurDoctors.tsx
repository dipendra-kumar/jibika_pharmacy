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
  DrShreeRamShah,
  MrHemant,
} from "@/assets";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import HeadTitle from "../HeadTitle";

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
  extraAttributes: string[];
  workPlace?: string;
}

const DoctorProfileCard: React.FC<DoctorProfile> = ({
  index,
  avatar,
  name,
  designation,
  qualification,
  extraAttributes,
  workPlace,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="shadow-md border rounded-xl bg-white max-w-sm  overflow-hidden md:min-h-[400px] md:max-h-[400px]"
    >
      <div className="relative group h-full flex flex-col">
        <Image
          className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500 "
          src={avatar ? avatar : DefaultDoctor}
          alt={name}
        />
        <div className=" absolute bottom-0 w-full flex flex-col items-center bg-[#fff]  text-white p-4 transition-all duration-300">
          <div className="text-xl font-bold mb-1 text-gray-800">{name}</div>
          <div className="text-sm text-[#069e32] text-center font-semibold">
            {designation}
          </div>
          {workPlace && (
            <div className="text-sm text-[#069e32] text-center">
              {workPlace}
            </div>
          )}
          <div className="text-sm text-gray-500 hidden group-hover:flex ">
            {qualification}
          </div>
          <div className="text-sm text-gray-500 hidden group-hover:flex ">
            {extraAttributes}
          </div>
        </div>
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
      workPlace: "Civil Service Hospital, Kathmandu",
      extraAttributes: ["NMC No:7007"],
    },
    {
      avatar: DrDipak,
      name: "Dr. Dipak Paudel",
      qualification: "MBBS, MD",
      designation: "Consultant Endocrinologist ",
      extraAttributes: ["NMC No:7311"],
      workPlace: "Civil Service Hospital, Kathmandu",
    },

    {
      avatar: DrChandan,
      name: "Dr. Chandan Baranwal",
      qualification: "MBBS, FCPS(ENT-HNS)",
      designation: "Consultant ENT-HNS ",
      extraAttributes: ["NMC No:6903"],
      workPlace: "Nepal Medicity Hospital, Kathmandu",
    },
    {
      avatar: DrArunSigdel,
      name: "Dr. Arun Sigdel",
      qualification: "MBBS (K.U), MS, Orthopedic (TUTH, IOM) ",
      designation: "Assistant Professor ",
      extraAttributes: ["NMC No:6920"],
      workPlace: "Civil Service Hospital, Kathmandu",
    },
    {
      avatar: DrShreeRamShah,
      name: "Dr. Shree Ram Prashad Shah",
      qualification: "MBBS, MD",
      designation: "Consultant Pediaerician ",
      extraAttributes: ["NMC No:10047"],
      workPlace: "Kanti Children Hospital, Kathmandu",
    },

    {
      avatar: DrAnilJoshi,
      name: "Mr. Anil Kumar Joshi",
      qualification: "BMLT, DPharma",
      designation: "Assistant Pharmacist",
      extraAttributes: ["NPC No: A-9339"],
      workPlace: "Jibika Pharmacy , Kathmandu",
    },
    {
      avatar: MrHemant,
      name: "Mr. Hemant Baduwal",
      qualification: "",
      designation: "Management Chief",
      extraAttributes: [""],
      workPlace: "Jibika Health Clinic , Kathmandu",
    },
  ];
  return (
    <div className="px-40 my-40">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:px-10 gap-5 ">
        <HeadTitle title="Doctors" subtitle="Our Experienced Doctors" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {doctors.map((doctor, index) => (
          <DoctorProfileCard
            index={index}
            key={doctor.name}
            avatar={doctor.avatar}
            name={doctor.name}
            qualification={doctor.qualification}
            designation={doctor.designation}
            workPlace={doctor.workPlace}
            extraAttributes={doctor.extraAttributes}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(OurDoctors, "our_doctors");
