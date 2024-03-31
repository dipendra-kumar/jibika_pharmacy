import React from "react";
import { redirect } from "next/navigation";
import MainLayout from "@/hoc/MainLayout";
import UnderDevelopment from "@/components/UnderDevelopment";

const page = () => {
  const redirectToLanding = () => {
    return redirect("/");
  };

  redirectToLanding();

  return (
    <div>
      <UnderDevelopment />
    </div>
  );
};

export default page;
