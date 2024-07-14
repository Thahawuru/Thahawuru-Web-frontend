// components/SettingsPage.tsx
"use client";
import React, { useState, ChangeEvent } from "react";
import { TextField, MenuItem, Button, Box, Grid } from "@mui/material";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";

const SettingsPage = () => {
  const [dailyUpdateTime, setDailyUpdateTime] = useState<string>("00:00");

  const [apiUsageLimits, setApiUsageLimits] = useState({
    basic: 1000,
    standard: 5000,
    premium: 10000,
  });

  const [discounts, setDiscounts] = useState({
    basic: 0,
    standard: 10,
    premium: 20,
  });

  const [activeItem, setActiveItem] = useState("Settings");

  const handleSetActiveItem = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const handleDailyUpdateTimeChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDailyUpdateTime(event.target.value);
  };

  const handleApiUsageLimitChange =
    (plan: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setApiUsageLimits({
        ...apiUsageLimits,
        [plan]: parseInt(event.target.value, 10),
      });
    };

  const handleDiscountChange =
    (plan: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setDiscounts({
        ...discounts,
        [plan]: parseInt(event.target.value, 10),
      });
    };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log({
      dailyUpdateTime,
      apiUsageLimits,
      discounts,
    });
  };

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
        <div className="flex flex-row w-full h-auto p-4 mt-20">
          <div className="flex flex-row justify-start items-center w-2/3">
            <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
              <b>Settings</b>
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full h-[610px] p-4">
          <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
            <div className="mb-4 w-full flex flex-col justify-center items-center">
              <TextField
                className="w-2/3"
                label="Daily Update Time"
                type="time"
                fullWidth
                value={dailyUpdateTime}
                onChange={handleDailyUpdateTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="w-full flex flex-row justify-center items-center">
              <div className="m-4 w-1/3">
                <TextField
                  label="Basic API Usage Limit"
                  type="number"
                  fullWidth
                  value={apiUsageLimits.basic}
                  onChange={handleApiUsageLimitChange("basic")}
                />
              </div>
              <div className="m-4 w-1/3">
                <TextField
                  label="Basic Pricing Plan Discount"
                  type="number"
                  fullWidth
                  value={discounts.basic}
                  onChange={handleDiscountChange("basic")}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
              <div className="m-4 w-1/3">
                <TextField
                  label="Standard API Usage Limit"
                  type="number"
                  fullWidth
                  value={apiUsageLimits.standard}
                  onChange={handleApiUsageLimitChange("standard")}
                />
              </div>
              <div className="m-4 w-1/3">
                <TextField
                  label="Standard Pricing Plan Discount"
                  type="number"
                  fullWidth
                  value={discounts.standard}
                  onChange={handleDiscountChange("standard")}
                />
              </div>
            </div>

            <div className="w-full flex flex-row justify-center items-center">
              <div className="m-4 w-1/3">
                <TextField
                  label="Premium API Usage Limit"
                  type="number"
                  fullWidth
                  value={apiUsageLimits.premium}
                  onChange={handleApiUsageLimitChange("premium")}
                />
              </div>
              <div className="m-4 w-1/3">
                <TextField
                  label="Premium Pricing Plan Discount"
                  type="number"
                  fullWidth
                  value={discounts.premium}
                  onChange={handleDiscountChange("premium")}
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
              <button
                type="submit"
                className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2 mt-2"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
