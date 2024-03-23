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
  DrSureshMaharjan,
  MrHemant,
} from "@/assets";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import HeadTitle from "../../components/HeadTitle";

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
      className="shadow-md border rounded-xl bg-white  overflow-hidden  min-w-[385px] min-h-[500px] flex flex-col"
      variants={fadeIn("up", "tween", index * 0.25, 0.75)}
    >
      <div className="relative group w-96  h-full flex flex-col">
        <Image
          className="object-cover w-full h-72 "
          src={avatar ? avatar : DefaultDoctor}
          alt={name}
        />
        <div className="px-4 py-6  flex flex-col  text-left">
          <h5 className="mb-1 text-xl font-bold">{name}</h5>
          <p className="text-sm text-[#069e32] font-semibold mb-2">
            {designation}
          </p>
          <p className="text-sm text-gray-500">{workPlace}</p>
          <p className="text-sm text-gray-500">{qualification}</p>
          <p className="text-sm text-gray-500">{extraAttributes}</p>
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
      avatar: DrArunSigdel,
      name: "Dr. Arun Sigdel",
      qualification: "MBBS (K.U), MS, Orthopedic (TUTH, IOM) ",
      designation: "Assistant Professor ",
      extraAttributes: ["NMC No:6920"],
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
      avatar: DrShreeRamShah,
      name: "Dr. Shree Ram Prashad Shah",
      qualification: "MBBS, MD",
      designation: "Consultant Pediaerician ",
      extraAttributes: ["NMC No:10047"],
      workPlace: "Kanti Children Hospital, Kathmandu",
    },
    // {
    //   // avatar: DrSureshMaharjan,
    //   name: "Dr. Rakesh Kumar Shah",
    //   qualification: "MBBS, MS",
    //   designation: "Choletrol Surgeon",
    //   extraAttributes: [""],
    //   workPlace: "Jibika Health Clinic, Kathmandu",
    // },
    {
      avatar: DrSureshMaharjan,
      name: "Dr. Suresh Maharjan",
      qualification: "MBBS, MS",
      designation: "General Surgery ",
      extraAttributes: ["NMC No:16960"],
      workPlace: "Bir Hospital, Kathmandu",
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
    <div className="md:px-40 px-10 my-40">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:px-10 gap-5 ">
        <HeadTitle
          title="Meet Our Doctors"
          subtitle="Providing Expert Care for Your Health"
        />
        <p className="text-center text-gray-700  text-lg md:text-xl">
          Our team of experienced doctors is dedicated to providing high-quality
          medical care and personalized treatment plans tailored to your needs.
          With a focus on excellence and compassion, we strive to ensure the
          well-being and satisfaction of every patient.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-10 ">
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
