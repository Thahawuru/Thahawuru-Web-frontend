//refund
"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";

export default function Page() {
  const [activeItem, setActiveItem] = useState("Request for API");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  return (
    <>
      <div className="w-full bg-white min-h-screen h-auto flex flex-row items-end justify-center">
        <div className="h-screen flex flex-col justify-between items-center">
          <Sidebar
            activeItem={activeItem}
            onSetActiveItem={handleSetActiveItem}
          />
        </div>
        <div className="flex flex-col w-5/6 ml-[250px]">
          <Welcome />
          <div className="flex flex-row w-full h-auto p-4 mt-20">
            <div className="flex flex-row justify-start items-center w-2/3">
              <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
                <b>Requesting for refunds</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}