"use client";
import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { monthlyUsageRequests } from "../../../../api/developerDashboard";

interface MonthlyUsage {
  year: number;
  month: number;
  total_requests: number;
}

interface ChartRef extends HTMLDivElement {
  chart?: ApexCharts;
}

const ColumnChart = () => {
  const chartRef = useRef<ChartRef | null>(null);
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    series: [] as number[],
  });

  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      try {
        // Fetch data from API
        const response = await monthlyUsageRequests();
        const monthly_usage: MonthlyUsage[] = response.data.monthly_usage;

        // Transform data for the chart
        const labels = monthly_usage.map(
          (item: MonthlyUsage) =>
            `${item.year}-${item.month.toString().padStart(2, "0")}`
        );
        const seriesData = monthly_usage.map(
          (item: MonthlyUsage) => item.total_requests
        );

        // Set chart data
        setChartData({ labels, series: seriesData });

        // Chart options
        const chartOptions = {
          series: [
            {
              name: "Requests",
              type: "column",
              data: seriesData,
            },
          ],
          chart: {
            height: 300,
            type: "bar",
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
            type: "category",
            labels: {
              format: "MMM yyyy",
            },
          },
          yaxis: {
            title: {
              text: "Total Requests",
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

        // Check if chartRef is initialized before rendering
        if (chartRef.current) {
          // Destroy the previous chart if it exists
          if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
          }

          const chart = new ApexCharts(chartRef.current, chartOptions);
          chart.render();

          // Store the chart instance in the ref to clean up later
          chartRef.current.chart = chart;

          // Cleanup on component unmount
          return () => {
            if (chartRef.current && chartRef.current.chart) {
              chartRef.current.chart.destroy();
            }
          };
        }
      } catch (error) {
        console.error("Error fetching monthly usage requests", error);
      }
    };

    fetchDataAndRenderChart();
  }, []);

  return <div ref={chartRef} id="chart" />;
};

export default ColumnChart;
