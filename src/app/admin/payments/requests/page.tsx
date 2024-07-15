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
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface API {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  apiName: string;
  formAnswers: string; // Add formAnswers to display form answers
}

const initialAPI: API[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phoneNumber: "0772476547",
    apiName: "Identity API",
    formAnswers: "Form answers for Jane Doe",
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Page() {
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
      api.apiName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [open, setOpen] = useState(false);
  const [selectedFormAnswers, setSelectedFormAnswers] = useState<string>("");

  const handleOpen = (formAnswers: string) => {
    setSelectedFormAnswers(formAnswers);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleApprove = (id: number) => {
    console.log(`Approve API request with id ${id}`);
    // Implement approve functionality
  };

  const handleDecline = (id: number) => {
    console.log(`Decline API request with id ${id}`);
    // Implement decline functionality
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
              <b>Requests for APIs</b>
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
                      <TableCell>API Name</TableCell>
                      <TableCell>Form Answers</TableCell>
                      <TableCell>Action</TableCell>
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
                          <TableCell>{api.apiName}</TableCell>
                          <TableCell>
                            <IconButton
                              color="primary"
                              onClick={() => handleOpen(api.formAnswers)}
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              color="primary"
                              onClick={() => handleApprove(api.id)}
                            >
                              <CheckCircleIcon />
                            </IconButton>
                            <IconButton
                              color="error"
                              onClick={() => handleDecline(api.id)}
                            >
                              <CancelIcon />
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Form Answers
          </Typography>
          <Typography sx={{ mt: 2 }}>{selectedFormAnswers}</Typography>
        </Box>
      </Modal>
    </div>
  );
}
