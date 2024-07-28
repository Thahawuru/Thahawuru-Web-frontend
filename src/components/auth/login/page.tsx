import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useAuthentication } from "@/api/useAuthentication";
import Toast from "@/components/utils/toaster";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "8px",
};

const LoginPage = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const { signin ,signup} = useAuthentication();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsLogin(true);
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const response = await signin({ email, password });
      if (response.status === 200) {
        Toast({ type: "success", message: "Login Success" });
        console.log(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data.apiuser));
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        router.push("/developer/dashboard");
        handleClose();
      }
    } catch (error: any) {
      Toast({ type: "fail", message: "Login failed" });
    }
  };

  const handleSignUp = async(event: any) => {
    event.preventDefault();
    try {
      const response = await signup({ email, password });
      if (response.status === 201) {
        Toast({ type: "success", message: "Signup Success" });
        router.push("/");
        handleClose();
      }
    } catch (error: any) {
      Toast({ type: "fail", message: "Signup failed" });
    }
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: "#edf2f4",
          backgroundColor: "#023e8a",
          "&:hover": {
            backgroundColor: "#0D096D",
          },
        }}
      >
        <b>Login</b>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: 600 }}
          className="flex flex-col justify-center items-center m-10"
        >
          <Typography
            variant="h6"
            id="parent-modal-title"
            sx={{ color: "secondaryTwo.main" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <form
            className="w-3/4"
            onSubmit={isLogin ? handleLogin : handleSignUp}
          >
            <div className="w-full flex flex-row">
              <h1 className="text-2xl text-left font-bold text-black mb-4">
                තහවුරු &nbsp;
              </h1>
              <h1 className="text-2xl text-left font-bold text-secondaryTwo mb-4">
                - &nbsp; {isLogin ? "Sign In" : "Sign Up"}
              </h1>
            </div>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            {/* <Link
              href={isLogin ? "/admin/dashboard" : "/admin/dashboard"}
              passHref
            > */}
            <Button
              type="submit"
              className="mt-4"
              variant="contained"
              sx={{
                backgroundColor: "secondaryTwo.main",
                textTransform: "none",
              }}
              fullWidth
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            {/* </Link> */}
          </form>
          <div className="w-full h-[40px] flex flex-row mt-4 justify-between items-center">
            <Button
              onClick={() => setIsLogin(!isLogin)}
              sx={{
                color: "secondaryTwo.main",
                textTransform: "none",
              }}
            >
              <b>{isLogin ? "Sign Up" : "Login"}</b>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginPage;
