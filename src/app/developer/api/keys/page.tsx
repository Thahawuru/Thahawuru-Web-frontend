"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useApiKeys } from "@/api/useApiKeys";
import Toast from "@/components/utils/toaster";


interface ApiKey {
  id: string;
  name: string;
  key: string;
  // add other properties if needed
}

export default function Page() {
  const { getApiKeys } = useApiKeys();
  const [activeItem, setActiveItem] = useState("API keys");
  const [showApiKeys, setShowApiKeys] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [apiKey, setApiKey] = useState<ApiKey[]>([]);

  const getUserApiKeys = async () => {
    try {
      const response = await getApiKeys();
      if (response.status === 200) {
        setApiKey(response.data.data)
        console.log(response.data.data);
      }
    } catch (error) {
   
      Toast({ type: "fail", message: "failed to get api keys" });
    }
  };

  useEffect(() => {
    getUserApiKeys();
  }, []);

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const contentBlocks = [
    {
      title: "Getting Started",
      paragraph: `First of all, create a .env file and place the below lines there.`,
      content: `
        BASEURL_FOR_TEST_OR_API = https://api.thahawuru.lk/api
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

  const toggleShowApiKey = (item: string) => {
    setShowApiKeys((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
    // setShowApiKey(!showApiKey);
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
              <b>API Documentation</b>
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4 text-secondaryTwo w-4/5">
          <p className="mb-4">
            The documentation is available for Thahawuru API who works on
            government and private web or mobile platforms. API keys can be get
            after a proper agreenment process. Developers will be able to gain
            API keys for the integration of Thahawuru API for their production
            websites, apps or mobile apps. They need to make a payment for gain
            the API keys annually.
          </p>

          <h2 className="text-2xl font-semibold mb-2">API Keys</h2>

          {apiKey &&
            apiKey.length > 0 &&
            apiKey.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary-300 p-2 mb-4 rounded text-black shadow-lg flex flex-row mb-16 items-center "
              >
                <p className="mb-4  mt-2 ml-4 p-2">{item?.name}</p>
                <IconButton
                  color="primary"
                  onClick={() => handleCopy(item?.key)}
                  className="ml-2"
                >
                  <ContentCopyIcon />
                </IconButton>

                <pre className="overflow-auto mt-2 ml-4 p-2">
                  {showApiKeys[item?.key] ? item?.key : "********************"}
                </pre>

                <IconButton
                  color="primary"
                  onClick={() => toggleShowApiKey(item?.key)}
                >
                  {showApiKeys[item.key] ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </div>
            ))}

          <p className="mb-8 text-secondaryTwo">
            Do you need to refund the payment for API keys? If so you will be no
            longer able to use the existing API key. You need to press the
            <span className="text-black hover:text-gray hover:cursor-pointer">
              <Link href="refund">
                <b> refund </b>
              </Link>
            </span>{" "}
            button. Complete the refund form and submit it. After the refund
            process.
          </p>

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
