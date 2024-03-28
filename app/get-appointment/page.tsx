import GetAppointment from "@/components/Home/GetAppointment";
import MainLayout from "@/hoc/MainLayout";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Appointment - Jibika Pharmacy",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

const page = () => {
  return (
    <MainLayout className="py-32">
      <GetAppointment />;
    </MainLayout>
  );
};

export default page;
