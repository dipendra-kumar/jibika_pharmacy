"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Jibika Pharmacy & Health Clinic - Home";
    router.push("/home");
  }, []);
  return <div></div>;
};

export default page;
