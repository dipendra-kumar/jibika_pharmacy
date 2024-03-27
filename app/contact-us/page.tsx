import React from "react";
import ContactUs from "./ContactUs";
import MainLayout from "@/hoc/MainLayout";

const page = () => {
  return (
    <MainLayout className="p-10 py-28">
      <ContactUs />
    </MainLayout>
  );
};

export default page;
