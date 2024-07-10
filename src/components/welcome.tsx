import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import ProfileImage from "../../public/assests/images/profile.jpg";

const Welcome = () => {
  return (
    <div className="bg-primary h-[75px] flex items-center justify-between px-4 border border-white m-2">
      <div className="flex items-center w-full">
        <div className=" w-full">
          <div className="relative w-full flex flex-row justify-center items-center">
            <BiSearch className="transform -translate-y-1/2 text-gray mt-4 relative top-0 left-8" />
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-3 pl-10 rounded-custom-1 rounded-lg w-1/2 text-secondaryTwo focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-1/6 justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-black text-sm font-bold mr-1">Welcome</p>
          <p className="text-gray text-xs font-bold mr-1">Kasun Udara</p>
        </div>
        <Image
          src={ProfileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Welcome;
