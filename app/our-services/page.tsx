import OurServices from "@/app/our-services/OurServices";
import React from "react";
import ContactUs from "@/app/contact-us/ContactUs";
import MainLayout from "@/hoc/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Jibika Pharmacy",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

const page = () => {
  return (
    <MainLayout>
      <OurServices />
      <ContactUs />
    </MainLayout>
  );
};

export default page;
