"use client";

import { checkLogin } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const loginCheck = async () => {
    const isLoggedIn = await checkLogin();
    if (isLoggedIn) {
      router.push("/admin/dashboard");
    }
  };
  useEffect(() => {
    loginCheck();
  }, []);
  return <div></div>;
};

export default Page;
