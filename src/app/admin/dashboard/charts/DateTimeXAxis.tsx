"use client";
import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { getDailyRequests } from "../../../../api/adminDashboard";

interface DailyRequest {
  date: string;
  request_count: number;
}

const DateTimeXAxis: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [dailyRequests, setDailyRequests] = useState<DailyRequest[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDailyRequests();
        if (response && Array.isArray(response)) {
          setDailyRequests(response);
        } else {
          console.error("Daily requests not found in response:", response);
        }
      } catch (error) {
        console.error("Error fetching daily requests:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dailyRequests.length === 0) return;

    const chartData = dailyRequests.map((item) => [
      new Date(item.date).getTime(), // Convert date to timestamp for ApexCharts
      item.request_count,
    ]);

    // Format date for x-axis labels
    const formatDate = (timestamp: number) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    };

    const options = {
      series: [
        {
          data: chartData,
        },
      ],
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#ffffff",
            label: {
              show: true,
              text: "Support",
              style: {
                color: "#fff",
                background: "#023e8a",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        labels: {
          formatter: (value: number) => formatDate(value), // Format date on x-axis labels
          style: {
            colors: "#adb5bd",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      colors: ["#023e8a"],
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [dailyRequests]);

  return <div id="chart-timeline" ref={chartRef}></div>;
};

export default DateTimeXAxis;
