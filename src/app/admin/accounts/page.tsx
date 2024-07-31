"use client";
import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
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
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAuthContext } from "@/hooks/useAuthContext";
import useAuthorize from "@/api/useAuthorize";

interface Maintainer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
}

const initialMaintainers: Maintainer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 6,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 7,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 8,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 10,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 11,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 12,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 13,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 14,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 15,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 16,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 17,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 18,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 19,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 20,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 21,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 22,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 23,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 24,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 25,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 26,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 27,
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 28,
    name: "Bob Brown",
    email: "bob@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 29,
    name: "Charlie Davis",
    email: "charlie@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 30,
    name: "David Wilson",
    email: "david@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 31,
    name: "Eve Miller",
    email: "eve@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
  {
    id: 32,
    name: "Frank White",
    email: "frank@example.com",
    phoneNumber: "0772476547",
    whatsappNumber: "0772476547",
  },
];

export default function Page() {
  const { user } = useAuthContext();
  const { authorize } = useAuthorize();
  useEffect(() => {
    console.log("USER", user);
    authorize("ADMIN");
  }, [authorize, user]);
  const [activeItem, setActiveItem] = useState("User Accounts");

  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };

  const [maintainers, setMaintainers] =
    useState<Maintainer[]>(initialMaintainers);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleDelete = (id: number): void => {
    setMaintainers(maintainers.filter((maintainer) => maintainer.id !== id));
  };

  const handleRevoke = (id: number): void => {
    console.log(`Revoke permissions for maintainer with id ${id}`);
  };

  const handlePreview = (id: number): void => {
    console.log(`Preview maintainer with id ${id}`);
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

  const filteredMaintainers = maintainers.filter(
    (maintainer) =>
      maintainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      maintainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      maintainer.phoneNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      maintainer.whatsappNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
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
              <b>Existing Accounts</b>
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
        <Link href="/admin/accounts/addAccount" className="w-3/4">
          <button
            type="submit"
            className="flex-none rounded-custom-3 bg-secondary hover:bg-secondaryTwo  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform ml-10 mb-2"
          >
            Add Maintainer
          </button>
        </Link>
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
                      <TableCell>Whatsapp Nuumber</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredMaintainers
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((maintainer) => (
                        <TableRow key={maintainer.id}>
                          <TableCell>{maintainer.id}</TableCell>
                          <TableCell>{maintainer.name}</TableCell>
                          <TableCell>{maintainer.email}</TableCell>
                          <TableCell>{maintainer.phoneNumber}</TableCell>
                          <TableCell>{maintainer.whatsappNumber}</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="primary"
                              onClick={() => handlePreview(maintainer.id)}
                            >
                              <VisibilityIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => handleRevoke(maintainer.id)}
                            >
                              <BlockIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => handleDelete(maintainer.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredMaintainers.length}
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
