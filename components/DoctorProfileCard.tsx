import Image from "next/image";
import { DefaultDoctor } from "@/assets";
import { IDoctorProfile } from "@/types";

const DoctorProfileCard: React.FC<IDoctorProfile> = ({
  profileImage,
  name,
  designation,
  qualification,
  extraAttributes,
  workPlace,
}) => {
  return (
    <div className="flex max-h-[480px] min-h-[480px] min-w-[350px] flex-col  overflow-hidden  rounded-md border bg-white shadow-md  ">
      <div className="group relative flex h-full w-[350px] flex-col">
        <Image
          className="h-80 w-full object-cover "
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
