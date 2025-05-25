import React from "react";
import Profile from "../assets/profile.jpg";
import {
  Edit2,
  PlusCircle,
  Clipboard,
  LayoutDashboard,
  Smartphone,
  User,
  Notebook,
  Pen,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Report",
      to: "/report",
      icon: <Clipboard className="inline mr-2 size-4" />,
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <LayoutDashboard className="inline mr-2 size-4" />,
    },
    {
      name: "Templates",
      to: "/404",
      icon: <Smartphone className="inline mr-2 size-4" />,
    },
    {
      name: "Manage Leads",
      to: "/404",
      icon: <User className="inline mr-2 size-4" />,
    },
    {
      name: "Quick Compose",
      to: "/404",
      icon: <Notebook className="inline mr-2 size-4" />,
    },
    {
      name: "Edit Profile",
      to: "/404",
      icon: <Pen className="inline mr-2 size-4" />,
    },
    {
      name: "Logout",
      to: "/",
      icon: <LogOut className="inline mr-2 size-4" />,
    },
  ];

  return (
    <div className="w-fit bg-gray-100 p-4 space-y-6 items-center">
      <div className="items-center flex flex-col relative">
        <img src={Profile} className="rounded-full w-16 h-16" alt="Profile" />
        <Edit2
          className="absolute bottom-0 left-9/16 text-gray-500 w-4 h-4 cursor-pointer hover:text-blue-400"
          alt="Edit Profile"
        />
      </div>
      <div>
        <p className="font-semibold">Rachel Foster</p>
        <p className="text-xs text-gray-500">rachelfoster128@gmail.com</p>
      </div>
      <button className="w-fit rounded-xl flex gap-2 bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition-colors">
        <PlusCircle /> Quick Compose
      </button>
      <div className="space-y-3 text-sm text-gray-700">
        <p className="font-semibold">Menu</p>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block px-2 py-1 rounded ${
                    isActive ? "text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
