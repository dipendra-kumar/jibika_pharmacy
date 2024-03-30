"use client";
import { checkLogin } from "@/actions/auth";
import AdminSidebar from "@/components/AdminSidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkUser = async () => {
    const session = await checkLogin();
    if (!session) {
      setIsLoggedIn(false);
      return router.push("/admin/login");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {isLoggedIn && <AdminSidebar />}
      {children}
    </div>
  );
};

export default RootLayout;
