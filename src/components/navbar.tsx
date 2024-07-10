"use client";

import React, { useState } from "react";
import Link from "next/link";
import Auth from "@/components/auth/login/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { title: "Home", link: "/" },
    {
      title: "Docs",
      link: "https://thahawuru-docs.vercel.app/",
      external: true,
    }, // Added external: true for external links
    // { title: "Login", link: "/auth/login" },
  ];

  return (
    <>
      <div className="fixed top-0 opacity-90 w-full h-[60px] z-20 shadow-lg bg-white">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <div className="text-white font-bold">
            <Link href="/" passHref>
              <div className="bg-white p-2">
                <h1 className="text-2xl text-secondary">
                  <b>තහවුරු</b>
                </h1>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                passHref={!item.external} // Use passHref only if it's not an external link
                className="text-secondary hover:text-secondaryTwo transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-1xl"
                target={item.external ? "_blank" : undefined} // Set target="_blank" for external links
                rel={item.external ? "noopener noreferrer" : undefined} // Add rel="noopener noreferrer" for security reasons on external links
              >
                <div className="text-secondaryTwo p-1">
                  &nbsp;<b>{item.title}</b>&nbsp;
                </div>
              </Link>
            ))}
            <div className="hidden md:flex items-center">
              <Auth />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="flex flex-col items-center space-y-4 py-4">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  passHref={!item.external} // Use passHref only if it's not an external link
                  className="text-secondary hover:text-secondaryTwo transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-1xl"
                  target={item.external ? "_blank" : undefined} // Set target="_blank" for external links
                  rel={item.external ? "noopener noreferrer" : undefined} // Add rel="noopener noreferrer" for security reasons on external links
                >
                  <div className="bg-secondary text-white p-1">
                    &nbsp;<b>{item.title}</b>&nbsp;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
