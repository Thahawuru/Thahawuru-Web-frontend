"use client";
import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { monthlyUsageRequests } from "../../../../api/developerDashboard";

const DateTimeXAxis: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await monthlyUsageRequests();
        const usageData = response.data.monthly_usage.map((entry: any) => {
          const { year, month, total_requests } = entry;
          const date = new Date(year, month - 1).getTime();
          return [date, total_requests];
        });
        setChartData(usageData);
      } catch (error) {
        console.error("Error fetching data for chart:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      const options = {
        series: [
          {
            name: "Total Requests",
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
                text: "Threshold",
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
            style: {
              colors: "#adb5bd",
            },
          },
        },
        tooltip: {
          x: {
            format: "MMM yyyy",
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
    }
  }, [chartData]);

  return <div id="chart-timeline" ref={chartRef}></div>;
};

export default DateTimeXAxis;
