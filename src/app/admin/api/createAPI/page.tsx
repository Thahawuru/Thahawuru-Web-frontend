"use client";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";
import { TextField, Button, Box, Typography } from "@mui/material";
import DateTimePicker from "@/components/dateTimePicker";

interface API {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  expiredAt: string;
  apikey: string;
}

export default function Page() {
  const [activeItem, setActiveItem] = useState("Create API Key");
  const [api, setAPI] = useState<API>({
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    expiredAt: "",
    apikey: "",
  });

  const handleSetActiveItem = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAPI({
      ...api,
      [name]: value,
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as making an API call
    console.log("Creating an API key:", api);
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
        <div className="flex flex-col justify-center items-center w-full h-auto p-4 mt-20">
          <Box className="w-full h-[640px] flex flex-col justify-between items-center">
            <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10 mb-4">
              <b>Create API key</b>
            </h1>
            <Box
              component="form"
              className="w-4/5 h-full"
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                label="ID"
                variant="outlined"
                name="id"
                value={api.id}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={api.name}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={api.email}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={api.phoneNumber}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="API Key"
                variant="outlined"
                name="apikey"
                value={api.apikey}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <div className="w-full flex flex-row justify-between mt-4 border border-gray rounded-custom-1 hover:border-black ">
                <label className="text-black mt-3 ml-3">Expired At</label>
                <DateTimePicker
                  value={api.expiredAt}
                  onChange={handleInputChange}
                  inputProps={{
                    name: "expiredAt",
                    style: { height: "45px" },
                  }}
                />
              </div>
              <button
                type="submit"
                className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 mt-8"
              >
                Create API Key
              </button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
