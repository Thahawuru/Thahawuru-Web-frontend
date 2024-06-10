"use client";

// import logo from "../../public/thahawuruText.png";
// import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const items = [
    { title: "Home", link: "/" },
    { title: "API", link: "/api" },
    { title: "Login", link: "/login" },
  ];

  return (
    <>
      <div className="fixed bg-secondaryThree border border-black-900 w-full h-[60px] z-20 shadow-lg">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="text-secondary font-bold">
            <Link href="/" passHref>
              {/* <Image
                className="w-[100px] object-cover rounded-full transition transform hover:scale-110 duration-500 ease-in-out cursor-pointer"
                src={logo}
                alt="Logo"
                width={50}
                height={50}
              /> */}
              <h1 className="text-2xl text-secondaryTwo">
                <b>තහවුරු</b>
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-secondaryTwo hover:text-gray transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer text-1xl"
              >
                &nbsp;<b>{item.title}</b>&nbsp;
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
