import React from "react";
import ContactUs from "./ContactUs";
import MainLayout from "@/hoc/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Jibika Pharmacy",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

const page = () => {
  return (
    <MainLayout className="p-10 py-28">
      <ContactUs />
    </MainLayout>
  );
};

export default page;
