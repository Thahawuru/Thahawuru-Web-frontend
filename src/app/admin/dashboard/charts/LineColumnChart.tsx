"use client";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { fetchTodayRequests } from "../../../../api/adminDashboard";

interface ApiKeyWithRequest {
  api_key: string;
  today_Requests: number;
}

interface ApiResponse {
  message: string;
  total_requests: number;
  apiKeysWithRequests: ApiKeyWithRequest[];
}

const ColumnChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ApiResponse = await fetchTodayRequests();
        console.log(response);
        if (response && response.apiKeysWithRequests) {
          // Extract data for the chart
          const labels = response.apiKeysWithRequests.map(
            (_: ApiKeyWithRequest, index: number) => `API Key ${index + 1}`
          );
          const seriesData = response.apiKeysWithRequests.map(
            (item: ApiKeyWithRequest) => item.today_Requests
          );

          // Update chart options with fetched data
          const chartOptions = {
            series: [
              {
                name: "Today's Requests",
                type: "column",
                data: seriesData,
              },
            ],
            chart: {
              height: 300,
              type: "bar", // Bar chart
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                columnWidth: "50%",
                endingShape: "rounded",
              },
            },
            fill: {
              opacity: 1,
              colors: ["#023e8a"],
            },
            labels: labels,
            xaxis: {
              categories: labels,
              labels: {
                style: {
                  fontSize: "12px",
                  colors: "#6c757d",
                },
              },
            },
            yaxis: {
              title: {
                text: "Requests",
              },
            },
            tooltip: {
              shared: true,
              intersect: false,
              style: {
                fontSize: "12px",
                color: "#023e8a",
              },
            },
            colors: ["#023e8a"],
          };

          const chart = new ApexCharts(chartRef.current, chartOptions);
          chart.render();

          // Clean up on component unmount
          return () => {
            chart.destroy();
          };
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return <div ref={chartRef} id="chart" />;
};

export default ColumnChart;
