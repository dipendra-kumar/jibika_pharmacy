import GetAppointment from "@/components/Home/GetAppointment";
import MainLayout from "@/hoc/MainLayout";
import React from "react";

const page = () => {
  return (
    <MainLayout className="py-32">
      <GetAppointment />;
    </MainLayout>
  );
};

export default page;
