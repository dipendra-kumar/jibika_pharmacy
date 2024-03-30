"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { DefaultDoctor } from "@/assets";

export interface IDoctorProfile {
  index: number;
  profileImage?: string;
  name: string;
  designation: string;
  qualification: string;
  extraAttributes: string;
  workPlace?: string;
  onSelect?: () => void;
}

const DoctorProfileCard: React.FC<IDoctorProfile> = ({
  index,
  profileImage,
  name,
  designation,
  qualification,
  extraAttributes,
  workPlace,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect ? onSelect() : "";
  };
  return (
    <motion.div
      className="shadow-md border rounded-xl bg-white  overflow-hidden  min-w-[350px] min-h-[520px] max-h-[500px] flex flex-col"
      variants={fadeIn("up", "tween", index * 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      onClick={handleClick}
    >
      <div className="relative group w-[350px] h-full flex flex-col">
        <Image
          className="object-fill h-80 "
          src={profileImage ? profileImage : DefaultDoctor}
          alt={name}
          height={500}
          width={500}
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

export default DoctorProfileCard;
