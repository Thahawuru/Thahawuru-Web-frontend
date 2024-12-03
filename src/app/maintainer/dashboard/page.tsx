"use client";
import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar/maintainer/sidebar";
import Welcome from "@/components/welcome";
import {
  BiPlusCircle,
  BiUser,
  BiIdCard,
  BiGroup,
  BiShield,
} from "react-icons/bi";
import dynamic from "next/dynamic";
const DateTimeXAxis = dynamic(() => import("./charts/DateTimeXAxis"), {
  ssr: false,
});
const LineColumnChart = dynamic(() => import("./charts/LineColumnChart"), {
  ssr: false,
});
const PieChart = dynamic(() => import("./charts/PieChart"), {
  ssr: false,
  loading: () => (
    <p style={{ color: "#000000" }} className="text-secondaryTwo">
      Loading...
    </p>
  ),
});
import { useAuthContext } from "@/hooks/useAuthContext";

import { getTotalAPIcalls } from "../../../api/adminDashboard";


export default function Dashboard() {
  const { user } = useAuthContext();

  const [activeItem, setActiveItem] = useState("Dashboard");
  const [apiCalls, setAPICalls] = useState();
  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await getTotalAPIcalls();
        const data = response;
        setAPICalls(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen h-auto flex flex-row items-end justify-center">
      <div className="h-screen flex flex-col justify-between items-center">
        <Sidebar
          activeItem={activeItem}
          onSetActiveItem={handleSetActiveItem}
        />
      </div>
      <div className="flex flex-col w-5/6 ml-[250px]">
        <Welcome />
        <div className="flex flex-row w-full h-auto p-4 justify-center items-center  mt-20">
          <div className="flex flex-col justify-center w-1/6 h-[150px] p-4 bg-secondaryThree ml-5 mr-5 shadow-md rounded-custom-1 hover:shadow-lg transition ease-in-out duration-150 cursor-pointer">
            <div className="flex mb-2 flex flex-col justify-center w-full h-full">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                New Wallets
              </h1>
              <p className="text-secondaryTwo font-bold text-2xl">2</p>
              <div className="flex flex-row justify-end w-full mt-10">
                <BiUser className="text-secondaryTwo mr-2" size={24} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/6 h-[150px] p-4 bg-secondaryThree ml-5 mr-5 shadow-md rounded-custom-1 hover:shadow-lg transition ease-in-out duration-150 cursor-pointer">
            <div className="flex mb-2 flex flex-col w-full h-full">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                Today`s Updates
              </h1>
              <p className="text-secondaryTwo font-bold text-2xl">3</p>
              <div className="flex flex-row justify-end w-full mt-10">
                <BiIdCard className="text-secondaryTwo mr-2" size={24} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/6 h-[150px] p-4 bg-secondaryThree ml-5 mr-5 shadow-md rounded-custom-1 hover:shadow-lg transition ease-in-out duration-150 cursor-pointer">
            <div className="flex mb-2 flex flex-col w-full h-full">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                API Calls
              </h1>
              <p className="text-secondaryTwo font-bold text-2xl">{apiCalls}</p>
              <div className="flex flex-row justify-end w-full mt-10">
                <BiGroup className="text-secondaryTwo mr-2" size={24} />
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col justify-center w-1/6 h-[150px] p-4 bg-secondaryThree ml-5 mr-5 shadow-md rounded-custom-1 hover:shadow-lg transition ease-in-out duration-150 cursor-pointer">
            <div className="flex mb-2 flex flex-col w-full h-full">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                Transactions
              </h1>
              <p className="text-secondaryTwo font-bold text-2xl">50,768</p>
              <div className="flex flex-row justify-end w-full mt-10">
                <BiShield className="text-secondaryTwo mr-2" size={24} />
              </div>
            </div>
          </div> */}
        </div>
        <div className="w-full h-auto p-4 flex flex-col justify-center items-center">
          <div className="flex flex-row w-3/4 h-auto p-4 justify-center items-center">
            <div className="flex flex-col justify-center w-full h-[400px] p-4 ml-5 mr-5 rounded-custom transition ease-in-out duration-150 cursor-pointer">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                Daily Wallet Usage
              </h1>
              <DateTimeXAxis />
            </div>
          </div>
          <div className="flex flex-row w-4/5 h-auto p-4 justify-center items-center">
            <div className="flex flex-col justify-center w-1/2 ml-5 mr-5 rounded-custom transition ease-in-out duration-150 cursor-pointer">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                API Buyings
              </h1>
              <PieChart />
            </div>
            {/* <div className="flex flex-col justify-center w-1/2 h-[400px] ml-5 mr-5 rounded-custom transition ease-in-out duration-150 cursor-pointer">
              <h1 className="text-1xl text-secondaryTwo font-bold">
                Revenue Made
              </h1>
              <LineColumnChart />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
