"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Image from "next/image";
import profileImage from "../../../../public/profilePicDefault.png";
import { Modal } from "@mui/material";
import { useAuthentication } from "@/api/useAuthentication";
import Toast from "@/components/utils/toaster";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    organization: "",
    description:"",
    profileLink: "",
  });

  const { savedetails } = useAuthentication();

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [activeItem, setActiveItem] = useState("Profile");
  const [openModal, setOpenModal] = useState(false);

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log("formdata",formData);
    try {
      const response = await savedetails(formData);
      if (response.status === 201) {
        console.log(response.data);
        Toast({type:"success",message:"Sucesssfully!"});
      }
    } catch (error: any) {
      Toast({type:"fail",message:"error!"});
      console.log(error);
    }
    
  };

  const handleSubmitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate password change fields
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    // Example of password change logic (replace with your backend integration)
    console.log("Changing password...");
    console.log("Current Password:", passwordData.currentPassword);
    console.log("New Password:", passwordData.newPassword);
    console.log("Confirm New Password:", passwordData.confirmNewPassword);

    // Close the modal after handling password change
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
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
          <div className="h-auto">
            <div className="flex flex-row w-full h-auto p-4 mt-10">
              <div className="flex flex-row justify-start items-center w-2/3">
                <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
                  <b>Profile and Settings</b>
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto p-4 mb-10">
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  src={profileImage}
                  alt="profileImage"
                  height={150}
                  width={150}
                ></Image>
              </div>

              <Box
                component="form"
                sx={{ mt: 3 }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="w-full flex flex-row justify-center items-center">
                  <div className="m-4 w-1/3">
                    <TextField
                      label="Name"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                  <div className="m-4 w-1/3">
                    <TextField
                      label="phone Number"
                      fullWidth
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                  <div className="m-4 w-1/3">
                    <TextField
                      label="Orgarnization"
                      fullWidth
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                <div className="m-4 w-1/3">
                    <TextField
                      label="Description"
                      fullWidth
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                  <button
                    type="submit"
                    className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2 mt-2"
                  >
                    Save Changes
                  </button>
                  <button
                    className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-4 mb-2 mt-2"
                    onClick={() => handleOpenModal()}
                  >
                    Change Password
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={style}>
            <h2 id="password-change-modal">Change Password</h2>
            <form onSubmit={handleSubmitPassword}>
              <TextField
                label="Current Password"
                fullWidth
                type="password"
                margin="normal"
                required
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
              />
              <TextField
                label="New Password"
                fullWidth
                type="password"
                margin="normal"
                required
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
              />
              <TextField
                label="Confirm New Password"
                fullWidth
                type="password"
                margin="normal"
                required
                value={passwordData.confirmNewPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmNewPassword: e.target.value,
                  })
                }
              />
              <div style={{ textAlign: "right", marginTop: "16px" }}>
                <button
                  type="submit"
                  className="rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                >
                  Save Password
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="ml-2 rounded-custom-3 bg-gray-300 hover:bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}
