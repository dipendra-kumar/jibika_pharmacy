import AdminSidebar from "@/components/AdminSidebar";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { getSession } from "@/lib/lib";
import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }
  return (
    <div className="flex w-full h-screen ">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
