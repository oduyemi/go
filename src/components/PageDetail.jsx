import React from "react";
import { Box, Typography } from "@mui/material";

export const PageDetail = () => {
  return (
    <Box
      maxWidth="xl"
      className="mt-10 banner md:pl-32"
    >
      <Box>
        <Typography
          variant="subtitle1"
          className="subhead md:text-2xl text-gray-500 sm:text-sm trp"
          sx={{
            marginBottom: 3,
            fontWeight: 300,
            fontSize: "10px",
          }}
          gutterBottom
        >
          Settings / Users &amp; Roles Setting
        </Typography>
        <Typography
          variant="h5"
          className="topic md:text-2xl sm:text-sm trp"
          sx={{
            marginBottom: 3, 
            fontWeight: 500,
          }}
          gutterBottom
        >
          Users &amp; Roles
        </Typography>
        <Typography
          variant="subtitle1"
          className="subhead md:text-2xl text-gray-500 sm:text-sm trp"
          sx={{
            marginBottom: 3,
            fontWeight: 300,
            fontSize: "10px",
          }}
          gutterBottom
        >
          Manage all users in your business
        </Typography>
      </Box>
    </Box>
  );
};
