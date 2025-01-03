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
  MenuItem,
} from "@mui/material";
import { BiCheckCircle, BiXCircle, BiDetail } from "react-icons/bi";
import { useAuthContext } from "@/hooks/useAuthContext";
interface API {
  requestId: number;
  name: string;
  email: string;
  requestDate: string;
  APIType: string;
  status: string;
}

const initialAPI: API[] = [
  {
    requestId: 6,
    name: "David Wilson",
    email: "din@gmail.com",
    requestDate: "",
    APIType: "basic",
    status: "request",
  },
  {
    requestId: 2,
    name: "David Wilson",
    email: "din@gmail.com",
    requestDate: "",
    APIType: "basic",
    status: "request",
  },
];

export default function Page() {
  const { user } = useAuthContext();

  const [activeItem, setActiveItem] = useState("Requests");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [apis, setAPIs] = useState<API[]>(initialAPI);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [status, setStatus] = useState<string>("All");

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

  const handleStartDateChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEndDate(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStatus(event.target.value);
  };

  const filteredAPIs = apis.filter((api) => {
    const matchQuery =
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.APIType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.requestDate.toLowerCase().includes(searchQuery.toLowerCase());

    const matchStatus = status === "All" || api.status === status;

    const matchDate =
      (!startDate || new Date(api.requestDate) >= new Date(startDate)) &&
      (!endDate || new Date(api.requestDate) <= new Date(endDate));

    return matchQuery && matchStatus && matchDate;
  });

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
              <b>API Requests</b>
            </h1>
          </div>
        </div>

        <div className="flex flex-row w-full h-auto p-4">
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginRight: "16px" }}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginRight: "16px" }}
          />
          {/* <TextField
            label="Status"
            select
            value={status}
            onChange={handleStatusChange}
            style={{ marginRight: "16px", width: "150px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Declined">Declined</MenuItem>
          </TextField> */}
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

        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full min-h-[550px] h-auto mb-10 ml-10 mr-10">
            <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <TableContainer>
                <Table aria-label="maintainer table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Request ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Request Date</TableCell>
                      <TableCell>API Type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAPIs
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((api) => (
                        <TableRow key={api.requestId}>
                          <TableCell>{api.requestId}</TableCell>
                          <TableCell>{api.name}</TableCell>
                          <TableCell>{api.email}</TableCell>
                          <TableCell>{api.requestDate}</TableCell>
                          <TableCell>{api.APIType}</TableCell>
                          <TableCell>{api.status}</TableCell>
                          <TableCell align="right">
                            {api.status === "request" ? (
                              <>
                                <IconButton color="primary">
                                  <BiCheckCircle />
                                </IconButton>
                                <IconButton color="secondary">
                                  <BiXCircle />
                                </IconButton>
                                <IconButton color="primary">
                                  <BiDetail />
                                </IconButton>
                              </>
                            ) : (
                              <IconButton color="primary">
                                <BiDetail />
                              </IconButton>
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
                count={filteredAPIs.length}
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
