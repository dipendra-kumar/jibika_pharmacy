"use client";
import React, { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  LayoutDashboard,
  Hospital,
  MessageSquareWarning,
  User,
  LayoutList,
  Calendar,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const AdminSidebar = () => {
  const [selected, setSelected] = useState<string>("");
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathnameParts = pathName.split("/");
    const routeName = pathnameParts[pathnameParts.length - 1];
    setSelected(routeName);
  }, [pathName]);

  const handleSelected = (routeName: string) => {
    setSelected(routeName);
    router.push(`/admin/${routeName}`);
  };
  if (
    pathName.includes("/admin/login") ||
    pathName.startsWith("/admin/register")
  ) {
    return null; // Hide the sidebar if the route matches
  }

  return (
    <Sidebar>
      <SidebarItem
        text="Dashboard"
        icon={<LayoutDashboard />}
        active={selected === "dashboard"}
        onItemClick={() => handleSelected("dashboard")}
      />
      <SidebarItem
        text="Doctors"
        icon={<Hospital />}
        active={selected === "doctors"}
        onItemClick={() => handleSelected("doctors")}
      />

      <SidebarItem
        text="Services"
        icon={<LayoutList />}
        active={selected === "services"}
        onItemClick={() => handleSelected("services")}
      />
      <SidebarItem
        text="Appointments"
        icon={<Calendar />}
        active={selected === "appointments"}
        onItemClick={() => handleSelected("appointments")}
      />
      <SidebarItem
        text="Feedback"
        icon={<MessageSquareWarning />}
        active={selected === "feedback"}
        onItemClick={() => handleSelected("feedback")}
      />
      {/* <SidebarItem
        text="Users"
        icon={<User />}
        active={selected === "users"}
        onItemClick={() => handleSelected("users")}

      /> */}
    </Sidebar>
  );
};

export default AdminSidebar;
