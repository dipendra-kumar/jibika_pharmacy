import OurServices from "@/app/our-services/OurServices";
import React from "react";
import ContactUs from "@/app/contact-us/ContactUs";
import MainLayout from "@/hoc/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <OurServices />
      <ContactUs />
    </MainLayout>
  );
};

export default page;
