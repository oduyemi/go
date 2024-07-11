import React from "react";
import { Box, InputBase, Avatar, Typography, Grid } from "@mui/material";
import 'animate.css';
import defaultAvatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";

const Home = () => {
  return (
    <Box className="animate__animated animate__fadeIn" sx={{ bgcolor: "white", boxShadow: 1, p: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Left Section: Logo and Search Input */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            className="animate__animated animate__bounceInLeft"
            style={{ width: 100, height: 72, marginRight: 16 }}
          />
          <InputBase
            placeholder="Search here"
            sx={{
              bgcolor: "grey.100",
              outline: "none",
              flexGrow: 1,
              mr: { xs: 1, md: 2 },
              px: 1,
            }}
            className="w-full px-3 py-1 rounded-xl border-2 border-gray-200 outline-none focus:border-green-700 animate__animated animate__lightSpeedInRight"
          />
        </Grid>

        {/* Right Section: Navigation and Avatar */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", md: "flex-end" } }}
        >
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2 }}>
            {['Notifications', 'Wallet', 'Enquiry', 'Settings'].map((text) => (
              <Typography
                key={text}
                variant="h6"
                sx={{ fontWeight: 'bold', display: { xs: 'none', md: 'block' } }}
                className="animate__animated animate__fadeInUp"
              >
                {text}
              </Typography>
            ))}
          </Box>
          <Avatar
            src={defaultAvatar}
            alt="User"
            className="animate__animated animate__fadeInRight"
            sx={{ width: 32, height: 32, ml: { xs: 1, md: 0 } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
