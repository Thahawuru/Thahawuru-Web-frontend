"use client";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  TextField,
} from "@mui/material";

interface Maintainer {
  email: string;
  ipAddress: string;
  dateAndTime: string;
  action: string;
  url: string;
  code: string;
}

const initialMaintainers: Maintainer[] = [
  {
    email: "john@example.com",
    ipAddress: "197:168:1:1",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "sam@example.com",
    ipAddress: "197:168:1:2",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "mahesh@example.com",
    ipAddress: "197:168:1:3",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "dinum@example.com",
    ipAddress: "197:168:1:4",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "lahiru@example.com",
    ipAddress: "197:168:1:5",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "john@example.com",
    ipAddress: "197:168:1:1",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "sam@example.com",
    ipAddress: "197:168:1:2",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "mahesh@example.com",
    ipAddress: "197:168:1:3",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "dinum@example.com",
    ipAddress: "197:168:1:4",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "lahiru@example.com",
    ipAddress: "197:168:1:5",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "john@example.com",
    ipAddress: "197:168:1:1",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "sam@example.com",
    ipAddress: "197:168:1:2",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "mahesh@example.com",
    ipAddress: "197:168:1:3",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "dinum@example.com",
    ipAddress: "197:168:1:4",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
  {
    email: "lahiru@example.com",
    ipAddress: "197:168:1:5",
    dateAndTime: "2021-10-10 12:00:00",
    action: "Login",
    url: "/admin/dashboard",
    code: "200",
  },
];

export default function Page() {
  const [activeItem, setActiveItem] = useState("Logs & Analytics");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [maintainers, setMaintainers] =
    useState<Maintainer[]>(initialMaintainers);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(7);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const filteredLogs = maintainers.filter(
    (log) =>
      log.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.ipAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.dateAndTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <b>Log Entries</b>
            </h1>
          </div>

          <div className="flex flex-row justify-end items-center w-1/2">
            <div className="flex flex-row justify-between items-center w-1/2">
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
        </div>
        <Link href="/admin/logs/analytics" className="w-3/4">
          <button
            type="submit"
            className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform  ml-10 mb-2"
          >
            Log Analytics
          </button>
        </Link>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full min-h-[550px] h-auto mb-10 ml-10 mr-10">
            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>IP Address</TableCell>
                      <TableCell>Date and Time</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>URL</TableCell>
                      <TableCell>Code</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredLogs
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((log, index) => (
                        <TableRow sx={{ padding: "49px" }} key={index}>
                          <TableCell>
                            {page * rowsPerPage + index + 1}
                          </TableCell>{" "}
                          <TableCell>{log.email}</TableCell>
                          <TableCell>{log.ipAddress}</TableCell>
                          <TableCell>{log.dateAndTime}</TableCell>
                          <TableCell>{log.action}</TableCell>
                          <TableCell>{log.url}</TableCell>
                          <TableCell>{log.code}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[7, 14, 21]}
                component="div"
                count={filteredLogs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
