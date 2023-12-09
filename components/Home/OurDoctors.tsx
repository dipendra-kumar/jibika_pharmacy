import React from "react";

import { Dancing_Script } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { DrAnilJoshi, DrArvindBhushal } from "@/assets";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface DoctorProfile {
  avatar: StaticImageData;
  name: string;
  designation: string;
  qualification: string;
  testimonial: string;
  extraAttributes: string[];
}

const DoctorProfileCard: React.FC<DoctorProfile> = ({
  avatar,
  name,
  designation,
  qualification,
  testimonial,
  extraAttributes,
}) => {
  return (
    <div className="p-5 shadow-xl rounded-xl text-center text-gray-500 max-w-sm mb-10">
      <Image className="w-32 h-32 rounded-full mx-auto" src={avatar} alt="" />
      <div className="text-sm mt-5">
        <p className="font-bold text-xl leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
          {name}
        </p>
        <p className=" text-black italic">{qualification}</p>
        <p>{designation}</p>
        {extraAttributes.map((attributes) => (
          <p key={attributes}>{attributes}</p>
        ))}
      </div>

      <p className="mt-2  text-gray-900 italic">&quot;{testimonial}&quot;</p>
    </div>
  );
};

const OurDoctors = () => {
  const doctors = [
    {
      avatar: DrArvindBhushal,
      name: "Dr. Arvind Bhushal",
      qualification: "MBBS, MD",
      designation: "Consultant Neuropsychiatrist ",
      extraAttributes: ["NMC No:7007"],
      testimonial:
        "As a Neuropsychiatrist, I strive to offer specialized care rooted in understanding and empathy. My aim is to create a safe space for patients, addressing their individual needs with tailored treatment plans. I am dedicated to supporting mental health and well-being, making a positive impact on each person's life.",
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
  ];
  return (
    <section id="our_doctors">
      <div>
        <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10 ">
          <h2
            className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
          >
            Our Doctors
          </h2>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {doctors.map((doctor) => (
            <DoctorProfileCard
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
    </section>
  );
};

export default OurDoctors;
