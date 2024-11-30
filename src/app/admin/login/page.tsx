"use client";
import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAuthentication } from "@/api/useAuthentication";
import Toast from "@/components/utils/toaster";
import { useRouter } from "next/navigation";
import { AuthContext } from '@/context/authContext';
import { useContext } from 'react';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login, logoutUser, user, loading } = useContext(AuthContext);

  const { adminMaintainerSignin } = useAuthentication();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await adminMaintainerSignin({ email, password });
      if (response.status === 200) {
        Toast({ type: "success", message: "Login Success" });
        login(response.data.data);
        if (response.data.data.user.role === "ADMIN") {
          router.push("/admin/dashboard");
        } else if (response.data.data.user.role === "MAINTAINER") {
          router.push("/maintainer/dashboard");
        }
      }
    } catch (error: any) {
      Toast({ type: "fail", message: "Login failed" });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
            bgcolor: "#f8f9fa",
            p: 3,
            borderRadius: 1,
          }}
        >
          <Typography component="h1" variant="h5" gutterBottom>
            <b className="text-secondary">තහවුරු - Admin & Maintainer Login</b>
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-secondaryTwo text-white"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
