import Image from "next/image";
import { DefaultDoctor } from "@/assets";
import { IDoctorProfile } from "@/components/DoctorProfileCard";

const DoctorProfileCard: React.FC<IDoctorProfile> = ({
  profileImage,
  name,
  designation,
  qualification,
  extraAttributes,
  workPlace,
}) => {
  return (
    <div className="flex max-h-[500px] min-h-[520px] min-w-[350px] cursor-pointer flex-col  overflow-hidden  rounded-xl border bg-white duration-200 hover:scale-105 hover:shadow-xl">
      <div className="group relative flex h-full w-[350px] flex-col">
        <Image
          className="h-80 object-fill "
          src={profileImage ? profileImage : DefaultDoctor}
          alt={name}
          height={500}
          width={500}
        />
        <div className="flex flex-col px-4 py-6  text-left">
          <h5 className="mb-1 text-xl font-bold">{name}</h5>
          <p className="mb-2 text-sm font-semibold text-[#069e32]">
            {designation}
          </p>
          <p className="text-sm text-gray-500">{workPlace}</p>
          <p className="text-sm text-gray-500">{qualification}</p>
          <p className="text-sm text-gray-500">{extraAttributes}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
