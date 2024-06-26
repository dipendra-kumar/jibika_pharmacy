"use client";
import React, { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  LayoutDashboard,
  Hospital,
  MessageSquareWarning,
  LayoutList,
  Calendar,
  Newspaper,
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
        text="Blogs"
        icon={<Newspaper />}
        active={selected === "blogs"}
        onItemClick={() => handleSelected("blogs")}
      />
      <SidebarItem
        text="Appointments"
        icon={<Calendar />}
        active={selected === "appointments"}
        onItemClick={() => handleSelected("appointments")}
      />
      <SidebarItem
        text="Feedbacks"
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
