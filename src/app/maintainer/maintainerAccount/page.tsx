"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import Sidebar from "@/components/sidebar/maintainer/sidebar";
import Welcome from "@/components/welcome";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

const MaintainerAccountPage = () => {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    if (user) {
      authorize("MAINTAINER");
    }
  }, [authorize, user]);

  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    console.log("User details updated:", userDetails);
  };

  const handleInputChange =
    (field: keyof typeof userDetails) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setUserDetails({
        ...userDetails,
        [field]: event.target.value,
      });
    };

  const [activeItem, setActiveItem] = useState("Account Details");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
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
              <b>User Account Details</b>
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full h-[610px] p-4">
          <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
            <TextField
              label="First Name"
              fullWidth
              value={userDetails.firstName}
              onChange={handleInputChange("firstName")}
              disabled={!isEditing}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Last Name"
              fullWidth
              value={userDetails.lastName}
              onChange={handleInputChange("lastName")}
              disabled={!isEditing}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Email Address"
              fullWidth
              value={userDetails.email}
              onChange={handleInputChange("email")}
              disabled={!isEditing}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Phone Number"
              fullWidth
              value={userDetails.phone}
              onChange={handleInputChange("phone")}
              disabled={!isEditing}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Address"
              fullWidth
              value={userDetails.address}
              onChange={handleInputChange("address")}
              disabled={!isEditing}
              multiline
              rows={3}
              sx={{ mb: 3 }}
            />
            {!isEditing ? (
              <div className="w-full flex flex-row justify-center items-center">
                <button
                  type="submit"
                  className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2 mt-2"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center">
                <Button
                  variant="contained"
                  onClick={handleSaveChanges}
                  sx={{
                    backgroundColor: "#10B981",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#059669",
                    },
                    mr: 2,
                  }}
                >
                  Save Changes
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setIsEditing(false)}
                  sx={{
                    backgroundColor: "#EF4444",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#DC2626",
                    },
                    ml: 2,
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MaintainerAccountPage;
