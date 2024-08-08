import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import Brightness3Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../../Images/Boorvika-png-logo.png";

export default function Navbar({ mode, setMode }) {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <div className="Navbar">
      <AppBar sx={{ backgroundColor: mode ? "#ff9c07" : "" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              component="a"
              sx={{
                mr: 2,
                ml: 0,
                display: { md: "flex" },
              }}
              onClick={() => navigate("/home")}
            >
              <img src={logo} alt={logo} style={{ width: "130px" }} />
            </Button>
            <Box sx={{ flexGrow: 1, display: "flex", gap: "10px" }}>
              <Button
                color="inherit"
                // variant="contained"
                onClick={(mode) => navigate("/mobiles")}
              >
                Mobiles
              </Button>

              {role === "admin" ? (
                <Button color="inherit" onClick={() => navigate("/AddMobile")}>
                  Add Mobile
                </Button>
              ) : (
                ""
              )}
            </Box>

            <Button
              color="inherit"
              onClick={() => setMode(!mode)}
              startIcon={mode ? <Brightness7Icon /> : <Brightness3Icon />}
            >
              {mode ? "light" : "dark"} Mode
            </Button>

            <Tooltip title="Logout">
              <IconButton
                color="inherit"
                style={{ marginLeft: 3, padding: "0px ! important" }}
                onClick={() => logout()}
              >
                <LogoutIcon fontSize="medium" sx={{ color: "white " }} />
                <p
                  style={{
                    color: "white",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    margin: "0px 0px 0px 0px",
                    fontSize: "15px",
                  }}
                >
                  Logout
                </p>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
