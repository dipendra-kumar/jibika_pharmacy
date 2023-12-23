import React from "react";

import { Dancing_Script } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import {
  DefaultDoctor,
  DrAnilJoshi,
  DrArvindBhushal,
  DrChandan,
  DrDipak,
  MrHemant,
} from "@/assets";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface DoctorProfile {
  avatar?: StaticImageData;
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
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        src={avatar ? avatar : DefaultDoctor}
        alt=""
      />
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
    <section id="our_doctors">
      <div className="p-5">
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
