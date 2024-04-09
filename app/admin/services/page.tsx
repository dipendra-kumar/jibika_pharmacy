import PageHeader from "@/components/PageHeader";
import UnderDevelopment from "@/components/UnderDevelopment";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full ">
      <PageHeader title="Services" />
      <UnderDevelopment />
    </div>
  );
};

export default page;
