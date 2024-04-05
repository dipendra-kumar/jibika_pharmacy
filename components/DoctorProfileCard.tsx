"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { DefaultDoctor } from "@/assets";
import { IDoctorProfile } from "@/@types";

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
      className="flex max-h-[500px] min-h-[520px] min-w-[350px]  flex-col  overflow-hidden rounded-xl border bg-white shadow-md"
      variants={fadeIn("up", "spring", index * 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      onClick={handleClick}
    >
      <div className="group relative flex h-full w-[350px] flex-col">
        <Image
          className="h-80 object-fill "
          src={profileImage ? profileImage : DefaultDoctor}
          alt={name}
          height={500}
          width={500}
        />
        <div className="flex flex-col  px-4 py-6  text-left">
          <h5 className="mb-1 text-xl font-bold">{name}</h5>
          <p className="mb-2 text-sm font-semibold text-[#069e32]">
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
