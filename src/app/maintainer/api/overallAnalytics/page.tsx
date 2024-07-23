"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/maintainer/sidebar";
import Welcome from "@/components/welcome";
import ApexCharts from "apexcharts";

const APIKeyAnalytics = () => {
  const [activeItem, setActiveItem] = useState("API Management");
  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };
  useEffect(() => {
    // Sample data
    const totalRequestsOptions = {
      chart: {
        type: "bar",
        height: "250px",
      },
      series: [
        {
          name: "Total Requests",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      xaxis: {
        categories: [
          "Key1",
          "Key2",
          "Key3",
          "Key4",
          "Key5",
          "Key6",
          "Key7",
          "Key8",
        ],
      },
      colors: ["#023e8a", "#adb5bd", "#edf2f4"], // Add your colors here
    };

    const successFailureOptions = {
      chart: {
        type: "donut",
        height: "250px",
      },
      series: [70, 30],
      labels: ["Success", "Failure"],
      colors: ["#023e8a", "#adb5bd"], // Add your colors here
    };

    const requestsOverTimeOptions = {
      chart: {
        type: "line",
        height: "250px",
      },
      series: [
        {
          name: "Requests Over Time",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      colors: ["#023e8a"], // Add your colors here
    };

    const averageResponseTimeOptions = {
      chart: {
        type: "line",
        height: "250px",
      },
      series: [
        {
          name: "Average Response Time",
          data: [200, 400, 300, 500, 450, 600, 700, 800],
        },
      ],
      xaxis: {
        categories: [
          "Key1",
          "Key2",
          "Key3",
          "Key4",
          "Key5",
          "Key6",
          "Key7",
          "Key8",
        ],
      },
      colors: ["#023e8a"], // Add your colors here
    };

    const overallErrorRatesOptions = {
      chart: {
        type: "bar",
        height: "250px",
      },
      series: [
        {
          name: "Error Rates",
          data: [5, 10, 8, 12, 7, 5, 9, 6],
        },
      ],
      xaxis: {
        categories: [
          "Key1",
          "Key2",
          "Key3",
          "Key4",
          "Key5",
          "Key6",
          "Key7",
          "Key8",
        ],
      },
      colors: ["#023e8a"], // Add your colors here
    };

    const averageLatencyOptions = {
      chart: {
        type: "line",
        height: "250px",
      },
      series: [
        {
          name: "Average Latency",
          data: [100, 200, 150, 300, 250, 400, 350, 450],
        },
      ],
      xaxis: {
        categories: [
          "Key1",
          "Key2",
          "Key3",
          "Key4",
          "Key5",
          "Key6",
          "Key7",
          "Key8",
        ],
      },
      colors: ["#023e8a"], // Add your colors here
    };

    // Render charts
    const totalRequestsChart = new ApexCharts(
      document.querySelector("#totalRequestsChart"),
      totalRequestsOptions
    );
    totalRequestsChart.render();

    const successFailureChart = new ApexCharts(
      document.querySelector("#successFailureChart"),
      successFailureOptions
    );
    successFailureChart.render();

    const requestsOverTimeChart = new ApexCharts(
      document.querySelector("#requestsOverTimeChart"),
      requestsOverTimeOptions
    );
    requestsOverTimeChart.render();

    const averageResponseTimeChart = new ApexCharts(
      document.querySelector("#averageResponseTimeChart"),
      averageResponseTimeOptions
    );
    averageResponseTimeChart.render();

    const overallErrorRatesChart = new ApexCharts(
      document.querySelector("#overallErrorRatesChart"),
      overallErrorRatesOptions
    );
    overallErrorRatesChart.render();

    const averageLatencyChart = new ApexCharts(
      document.querySelector("#averageLatencyChart"),
      averageLatencyOptions
    );
    averageLatencyChart.render();

    // Cleanup on unmount
    return () => {
      totalRequestsChart.destroy();
      successFailureChart.destroy();
      requestsOverTimeChart.destroy();
      averageResponseTimeChart.destroy();
      overallErrorRatesChart.destroy();
      averageLatencyChart.destroy();
    };
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
        <div className="flex flex-row w-full h-auto p-4 mt-20">
          <div className="flex flex-row justify-start items-center w-2/3">
            <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
              <b>API Key Usage Analytics</b>
            </h1>
          </div>
        </div>
        <div className="flex flex-col space-y-6 px-10 w-full justify-center items-center">
          <div className="flex flex-col space-y-6 px-10 w-4/5">
            <div className="flex flex-row space-x-6">
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Total Requests by API Key
                </h2>
                <div id="totalRequestsChart"></div>
              </div>
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Success and Failure Rates
                </h2>
                <div id="successFailureChart"></div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Requests Over Time
                </h2>
                <div id="requestsOverTimeChart"></div>
              </div>
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Average Response Time by API Key
                </h2>
                <div id="averageResponseTimeChart"></div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Overall Error Rates
                </h2>
                <div id="overallErrorRatesChart"></div>
              </div>
              <div className="w-1/2">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Average Latency by API Key
                </h2>
                <div id="averageLatencyChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIKeyAnalytics;
