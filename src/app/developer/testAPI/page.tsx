"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useAuthContext } from "@/hooks/useAuthContext";


export default function Page() {
  const { user } = useAuthContext();
  
  const [activeItem, setActiveItem] = useState("Test API");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const contentBlocks = [
    {
      title: "Getting Started",
      paragraph: `First of all, create a .env file and place the below lines there.`,
      content: `
        BASE_URL = http://localhost:3010/
        THAHAWURU_IDENTITY = u-Df-IT76KTGpTjBLAF9L11cwGYFpsfcQYv5AqmxLvg=.1N17kJO2SHSKMGaC-EMNRUFOJd6Pq0tkzbPX1JJ5WX0=
        THAHAWURU_LICENSE = dCL696tdao9ERmcW1Gv7t0--LUEk3Zk8tUvtozZr7Ko=.T8Uo1J0YBoMf2pFW2U4yQZpG8FtxSGOnJYHKMjjy83M=`,
    },
    {
      title: "Identity details",
      paragraph: `The TestAPI provides the following details for the given NIC number.`,
      content: `
        {BASE_URL}/testapi/identity/200117701551?apikey=$(THAHAWURU_IDENTITY)`,
    },
    {
      title: "License Details",
      paragraph: `The TestAPI provides the following details for the given NIC number.`,
      content: `
        {BASE_URL}/testapi/license/200117701551?apikey=$(THAHAWURU_LICENSE)`,
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
              onClick={() => handleCopy("u-Df-IT76KTGpTjBLAF9L11cwGYFpsfcQYv5AqmxLvg=.1N17kJO2SHSKMGaC-EMNRUFOJd6Pq0tkzbPX1JJ5WX0=")}
            >
              <ContentCopyIcon />
            </IconButton>
            <pre className="overflow-auto mt-2 ml-16 p-2">u-Df-IT76KTGpTjBLAF9L11cwGYFpsfcQYv5AqmxLvg=.1N17kJO2SHSKMGaC-EMNRUFOJd6Pq0tkzbPX1JJ5WX0=</pre>
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
