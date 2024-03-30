"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import HeadTitle from "../../components/HeadTitle";
import DoctorProfileCard, {
  IDoctorProfile,
} from "@/components/DoctorProfileCard";
import { axiosClient } from "@/lib/axios";

const OurDoctors: React.FC = () => {
  const [doctors, setDoctors] = useState<IDoctorProfile[] | null>(null);

  const fetchDoctors = async () => {
    try {
      const response = await axiosClient.get("/doctors");
      setDoctors(response?.data?.message);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="md:px-40 px-1 my-40">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:px-10 gap-5 ">
        <HeadTitle
          title="Meet Our Doctors"
          subtitle="Providing Expert Care for Your Health"
        />
        <motion.p
          variants={textVariant()}
          className="text-center text-gray-700 text-lg md:text-xl"
        >
          Our team of experienced doctors is dedicated to providing high-quality
          medical care and personalized treatment plans tailored to your needs.
          With a focus on excellence and compassion, we strive to ensure the
          well-being and satisfaction of every patient.
        </motion.p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-10 ">
        {doctors &&
          doctors.map((doctor: IDoctorProfile, index: number) => (
            <DoctorProfileCard
              key={index}
              index={index}
              profileImage={doctor.profileImage}
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
