"use client";
import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";
interface Maintainer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  password: string;
}

export default function Page() {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    if (user) {
      authorize("MAINTAINER");
    }
  }, [authorize, user]);
  const [activeItem, setActiveItem] = useState("User Accounts");
  const [maintainer, setMaintainer] = useState<Maintainer>({
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    password: "",
  });

  const handleSetActiveItem = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMaintainer({
      ...maintainer,
      [name]: value,
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as making an API call
    console.log("Creating maintainer:", maintainer);
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
              <b>Create Maintainer Account</b>
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
                value={maintainer.id}
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
                value={maintainer.name}
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
                value={maintainer.email}
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
                value={maintainer.phoneNumber}
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
                label="WhatsApp Number"
                variant="outlined"
                name="whatsappNumber"
                value={maintainer.whatsappNumber}
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
                label="Password"
                variant="outlined"
                name="password"
                value={maintainer.password}
                onChange={handleInputChange}
                margin="normal"
                InputProps={{
                  style: {
                    height: "45px",
                  },
                }}
              />
              <button
                type="submit"
                className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 mt-8"
              >
                Create Account
              </button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
