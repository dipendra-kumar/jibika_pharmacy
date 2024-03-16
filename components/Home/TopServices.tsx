"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import HeadTitle from "../HeadTitle";
import {
  FaFlask,
  FaXRay,
  FaEye,
  FaHeartbeat,
  FaCapsules,
  FaVideo,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";

import { fadeIn, textVariant } from "@/utils/motion";
import { useRouter } from "next/navigation";

interface Service {
  index: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const HomeServiceCard: React.FC<Service> = ({
  index,
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="block rounded-lg bg-dark shadow-sm min-h-[325px] min-w-[200px] text-black"
    >
      <div className="flex items-center justify-center h-52 text-secondary">
        {icon}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {title}
        </h5>
        <p className="text-base text-neutral-600 mb-4">{description}</p>
      </div>
    </motion.div>
  );
};

const TopServices: React.FC = () => {
  const router = useRouter();
  const serviceData = [
    {
      icon: <FaCapsules size={96} color="#FF5733" />,
      title: "Pharmacy",
      description:
        "Experience personalized care and access to a wide range of medications at our pharmacy.",
    },
    {
      icon: <BiTestTube size={96} color="#FFC300" />,
      title: "Lab Tests",
      description:
        "Unlock the secrets of your health with our state-of-the-art lab tests.",
    },
    {
      icon: <FaXRay size={96} color="#581845" />,
      title: "X-Ray",
      description:
        "Peek inside your body and discover the invisible with our advanced X-Ray services.",
    },
    {
      icon: <FaEye size={96} color="#0C1C90" />,
      title: "USG",
      description:
        "Capture the unseen with our cutting-edge ultrasound scans for precise diagnosis.",
    },
    {
      icon: <FaHeartbeat size={96} color="#C70039" />,
      title: "ECG",
      description:
        "Listen to your heart's rhythm and detect irregularities with our ECG monitoring.",
    },
    {
      icon: <FaHandHoldingHeart size={96} color="#008080" />,
      title: "Home Care",
      description:
        "Receive compassionate care and assistance with daily activities through our home care services.",
    },
  ];

  const handleOnClick = () => {
    router.push("/our-services");
  };

  return (
    <div className="px-10 md:px-40 my-40">
      <div className="w-full  flex flex-col items-center justify-center p-5 lg:p-10">
        <HeadTitle
          title="Our Services"
          subtitle="Health Care Solutions We Provide"
        />
        <motion.p
          variants={textVariant()}
          className="text-center text-gray-600 mb-8 text-lg lg:text-xl "
        >
          At our health center, we offer a wide variety of services aimed at
          providing comprehensive care and promoting wellness. From advanced
          diagnostics to personalized treatments, our team is dedicated to
          ensuring your health and well-being.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 items-center justify-center mt-10">
          {serviceData.map((service, index) => (
            <HomeServiceCard
              index={index}
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <button
          className="mt-8 bg-primary hover:bg-secondary duration-300 text-white font-bold py-4 px-5 text-lg rounded"
          onClick={handleOnClick}
        >
          Explore All Services
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(TopServices, "home");
