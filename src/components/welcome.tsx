import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import ProfileImage from "../../public/profilePicDefault.png";

const Welcome = () => {
  return (
    <div className="bg-white h-[75px] flex items-center justify-end px-4 fixed top-0 left-[250px] w-5/6 z-50 border border-white">
      <div className="flex items-center w-full">
        <div className="w-full">
          <div className="relative w-full flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-10 py-2 rounded-custom-1 w-1/2 text-secondaryTwo focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-1/6 justify-center">
        <div className="flex flex-col justify-center items-center mr-2">
          <p className="text-black text-sm font-bold">Welcome</p>
          <p className="text-gray-500 text-xs font-bold">Kasun Udara</p>
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
