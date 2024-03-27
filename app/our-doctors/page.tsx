import OurDoctors from "@/app/our-doctors/OurDoctors";
import GetAppointment from "@/components/Home/GetAppointment";
import MainLayout from "@/hoc/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout>
      <OurDoctors />
      <GetAppointment />
    </MainLayout>
  );
};

export default page;
