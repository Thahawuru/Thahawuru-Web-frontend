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
  TablePagination,
  TextField,
  Button,
} from "@mui/material";
import { saveAs } from "file-saver";
import { CSVLink } from "react-csv";
import { useAuthContext } from "@/hooks/useAuthContext";


interface API {
  id: number;
  email: string;
}

const initialAPI: API[] = [
  { id: 1, email: "kasunu2001@gmail.com" },
  { id: 2, email: "kasunudara14320@gmail.com" },
  { id: 3, email: "dinirubhanuka@gmail.com" },
  { id: 4, email: "diniru@gmail.com" },
  { id: 5, email: "gamindu@gmail.com" },
  { id: 6, email: "sonal@gmail.com" },
  { id: 7, email: "pinsari@gmail.com" },
];

const Page = () => {
  const { user } = useAuthContext();
  
  const [activeItem, setActiveItem] = useState("Emails");
  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [apis, setAPIs] = useState<API[]>(initialAPI);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleDelete = (id: number): void => {
    setAPIs(apis.filter((api) => api.id !== id));
  };

  const handlePreviewUsage = (id: number): void => {
    console.log(`Preview API usage with id ${id}`);
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

  const filteredAPIs = apis.filter((api) =>
    api.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadCSV = () => {
    const csvContent = [
      ["ID", "Email"],
      ...filteredAPIs.map((api) => [api.id, api.email]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "emails.csv");
  };

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
              <b>Subscribers list</b>
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
                  style: { height: "40px" },
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full min-h-[550px] h-auto mb-10 ml-10 mr-10">
            <Paper sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
              <TableContainer>
                <Table aria-label="maintainer table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAPIs
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((api) => (
                        <TableRow key={api.id}>
                          <TableCell>{api.id}</TableCell>
                          <TableCell>{api.email}</TableCell>
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
          <div className="flex flex-col h-[200px] justify-center items-center w-full mb-4 mb-60">
            <h1 className="text-1xl font-bold text-secondaryTwo w-full text-center mb-4 text-center">
              Export Subscribers Mail list
            </h1>
            <p className="text-sm font-normal text-black w-full text-center mb-4 text-center">
              Export the list of subscribers in CSV format
            </p>
            <div className="flex flex-row justify-center items-center w-full px-10 mb-4">
              <button
                onClick={handleDownloadCSV}
                className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
