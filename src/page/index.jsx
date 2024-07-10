import React from "react";
import { Box, InputBase, Avatar, Typography } from "@mui/material";
import defaultAvatar from "../assets/images/avatar.png";
import logo from "../assets/images/logo.png";
import { Sidebar } from "../components/Sidebar";
import { AllUsers } from "../components/AllUsers";

const Home = () => {
  return (
    <Box sx={{ color: 'black', boxShadow: 1, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: 100, height: 72, marginRight: 16 }} />
        <InputBase
          placeholder="Search here"
          sx={{ bgcolor: 'grey.100', outline: 'none', flexGrow: 1, mr: 2, px: 1 }}
          className='
          w-full px-3 py-1 rounded-xl
          border-2 border-gray-200 outline-none
          focus:border-green-700
          '
        />
        <Box sx={{ display: 'flex' }}>
          {['Notifications', 'Wallet', 'Enquiry', 'Settings'].map((text) => (
            <Typography key={text} variant="h6" sx={{ mx: 2, fontWeight: 'bold' }}>
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={defaultAvatar} alt="User" sx={{ width: 32, height: 32, mr: 1 }} />
      </Box>
      <Box display="flex">
        <Sidebar />
        <AllUsers />
      </Box>
    </Box>
  );
};

export default Home;
