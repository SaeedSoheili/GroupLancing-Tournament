import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link as LinkReactRouterDom } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import MuiAlert from "@mui/material/Alert"; // Import Alert for Snackbar
import Cookies from "js-cookie";
import { LoadingButton } from "@mui/lab";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://etekanesh.com/">
        ETekanesh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login({ setIsLogin }) {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const checkAutoLoginCookie = async () => {
      const autoLoginCookie = Cookies.get("tekanesh_auto_login");

      if (autoLoginCookie) {
        try {
          const response = await fetch(
            `http://localhost:4000/autologin/${autoLoginCookie}`
          );

          if (response.status === 200) {
            setIsLogin(true);
            navigate("/panel");
          }
        } catch (error) {
          console.error("Error checking auto-login cookie:", error);
        }
      }
    };

    checkAutoLoginCookie();
  }, []);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Login successful
        setIsLogin(true);
        setIsSuccess(true);
        setSnackbarMessage("Login successful");
        setOpenSnackbar(true);
        setIsLoading(false);

        // Set the cookie with the value received from the backend
        const responseBody = await response.json();
        const { cookie } = responseBody; // Assuming your backend sends the cookie value in the response
        Cookies.set("tekanesh_auto_login", cookie, { expires: 1 }); // Set the cookie for 7 days

        setTimeout(() => {
          navigate("/panel");
        }, 3000); // Navigate to "/panel" after 3 seconds
      } else {
        setIsSuccess(false);
        setSnackbarMessage("Login failed");
        setOpenSnackbar(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsSuccess(false);
      setSnackbarMessage("Error logging in");
      setOpenSnackbar(true);
      console.error("Error logging in:", error);
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1565C0" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item>
                <LinkReactRouterDom to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </LinkReactRouterDom>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={isSuccess ? "success" : "error"}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
