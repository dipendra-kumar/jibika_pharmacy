"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import HeadTitle from "../HeadTitle";
import {
  DefaultDoctor,
  DrAnilJoshi,
  DrArunSigdel,
  DrArvindBhushal,
  DrChandan,
  DrDipak,
} from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { fadeIn, textVariant } from "@/utils/motion";
import { useRouter } from "next/navigation";

interface DoctorProfile {
  avatar?: StaticImageData;
  name: string;
  designation: string;
  qualification: string;
  index: number;
}

const TopDoctors: React.FC = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/our-doctors");
  };
  const doctors = [
    {
      avatar: DrArvindBhushal,
      name: "Dr. Arbind Bhusal",
      qualification: "MBBS, MD",
      designation: "Consultant Neuropsychiatrist",
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
      avatar: DrChandan,
      name: "Dr. Chandan Baranwal",
      qualification: "MBBS, FCPS(ENT-HNS)",
      designation: "Consultant ENT-HNS",
    },
  ];

  return (
    <div className="px-10 md:px-40 my-20">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10">
        <HeadTitle
          title="Top Doctors"
          subtitle="Highly Qualified Professionals"
        />
        <motion.p
          variants={textVariant()}
          className="text-center mb-6 text-lg md:text-xl"
        >
          We take pride in presenting our top doctors who are highly qualified
          and experienced in their respective fields, providing exceptional care
          and expertise to our patients.
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          {doctors.map((doctor, index) => (
            <DoctorProfileCard
              index={index}
              key={doctor.name}
              avatar={doctor.avatar}
              name={doctor.name}
              qualification={doctor.qualification}
              designation={doctor.designation}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="mt-8 bg-primary hover:bg-secondary duration-300 text-white font-bold py-4 px-5 text-lg rounded"
            onClick={handleOnClick}
          >
            See All Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorProfileCard: React.FC<DoctorProfile> = ({
  avatar,
  name,
  designation,
  qualification,
  index,
}) => {
  return (
    <motion.div
      className="shadow-md border rounded-xl bg-white  overflow-hidden  min-w-[385px] min-h-fit"
      variants={fadeIn("up", "spring", index * 0.5, 1)}
    >
      <div className="relative group h-full flex flex-col">
        <Image
          className="object-cover w-full h-72"
          src={avatar ? avatar : DefaultDoctor}
          alt={name}
        />
        <div className="p-4">
          <h5 className="mb-1 text-xl font-bold">{name}</h5>
          <p className="text-sm text-[#069e32] font-semibold mb-2">
            {designation}
          </p>
          <p className="text-sm text-gray-500">{qualification}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(TopDoctors, "top_doctors");
