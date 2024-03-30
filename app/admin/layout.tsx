"use client";
import { checkLogin } from "@/actions/auth";
import AdminSidebar from "@/components/AdminSidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const checkUser = async () => {
    const session = await checkLogin();
    if (!session) {
      return router.push("/admin/login");
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default RootLayout;
