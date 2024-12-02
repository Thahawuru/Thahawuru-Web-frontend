"use client";
import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { getAPIDataTypes } from "../../../../api/adminDashboard";

const PieChart = () => {
  const chartRef = useRef(null);
  const [pieData, setPieData] = useState<{ labels: string[]; series: number[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAPIDataTypes();
        if (response && Array.isArray(response)) {
          const labels = response.map((item) =>
            item.apidata_type === 1 ? "Identity" : item.apidata_type === 2 ? "License" : "Both"
          );
          const series = response.map((item) => parseInt(item.count, 10));

          setPieData({ labels, series });
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!pieData) return;

    const { labels, series } = pieData;

    const chartOptions = {
      series: series,
      chart: {
        type: "pie",
        height: 300,
      },
      labels: labels,
      colors: ["#023e8a", "#adb5bd", "#023e8a"],
      dataLabels: {
        enabled: true,
        style: { fontSize: "14px", colors: ["#fff"] },
      },
      legend: {
        position: "bottom",
        labels: {
          colors: ["#000"],
          useSeriesColors: false,
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
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [pieData]);

  return <div ref={chartRef} id="chart" />;
};

export default PieChart;
