"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

export default function Page() {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    if (user) {
      authorize("APIUSER");
    }
  }, [authorize, user]);
  const [activeItem, setActiveItem] = useState("Test API");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const contentBlocks = [
    {
      title: "Getting Started",
      paragraph: `First of all, create a .env file and place the below lines there.`,
      content: `
        BASEURL_FOR_TEST_OR_API = https://api.thahawuru.lk/testapi
        THAHAWURU_API_LICENSE_ID_PASSPORT = hudjsjallaahgsggsuuytr176;`,
    },
    {
      title: "License, Identity details",
      paragraph: `The API provides the following details for the given QR code or NIC number.`,
      content: `
        {BASEURL_FOR_TEST_OR_API}/post/license/identity/qr/qr=qw123hgbn45lk67xc89yu/api={THAHAWURU_API_LICENSE_ID_PASSPORT}
        {BASEURL_FOR_TEST_OR_API}/post/license/identity/nic/nic=200104562876/api={THAHAWURU_API_LICENSE_ID_PASSPORT}`,
    },
    {
      title: "Identity Details",
      paragraph: `The API provides the following details for the given QR code or NIC number.`,
      content: `
        {BASEURL_FOR_TEST_OR_API}/post/identity/qr/qr=qw123hgbn45lk67xc89yu/api={THAHAWURU_API_LICENSE_ID_PASSPORT}
        {BASEURL_FOR_TEST_OR_API}/post/identity/nic/nic=200104562876/api={THAHAWURU_API_LICENSE_ID_PASSPORT}`,
    },
    {
      title: "License Details",
      paragraph: `The API provides the following details for the given QR code or NIC number.`,
      content: `
        {BASEURL_FOR_TEST_OR_API}/post/license/qr/qr=qw123hgbn45lk67xc89yu/api={THAHAWURU_API_LICENSE_ID_PASSPORT}
        {BASEURL_FOR_TEST_OR_API}/post/license/nic/nic=200104562876/api={THAHAWURU_API_LICENSE_ID_PASSPORT}`,
    },
    {
      title: "Personal Information",
      paragraph: `The API provides the following details for the given QR code or NIC number.`,
      content: `
        {BASEURL_FOR_TEST_OR_API}/post/personal/qr/qr=qw123hgbn45lk67xc89yu/api={THAHAWURU_API_LICENSE_ID_PASSPORT}
        {BASEURL_FOR_TEST_OR_API}/post/personal/nic/nic=200104562876/api={THAHAWURU_API_LICENSE_ID_PASSPORT}`,
    },
    {
      title: "Police and Court Data",
      paragraph: `The API provides the following details for the given QR code or NIC number.`,
      content: `
        {BASEURL_FOR_TEST_OR_API}/post/police/qr/qr=qw123hgbn45lk67xc89yu/api={THAHAWURU_API_LICENSE_ID_PASSPORT}
        {BASEURL_FOR_TEST_OR_API}/post/police/nic/nic=200104562876/api={THAHAWURU_API_LICENSE_ID_PASSPORT}`,
    },
  ];

  const handleCopy = (content: any) => {
    navigator.clipboard.writeText(content).then(() => {
      console.log("Copied to clipboard:", content);
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
              <b>Test API Documentation</b>
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 text-secondaryTwo w-4/5">
          <p className="mb-4">
            The documentation is available for Thahawuru TestAPI at Thahawuru
            Docs. API keys can be obtained after a proper agreement process.
            Until then, developers are allowed to use TestAPIs, which provide
            dummy data for development purposes. Developers will be able to gain
            API keys for the integration of Thahawuru API for their production
            websites, apps, or mobile apps. They need to make a payment to
            obtain the API keys annually.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Test API Key</h2>
          <div className="relative bg-primary-300 p-2 mb-4 rounded text-black shadow-lg flex flex-row mb-16">
            <IconButton
              color="primary"
              onClick={() => handleCopy("hudjsjallaahgsggsuuytr176")}
            >
              <ContentCopyIcon />
            </IconButton>
            <pre className="overflow-auto mt-2 ml-16 p-2">hudjsjallaahgsggsuuytr176</pre>
          </div>

          {contentBlocks.map((block, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-2xl font-semibold mb-2">{block.title}</h2>
              <p className="">{block.paragraph}</p>
              <div className="relative bg-primary-300 p-2 mb-4 rounded text-black shadow-md flex flex-row mt-4">
                <IconButton
                  color="primary"
                  onClick={() => handleCopy(block.content)}
                >
                  <ContentCopyIcon />
                </IconButton>
                <pre className="overflow-auto">{block.content}</pre>
              </div>
            </div>
          ))}

          <p className="mb-4">
            Developers should integrate our API into their platforms for ease of
            data access, ensuring the privacy of data users. Any misuse of data
            is punishable by government laws and regulations. Certain users will
            be notified when their data is accessed.
          </p>
        </div>
      </div>
    </div>
  );
}
