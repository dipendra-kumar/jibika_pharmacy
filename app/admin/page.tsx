"use client";

import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { authState } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (authState) {
      redirect("/admin/dashboard");
    }
  }, [authState]);
  return <div></div>;
};

export default Page;
