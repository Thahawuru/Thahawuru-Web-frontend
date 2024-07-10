import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsLogin(true);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    handleClose();
  };

  const handleSignUp = (event: any) => {
    event.preventDefault();
    // Handle sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
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
        <Box sx={{ ...style, width: 600 }}>
          <Typography
            variant="h6"
            id="parent-modal-title"
            sx={{ color: "secondaryTwo.main" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <form onSubmit={isLogin ? handleLogin : handleSignUp}>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "secondaryTwo.main", fontWeight: "bold" }}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Typography>
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
            <div className="w-full h-[40px] flex flex-row mt-4 justify-between items-center">
              <span
                className="text-secondaryTwo text-xs cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                <b>{isLogin ? "Sign Up" : "Login"}</b>
              </span>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
