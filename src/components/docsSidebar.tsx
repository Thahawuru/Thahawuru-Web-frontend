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
    {
      title: "Dashboard",
      link: "/docs/dashboard",
      icon: <BiHomeAlt className="text-secondary" />,
    },
    {
      title: "Overview",
      link: "/docs/overview",
      icon: <BiFile className="text-secondary" />,
    },
    {
      title: "Getting Started",
      link: "/docs/getting-started",
      icon: <BiRocket className="text-secondary" />,
    },
    {
      title: "API",
      link: "/docs/api",
      icon: <BiBook className="text-secondary" />,
    },
    {
      title: "TestAPI",
      link: "/docs/testAPI",
      icon: <BiTestTube className="text-secondary" />,
    },
    {
      title: "Agreement & Buy",
      link: "/docs/agreement",
      icon: <BiShoppingBag className="text-secondary" />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen flex shadow-lg">
      <div
        className={`transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-br from-primary to-white dark:bg-gray-800 h-full overflow-hidden`}
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
              <BiChevronLeft className="mr-2 w-5 h-5 rounded-lg text-secondary border border-secondary" />
            ) : (
              <BiChevronRight className="mr-2 w-5 h-5 rounded-lg text-secondary border border-secondary" />
            )}
          </button>
        </div>

        <div className="py-4 overflow-y-auto pt-20 h-full">
          <ul className="space-y-2 font-medium">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <div className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-secondary hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
                    <div className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-secondary">
                      {item.icon}
                    </div>
                    <span
                      className={`ml-3 ${
                        isOpen ? "inline text-secondary text-sm hover:text-secondaryTwo" : "hidden"
                      }`}
                    >
                      <b>{item.title}</b>
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
