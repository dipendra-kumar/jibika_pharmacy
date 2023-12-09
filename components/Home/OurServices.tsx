import React, { ReactNode } from "react";
import { FaAccessibleIcon } from "react-icons/fa";

import { Dancing_Script } from "next/font/google";
import {
  ECGImg,
  EEGImg,
  USGImg,
  VaccinationImg,
  firstAidDressing,
  labImg,
  pharmaImg,
  xRayImg,
} from "@/assets";
import Image, { StaticImageData } from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Service {
  title: string;
  description: string;
  icon: StaticImageData;
}

const ServiceCard: React.FC<Service> = ({ title, description, icon }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] text-black">
      <div className="relative overflow-hidden h-52">
        <Image
          className="object-cover w-full h-full rounded-t-lg"
          src={icon}
          alt={`${title}-service`}
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <section id="our_services">
      <div className="w-full flex flex-col items-center justify-center p-5 lg:p-10">
        <h2
          className={`${dancingScript.className} text-4xl lg:text-7xl font-bold capitalize mb-6 text-center duration-300 hover:tracking-wider cursor-default`}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4  items-center justify-center">
          <ServiceCard
            icon={labImg}
            title="Lab Tests"
            description="We offer a wide range of laboratory tests catering to various medical needs and diagnostic requirements, ensuring precise and detailed analysis for your health concerns."
          />
          <ServiceCard
            icon={xRayImg}
            title="X-Ray"
            description="Our facility conducts diverse X-Ray examinations, utilizing advanced imaging technology to assist in identifying and diagnosing different medical conditions with precision and accuracy."
          />
          <ServiceCard
            icon={USGImg}
            title="USG"
            description="Our ultrasound services cover a comprehensive array of diagnostic scans, providing detailed imaging to aid in understanding and diagnosing health issues effectively."
          />
          <ServiceCard
            icon={ECGImg}
            title="ECG"
            description="Our ECG services help in assessing heart health by recording electrical impulses, aiding in the detection and analysis of various cardiac conditions."
          />
          <ServiceCard
            icon={EEGImg}
            title="EEG"
            description="Our EEG services specialize in monitoring brain activity, assisting in diagnosing neurological conditions and disorders for comprehensive care."
          />
          <ServiceCard
            icon={pharmaImg}
            title="Pharmacy"
            description="Our pharmacy services offer a wide range of medications and healthcare products, ensuring access to essential supplies for your health and wellness needs."
          />
          <ServiceCard
            icon={firstAidDressing}
            title="First Aid & Dressing"
            description="Our dedicated first aid and dressing services provide immediate care and support for minor injuries, ensuring proper wound management and initial medical attention."
          />
          <ServiceCard
            icon={VaccinationImg}
            title="Vaccination"
            description="Our vaccination services offer a comprehensive range of immunizations, safeguarding against various diseases and promoting individual and community health."
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
