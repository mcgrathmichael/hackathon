// import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Landing.scss";
import CustomizedHook from "../components/SearchBar";
import NavBar from "../NavBar/NavBar";

const theme = createTheme();

export default function SignInSide() {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        className="landingbg"
      >
        <CssBaseline />
        <Grid
          className="image"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://wallpaperaccess.com/full/119897.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#cb6ce6",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Typography
          variant="h4"
          my={49}
          sx={{ position: "absolute", color: "white", maxwidth: "50px" }}
        >
          Whats your excuse for not being here..?
        </Typography>
        <Grid
          className="landing_bg"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{ background: "linear-gradient(to left, #d3425c, #cc6ce6bb)" }}
          square
        >
          <NavBar />

          <Box
            sx={{
              my: 7,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Typography component="h1" variant="h4">
              Find the perfect beach for you!
            </Typography>
            <Box
              component="form"
              noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 7, width: "100%", maxWidth: "300px" }}
            >
              <CustomizedHook />
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
