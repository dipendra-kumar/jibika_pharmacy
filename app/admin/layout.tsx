"use client";
import React, { useEffect, useRef } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { redirect, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useAppDispatch } from "@/store/hooks";
import { fetchUser } from "@/store/slices/authSlice";
import AccessDenied from "@/components/AccessDenied";
import Cookies from "js-cookie";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch<AppDispatch>();
  const { authState, user } = useSelector((state: RootState) => state.auth);

  const pathName = usePathname();
  const userRef = useRef(false);

  useEffect(() => {
    const session = Cookies.get("session");
    if (session && userRef.current === false) {
      dispatch(fetchUser());
    }
    return () => {
      userRef.current = true;
    };
  }, []);

  if (
    pathName.includes("/admin/login") ||
    pathName.startsWith("/admin/register")
  ) {
    if (authState && user?.isAdmin) {
      return redirect("dashboard");
    }
    return <div>{children}</div>;
  }

  if (authState && !user?.isAdmin) {
    return <AccessDenied />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default RootLayout;
