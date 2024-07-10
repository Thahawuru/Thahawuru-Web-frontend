"use client";
import React, { useState } from "react";
import {
  BiHome,
  BiTask,
  BiUser,
  BiCog,
  BiGroup,
  BiLogOut,
} from "react-icons/bi";

import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: <BiHome />,
    badge: null,
  },
  {
    title: "Accounts",
    href: "/admin/accounts",
    icon: <BiGroup />,
    badge: null,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: <BiUser />,
    badge: null,
  },
  {
    title: "Logout",
    href: "/admin/logout",
    icon: <BiLogOut />,
    badge: null,
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="fixed top-0 left-0 flex-shrink-0 w-64 bg-primary shadow-lg border-r border-gray-200 lg:block h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-start flex-shrink-0 px-4 py-5">
          <a
            href="#"
            className="px-2 text-xl font-black leading-5 text-secondaryTwo"
          >
            Thahawuru
          </a>
        </div>
        <div className="flex flex-col flex-grow px-4">
          <nav className="flex-1 space-y-1 bg-primary">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-custom-1 transition ease-in-out duration-150 border border-transparent ${
                  activeItem === item.title
                    ? "bg-secondaryTwo text-white border-secondaryTwo"
                    : "text-secondaryTwo hover:bg-white hover:text-secondaryTwo"
                }`}
                onClick={() => setActiveItem(item.title)}
              >
                {item.icon}
                <span className="ml-3">
                  <b>{item.title}</b>
                </span>
                {item.badge}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
