import Home from "@/components/Home";
import MainLayout from "@/hoc/MainLayout";
import React from "react";
import type { Metadata } from "next";
import { MessengerChat } from "react-messenger-chat-plugin";

export const metadata: Metadata = {
  title: "Home - Jibika Pharmacy & Health Clinic",
  description:
    "Jibika Pharmacy  & Health Clinic is multi-speciality health clinic in Nepal. ",
};

const page = () => {
  return (
    <MainLayout>
      <Home />
      {/* <MessengerChat pageId="" /> */}
    </MainLayout>
  );
};

export default page;
