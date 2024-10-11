"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts";
import {
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

// Dynamic imports for React components
const Sidebar = dynamic(() => import("@/components/sidebar/admin/sidebar"), { ssr: false });
const Welcome = dynamic(() => import("@/components/welcome"), { ssr: false });

interface RevenueData {
  id: number;
  apiName: string;
  revenue: number;
  date: string;
}

const initialRevenueData: RevenueData[] = [
  { id: 1, apiName: "API 1", revenue: 500, date: "2023-07-01" },
  { id: 2, apiName: "API 2", revenue: 1500, date: "2023-07-02" },
  { id: 3, apiName: "API 3", revenue: 700, date: "2023-07-03" },
  { id: 4, apiName: "API 4", revenue: 1200, date: "2023-07-04" },
  { id: 5, apiName: "API 5", revenue: 900, date: "2023-07-05" },
  { id: 6, apiName: "API 6", revenue: 300, date: "2023-07-06" },
];

export default function RevenuePage() {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  
  useEffect(() => {
    console.log("USER", user);
    authorize("ADMIN");
  }, [authorize, user]);

  const [activeItem, setActiveItem] = useState("Payments");
  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [revenueData, setRevenueData] = useState<RevenueData[]>(initialRevenueData);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const barChartRef = useRef<HTMLDivElement>(null);
  const lineChartRef = useRef<HTMLDivElement>(null);

  // Effect to render ApexCharts
  useEffect(() => {
    if (typeof window !== "undefined" && barChartRef.current && lineChartRef.current) {
      const barChartOptions = {
        chart: {
          type: "bar",
          height: 350,
          background: "transparent",
        },
        series: [
          {
            name: "Revenue",
            data: revenueData.map((data) => data.revenue),
          },
        ],
        xaxis: {
          categories: revenueData.map((data) => data.date),
        },
        colors: ["#023e8a"],
      };

      const lineChartOptions = {
        chart: {
          type: "line",
          height: 350,
          background: "transparent",
        },
        series: [
          {
            name: "Revenue",
            data: revenueData.map((data) => data.revenue),
          },
        ],
        xaxis: {
          categories: revenueData.map((data) => data.date),
        },
        colors: ["#023e8a"],
      };

      const barChart = new ApexCharts(barChartRef.current, barChartOptions);
      const lineChart = new ApexCharts(lineChartRef.current, lineChartOptions);

      barChart.render();
      lineChart.render();

      return () => {
        barChart.destroy();
        lineChart.destroy();
      };
    }
  }, [revenueData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const filteredData = revenueData.filter(
    (data) =>
      data.apiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-white min-h-screen h-auto flex flex-row items-end justify-center">
      <div className="h-screen flex flex-col justify-between items-center">
        <Sidebar activeItem={activeItem} onSetActiveItem={handleSetActiveItem} />
      </div>
      <div className="flex flex-col w-5/6 ml-[250px]">
        <Welcome />
        <div className="flex flex-row w-full h-auto p-4 mt-20">
          <div className="flex flex-row justify-start items-center w-2/3">
            <h1 className="text-2xl font-bold text-secondaryTwo w-full text-left pl-10">
              <b>Revenue Analytics</b>
            </h1>
          </div>
        </div>

        <div className="flex flex-row w-full p-4">
          <div className="w-1/2 p-4">
            <Paper
              sx={{
                padding: "20px",
                marginBottom: "20px",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div ref={barChartRef}></div>
            </Paper>
          </div>
          <div className="w-1/2 p-4">
            <Paper
              sx={{
                padding: "20px",
                marginBottom: "20px",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div ref={lineChartRef}></div>
            </Paper>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full min-h-[550px] h-auto ml-10 mr-10">
            <div className="flex flex-row justify-center items-center w-full h-auto p-4">
              <div className="flex flex-row justify-end items-center w-1/2">
                <TextField
                  label="Search"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={searchQuery}
                  onChange={handleSearch}
                  InputProps={{
                    style: {
                      height: "40px",
                    },
                  }}
                />
              </div>
            </div>

            <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <TableContainer>
                <Table aria-label="revenue table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>API Name</TableCell>
                      <TableCell>Revenue</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((data) => (
                        <TableRow key={data.id}>
                          <TableCell>{data.id}</TableCell>
                          <TableCell>{data.apiName}</TableCell>
                          <TableCell>{data.revenue}</TableCell>
                          <TableCell>{data.date}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) =>
                  setRowsPerPage(parseInt(event.target.value, 10))
                }
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
