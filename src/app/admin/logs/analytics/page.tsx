"use client";
import React, { useEffect } from "react";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";
import { BiUser, BiIdCard, BiGroup, BiShield } from "react-icons/bi";
import { useAuthContext } from "@/hooks/useAuthContext";

const LogAnalytics = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    // Define an async function to load ApexCharts
    const loadCharts = async () => {
      // Dynamically import ApexCharts
      const ApexChartsModule = await import("apexcharts");
      const ApexCharts = ApexChartsModule.default;

      // Chart options
      const dailyActivityOptions = {
        chart: {
          type: "line",
          height: "350px",
        },
        series: [
          {
            name: "Daily Activity",
            data: [12, 19, 3, 5, 2, 3, 7],
          },
        ],
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        colors: ["#023e8a"],
      };

      const actionBreakdownOptions = {
        chart: {
          type: "donut",
          height: "300px",
        },
        series: [300, 50, 100],
        labels: ["Login", "Update", "Delete"],
        colors: ["#adb5bd", "#023e8a", "#edf2f4"],
      };

      const errorRatesOptions = {
        chart: {
          type: "bar",
          height: "300px",
        },
        series: [
          {
            name: "Error Rates",
            data: [65, 59, 80],
          },
        ],
        xaxis: {
          categories: ["200", "404", "500"],
        },
        colors: ["#023e8a"],
      };

      const averageResponseTimeOptions = {
        chart: {
          type: "line",
          height: "300px",
        },
        series: [
          {
            name: "Average Response Time (ms)",
            data: [150, 200, 250, 180, 220, 170, 190],
          },
        ],
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        colors: ["#023e8a"],
      };

      // Render charts
      const dailyActivityChart = new ApexCharts(
        document.querySelector("#dailyActivityChart"),
        dailyActivityOptions
      );
      dailyActivityChart.render();

      const actionBreakdownChart = new ApexCharts(
        document.querySelector("#actionBreakdownChart"),
        actionBreakdownOptions
      );
      actionBreakdownChart.render();

      const errorRatesChart = new ApexCharts(
        document.querySelector("#errorRatesChart"),
        errorRatesOptions
      );
      errorRatesChart.render();

      const averageResponseTimeChart = new ApexCharts(
        document.querySelector("#averageResponseTimeChart"),
        averageResponseTimeOptions
      );
      averageResponseTimeChart.render();

      // Cleanup on unmount
      return () => {
        dailyActivityChart.destroy();
        actionBreakdownChart.destroy();
        errorRatesChart.destroy();
        averageResponseTimeChart.destroy();
      };
    };

    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      loadCharts();
    }
  }, []);

  return (
    <div className="w-full bg-white min-h-screen h-auto flex flex-row items-end justify-center">
      <div className="h-screen flex flex-col justify-between items-center">
        <Sidebar activeItem="Logs & Analytics" onSetActiveItem={() => { }} />
      </div>
      <div className="flex flex-col w-5/6 ml-[250px]">
        <Welcome />
        <div className="flex flex-row w-full h-auto p-4 mt-20">
          <div className="flex flex-row justify-start items-center w-2/3">
            <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
              <b>Log Analytics</b>
            </h1>
          </div>
        </div>
        <div className="flex flex-row w-full h-auto p-4 justify-center items-center">
          {/* Cards for Total Verifications, Today's Verifications, etc. */}
          {/* Include your card components here */}
        </div>
        <div className="flex flex-col space-y-6 px-10 w-full justify-center items-center">
          <div className="flex flex-col space-y-6 px-10 w-4/5">
            <div className="flex flex-row space-x-6">
              <div className="w-1/2 m-4">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Daily Activity
                </h2>
                <div id="dailyActivityChart"></div>
              </div>
              <div className="w-1/2 m-4">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Action Breakdown
                </h2>
                <div id="actionBreakdownChart"></div>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div className="w-1/2 m-4">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Daily Updates
                </h2>
                <div id="averageResponseTimeChart"></div>
              </div>
              <div className="w-1/2 m-4">
                <h2 className="text-1xl font-semibold text-secondaryTwo">
                  Status Code Distribution
                </h2>
                <div id="errorRatesChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogAnalytics;
