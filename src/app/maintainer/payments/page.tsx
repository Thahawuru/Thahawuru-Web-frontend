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
  Icon,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAuthContext } from "@/hooks/useAuthContext";

interface API {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
  payment: string;
  paymentProof: string;
}

const initialAPI: API[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 6,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 7,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 8,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 10,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 11,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 12,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 13,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 14,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 15,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 16,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 17,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 18,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 19,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 20,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 21,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 22,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 23,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 24,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 25,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 26,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 27,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 28,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 29,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 30,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 31,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
  {
    id: 32,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    date: "2021-10-10",
    time: "10:00 AM",
    payment: "10,000 LKR",
    paymentProof: "https://example.com/proof.jpg",
  },
];

export default function Page() {
  const { user } = useAuthContext();
  
  const [activeItem, setActiveItem] = useState("Payments");

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
  const handleRegenerate = (id: number): void => {
    console.log(`Regenerate API with id ${id}`);
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

  const filteredAPIs = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.payment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.paymentProof.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.time.toLowerCase().includes(searchQuery.toLowerCase())
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
              <b>Payment History</b>
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
                      <TableCell>Payment Date</TableCell>
                      <TableCell>Payment Time</TableCell>
                      <TableCell>Payment</TableCell>
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
                        <TableRow key={api.id}>
                          <TableCell>{api.id}</TableCell>
                          <TableCell>{api.name}</TableCell>
                          <TableCell>{api.email}</TableCell>
                          <TableCell>{api.phoneNumber}</TableCell>
                          <TableCell>{api.date}</TableCell>
                          <TableCell>{api.time}</TableCell>
                          <TableCell>{api.payment}</TableCell>
                          <TableCell align="right">
                            <Link
                              href={api.paymentProof}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IconButton
                                color="primary"
                                onClick={() => handlePreviewUsage(api.id)}
                              >
                                <VisibilityIcon />
                              </IconButton>
                            </Link>
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
