import OurDoctors from "@/app/our-doctors/OurDoctors";
import GetAppointment from "@/components/Home/GetAppointment";
import MainLayout from "@/hoc/MainLayout";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Doctors - Jibika Pharmacy",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

const page = () => {
  return (
    <MainLayout>
      <OurDoctors />
      <GetAppointment />
    </MainLayout>
  );
};

export default page;
