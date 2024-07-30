"use client";
import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import Sidebar from "@/components/sidebar/maintainer/sidebar";
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
  Button,
} from "@mui/material";
import { BiCheckCircle, BiXCircle, BiDetail } from "react-icons/bi";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

interface APIRequest {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  time: string;
  apikey: string;
  status: string; // New field for status
}

const initialAPIRequests: APIRequest[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    time: "12 Months",
    apikey: "ansjqwirl124bdmdasjwq",
    status: "Pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    time: "12 Months",
    apikey: "ansjqwirl124bdmdasjwq",
    status: "Approved",
  },
  // Add more API request objects as needed
];

export default function Page() {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    if (user) {
      authorize("MAINTAINER");
    }
  }, [authorize, user]);

  const [activeItem, setActiveItem] = useState("Active");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [apiRequests, setAPIRequests] =
    useState<APIRequest[]>(initialAPIRequests);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleDelete = (id: number): void => {
    setAPIRequests(apiRequests.filter((api) => api.id !== id));
  };

  const handlePreviewUsage = (id: number): void => {
    console.log(`Preview API usage with id ${id}`);
  };

  const handleApprove = (id: number): void => {
    const updatedRequests = apiRequests.map((api) =>
      api.id === id ? { ...api, status: "Approved" } : api
    );
    setAPIRequests(updatedRequests);
  };

  const handleDecline = (id: number): void => {
    const updatedRequests = apiRequests.map((api) =>
      api.id === id ? { ...api, status: "Declined" } : api
    );
    setAPIRequests(updatedRequests);
  };

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

  const filteredAPIRequests = apiRequests.filter(
    (api) =>
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.apikey.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.status.toLowerCase().includes(searchQuery.toLowerCase())
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
              <b>Reviewing API Requests</b>
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
        <div className="flex flex-row  w-[400px]">
          <Link href="/maintainer/api/overallAnalytics" className="w-3/4">
            <button
              type="submit"
              className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2"
            >
              Overall Analytics
            </button>
          </Link>
        </div>

        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full min-h-[550px] h-auto mb-10 ml-10 mr-10">
            <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <TableContainer>
                <Table aria-label="maintainer table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Expired After</TableCell>
                      <TableCell>API key</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAPIRequests
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((api) => (
                        <TableRow key={api.id}>
                          <TableCell>{api.id}</TableCell>
                          <TableCell>{api.name}</TableCell>
                          <TableCell>{api.email}</TableCell>
                          <TableCell>{api.phoneNumber}</TableCell>
                          <TableCell>{api.time}</TableCell>
                          <TableCell>{api.apikey}</TableCell>
                          <TableCell>{api.status}</TableCell>
                          <TableCell align="right">
                            <Link href={`/maintainer/api/apiKeyAnalytics`}>
                              <IconButton
                                color="primary"
                                onClick={() => handlePreviewUsage(api.id)}
                              >
                                <BiDetail />
                              </IconButton>
                            </Link>
                            {api.status === "Pending" && (
                              <>
                                <IconButton
                                  color="primary"
                                  onClick={() => handleApprove(api.id)}
                                >
                                  <BiCheckCircle />
                                </IconButton>
                                <IconButton
                                  color="error"
                                  onClick={() => handleDecline(api.id)}
                                >
                                  <BiXCircle />
                                </IconButton>
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredAPIRequests.length}
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
