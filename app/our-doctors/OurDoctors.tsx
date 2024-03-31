"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import HeadTitle from "../../components/HeadTitle";
import DoctorProfileCard, {
  IDoctorProfile,
} from "@/components/DoctorProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import Loading from "@/components/Loading";
import { fetchDoctors } from "@/store/slices/doctorSlice";

const OurDoctors: React.FC = () => {
  const doctorRef = useRef(false);
  const dispatch = useDispatch<AppDispatch>();
  const doctors = useSelector((state: RootState) => state.doctors.data);
  const loading = useSelector((state: RootState) => state.doctors.loading);
  useEffect(() => {
    if (doctorRef.current === false) {
      dispatch(fetchDoctors());
    }
    return () => {
      doctorRef.current = true;
    };
  }, [doctors]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-40 px-1 md:px-40">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5 lg:px-10 ">
        <HeadTitle
          title="Meet Our Doctors"
          subtitle="Providing Expert Care for Your Health"
        />
        <motion.p
          variants={textVariant()}
          className="text-center text-lg text-gray-700 md:text-xl"
        >
          Our team of experienced doctors is dedicated to providing high-quality
          medical care and personalized treatment plans tailored to your needs.
          With a focus on excellence and compassion, we strive to ensure the
          well-being and satisfaction of every patient.
        </motion.p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 ">
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
