"use client";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { FaKey, FaSignOutAlt, FaUser } from "react-icons/fa";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <aside className="h-screen">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          {expanded && (
            <span className="text-xl font-bold text-secondary">Jibika</span>
          )}

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 items-center justify-center px-3 py-10">
            {children}
          </ul>
        </SidebarContext.Provider>

        <div className="flex border-t p-3">
          <img
            src="https://ui-avatars.com/api/?name=Jibika+Pharmacy&background=c7d2fe&color=3730a3&bold=true"
            alt="jplogo"
            className="h-10 w-10 rounded-md"
          />
          <div
            className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Jibika Pharmacy</h4>
              <span className="text-xs text-gray-600">
                jibikapharmacy@gmail.com
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ul className="h-8 w-8 rounded-full bg-white p-1 text-lg text-black duration-300 hover:bg-[#f5f5f4]">
                  <MoreVertical size={20} />
                </ul>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer">
                  <FaUser className="mr-2" /> Account Info
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <FaKey className="mr-2" />
                  Change Password
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer "
                  // onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onItemClick: () => void;
}

export function SidebarItem({
  icon,
  text,
  active = false,
  alert = false,
  onItemClick,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  const handleClick = () => {
    onItemClick();
  };

  return (
    <li
      className={`
        group relative my-1 flex w-full cursor-pointer items-center
        rounded-md px-3 py-2 text-lg
        font-medium transition-colors
        ${
          active
            ? "bg-primary text-primary-foreground"
            : "text-gray-600 hover:bg-muted"
        }
    `}
      onClick={handleClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`bg-dark absolute right-2 h-2 w-2 rounded ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md
         bg-primary px-2 py-1
          text-sm text-primary-foreground opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
