"use client";
import React, { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import Sidebar from "@/components/sidebar/admin/sidebar";
import Welcome from "@/components/welcome";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  TextField,
} from "@mui/material";
import { useAuthContext } from "@/hooks/useAuthContext";
import { Tooltip, Button, TableCell } from '@mui/material';


interface Log {
  _id: string;
  apiKey: string;
  route: string;
  ipAddress:string;
  responseTime: number;
  statusCode: number;
  statusMessage: string;
  timestamp: string;
  __v: number;
}

export default function Page() {
  const { user } = useAuthContext();

  const [activeItem, setActiveItem] = useState("Logs & Analytics");
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState<string | null>(null);

  const NODE_BASE_URL = process.env.NEXT_PUBLIC_NODE_BASE_URL!;

  const fetchLogs = async () => {
    try {
      const response = await fetch(`http://localhost:3010/logs/get-all-logs`);

      if (!response.ok) {
        throw new Error("Failed to fetch logs");
      }

      const data = await response.json();
      console.log(data);

      if (Array.isArray(data)) {
        console.log("response is an array");
      }

      setLogs(data.data);
    } catch (err) {
      setError("An error occurred while fetching logs");
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`copied to clipboard!`);
      })
      .catch((err) => {
        console.log("Error Copiying to Clipboard");
      });
  };


  const handleSetActiveItem = (itemTitle: any) => {
    setActiveItem(itemTitle);
  };
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

  const filteredLogs = logs.filter((log: Log) =>
    (log._id && log._id.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.apiKey && log.apiKey.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.route && log.route.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.responseTime && log.responseTime.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.statusCode && log.statusCode.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.statusMessage && log.statusMessage.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.timestamp && log.timestamp.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (log.ipAddress && log.ipAddress.toLowerCase().includes(searchQuery.toLowerCase()))||
    (log.__v && log.__v.toString().toLowerCase().includes(searchQuery.toLowerCase()))
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
                      <TableCell>API Key</TableCell>
                      <TableCell>Route</TableCell>
                      <TableCell>Response Time</TableCell>
                      <TableCell>Status Code</TableCell>
                      <TableCell>Status Message</TableCell>
                      <TableCell>Timestamp</TableCell>
                      <TableCell>IP</TableCell>
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
                          <TableCell style={{ maxWidth: "150px" }}>
                            <Tooltip title={log.apiKey} placement="top">
                              <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                <Button className="bg-secondary text-white hover:bg-secondary" onClick={() => handleCopy(log.apiKey)} variant="outlined" size="small" style={{ marginLeft: "8px" }}>
                                  API Key
                                </Button>
                              </span>
                            </Tooltip>
                          </TableCell>

                          <TableCell style={{ maxWidth: "150px" }}>
                            <Tooltip title={log.route} placement="top">
                              <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                <Button className="bg-secondary text-white hover:bg-secondary" onClick={() => handleCopy(log.route)} variant="outlined" size="small" style={{ marginLeft: "8px" }}>
                                  Route
                                </Button>
                              </span>
                            </Tooltip>
                          </TableCell>
                          <TableCell>{log.responseTime}</TableCell>
                          <TableCell>{log.statusCode}</TableCell>
                          <TableCell>{log.statusMessage}</TableCell>
                          <TableCell>{log.timestamp}</TableCell>
                          <TableCell>{log.ipAddress}</TableCell>
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
