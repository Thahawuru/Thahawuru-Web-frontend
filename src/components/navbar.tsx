"use client";

import logo from "./Thahawuru.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const items = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "API", link: "/api" },
    { title: "Login", link: "/login" },
  ];

  return (
    <>
      <div className="fixed bg-whiteTwo border border-black-900 w-full h-[60px]">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-secondary font-bold">
            <Link href="/" passHref>
              <Image
                className="w-[50px] object-cover rounded-full transition transform hover:scale-110 duration-500 ease-in-out cursor-pointer"
                src={logo}
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-secondary"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
