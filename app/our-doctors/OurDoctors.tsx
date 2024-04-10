"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { fadeIn } from "@/utils/motion";
import HeadTitle from "../../components/HeadTitle";
import DoctorProfileCard from "@/components/DoctorProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import Loading from "@/components/Loading";
import { fetchDoctors } from "@/store/slices/doctorSlice";
import { IDoctors } from "@/types";

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

  return (
    <div className="my-40 px-1 md:px-28">
      <div className="flex w-full flex-col items-center justify-center gap-5 p-5 lg:px-10 ">
        <HeadTitle
          title="Meet Our Doctors"
          subtitle="Providing Expert Care for Your Health"
        />
        <p className="text-center text-lg text-gray-700 md:text-xl">
          Our team of experienced doctors is dedicated to providing high-quality
          medical care and personalized treatment plans tailored to your needs.
          With a focus on excellence and compassion, we strive to ensure the
          well-being and satisfaction of every patient.
        </p>
      </div>
      {doctors.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          {doctors.map((doctor: IDoctors, index: number) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.3 * index, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <DoctorProfileCard
                index={index}
                profileImage={doctor.profileImage}
                name={doctor.name}
                qualification={doctor.qualification}
                designation={doctor.designation}
                workPlace={doctor.workPlace}
                extraAttributes={doctor.extraAttributes}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        loading && (
          <div className="flex h-full w-full items-center justify-center p-20">
            <Loading className={"text-5xl text-black"} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(OurDoctors, "our_doctors");
