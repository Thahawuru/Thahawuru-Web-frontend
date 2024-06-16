"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BiFile,
  BiHomeAlt,
  BiRocket,
  BiBook,
  BiTestTube,
  BiChevronLeft,
  BiChevronRight,
  BiShoppingBag,
} from "react-icons/bi";

import Image from "next/image";
import logo from "../../public/thahawuruText.png";

export default function DocsSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { title: "Dashboard", link: "/docs/dashboard", icon: <BiHomeAlt /> },
    { title: "Overview", link: "/docs/overview", icon: <BiFile /> },
    {
      title: "Getting Started",
      link: "/docs/getting-started",
      icon: <BiRocket />,
    },
    { title: "API", link: "/docs/api", icon: <BiBook /> },
    { title: "TestAPI", link: "/docs/testAPI", icon: <BiTestTube /> },
    {
      title: "Agreement & Buy",
      link: "/docs/agreement",
      icon: <BiShoppingBag />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen flex">
      <div
        className={`transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-br from-secondary to-secondaryTwo dark:bg-gray-800 h-full overflow-hidden`}
      >
        <div className="flex items-center justify-center h-16">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 mt-10">
          <button
            className="text-white font-medium rounded-lg text-sm px-1 py-2.5 flex items-center"
            type="button"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <BiChevronLeft className="mr-2 w-5 h-5 rounded-lg text-white border border-white" />
            ) : (
              <BiChevronRight className="mr-2 w-5 h-5 rounded-lg  text-white border border-white" />
            )}
          </button>
        </div>

        <div className="py-4 overflow-y-auto pt-20 h-full">
          <ul className="space-y-2 font-medium">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <div className="flex items-center p-2 text-white-900 rounded-lg dark:text-white hover:bg-white-100 dark:hover:bg-white-700 group">
                    <div className="flex-shrink-0 w-5 h-5 text-white-500 transition duration-75 dark:text-white-400 group-hover:text-white-900 dark:group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className={`ml-3 ${isOpen ? "inline" : "hidden"}`}>
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow">{/* Main content goes here */}</div>
    </div>
  );
}
