"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar/developer/sidebar";
import Welcome from "@/components/welcome";
import IconButton from "@mui/material/IconButton";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const pricingPlans = [
  {
    title: "Plan for TestAPI",
    price: "Free",
    requestLimit: "Unlimited",
    discounts: "No discounts available",
    features: ["Access to Thahawuru testAPIs"],
  },
  {
    title: "Basic Plan",
    price: "LKR 50,000 per year",
    requestLimit: "1000 requests per month",
    discounts: "5% discount for annual payment",
    features: [
      "All features of the Basic Plan",
      "Can Access asked APIs for development and production purposes",
    ],
  },
  {
    title: "Ordinary Plan",
    price: "LKR 75,000 per year",
    requestLimit: "2500 requests per month",
    discounts: "8% discount for annual payment",
    features: [
      "All features of the Ordinary Plan",
      "Can Access asked APIs for development and production  purposes",
    ],
  },
  {
    title: "Premium Plan",
    price: "LKR 175,000 per year",
    requestLimit: "10000 requests per month",
    discounts: "15% discount for annual payment",
    features: [
      "All features of the Premium Plan",
      "Can Access asked APIs for development purposes",
    ],
  },
];

export default function PricingPage() {
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
                <b>Pricing Plans</b>
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-4/5 h-auto p-4 text-secondaryTwo">
              <section className="my-8">
                <h2 className="text-xl font-semibold mb-4">
                  Detailed Information About Subscription Plans and Pricing
                </h2>
                <p className="mb-4 text-black">
                  Thahawuru offers a range of subscription plans designed to
                  meet the diverse needs of developers and organizations. Our
                  pricing structure is transparent and flexible, ensuring you
                  get the best value for the services you need. Below is a
                  detailed overview of our subscription plans and pricing.
                </p>
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="mb-16 rounded-custom-1 p-4 bg-primary shadow-md"
                  >
                    <h3 className="text-lg font-semibold mb-4">{plan.title}</h3>
                    <p className="text-black">
                      <b>Price:</b> {plan.price}
                    </p>
                    <p className="text-black">
                      <b>Request Limit:</b> {plan.requestLimit}
                    </p>
                    <p className="text-black">
                      <b>Discounts:</b> {plan.discounts}
                    </p>
                    <p className="text-black">
                      <b>Features:</b>
                    </p>
                    <ul className="list-disc list-inside ml-4 text-black">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="w-full flex flex-col justify-center items-end">
                      <IconButton
                        color="primary"
                        aria-label="request"
                        className="mt-4"
                      >
                        <h1 className="text-sm text-secondaryTwo">Request</h1> 
                        <RequestQuoteIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </section>
              <section className="my-4">
                <h2 className="text-xl font-semibold mb-4">
                  Discounts and Promotions
                </h2>
                <p className="mb-4">
                  We periodically offer discounts and promotional pricing. Be
                  sure to check our website or subscribe to our newsletter to
                  stay updated on the latest offers.
                </p>
              </section>
              <section className="my-4">
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about our pricing plans or need
                  assistance in choosing the right plan for your needs, please
                  contact our sales team at{" "}
                  <a href="mailto:sales@thahawuru.lk" className="text-blue-500">
                    sales@thahawuru.lk
                  </a>{" "}
                  or call us at +94-11-2345678.
                </p>
                <p className="mb-4">
                  Thank you for choosing Thahawuru. We are committed to
                  providing you with secure, reliable, and efficient digital
                  identity verification solutions.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
