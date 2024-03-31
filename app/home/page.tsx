"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/hoc/MainLayout";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  );
};

export default page;
