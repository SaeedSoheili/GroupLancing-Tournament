import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import MuiAlert from "@mui/material/Alert"; // Import Alert for Snackbar
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as LinkReactRouterDom } from "react-router-dom";

const defaultTheme = createTheme();

export default function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false); // State to control Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = React.useState(""); // State to set the Snackbar message

  const isFormValid = (user) => {
    return (
      user.firstName.trim() !== "" &&
      user.lastName.trim() !== "" &&
      user.email.trim() !== "" &&
      user.password.trim() !== ""
    );
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = new FormData(event.currentTarget);
    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    if (!isFormValid(user)) {
      console.error("Error: Empty fields detected.");
      setSnackbarMessage("Please fill in all fields.");
      setOpenSnackbar(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://192.168.1.100:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log("User registered successfully");
        setSnackbarMessage("You registered successfully");
      } else if (response.status === 409) {
        // 409 status code indicates email conflict (already in use)
        console.error("Error registering user: Email already exists.");
        setSnackbarMessage("Email already in use. Please choose another.");
      } else {
        console.error("Error registering user");
        setSnackbarMessage("Error registering");
      }

      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 5000);
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkReactRouterDom to="/login" variant="body2">
                  Already have an account? Sign in
                </LinkReactRouterDom>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000} // 5 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={
            snackbarMessage.includes("successfully") ? "success" : "error"
          }
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
