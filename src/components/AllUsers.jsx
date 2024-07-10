import React, { useState, useEffect } from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import { CreateUserPopup } from "./CreateUserPopup";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching data from the server", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ flex: 1, p: 4, width: '100%', maxWidth: '50%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handlePopupOpen}>
          New User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <Button variant="text" color="success">
                    Edit
                  </Button>
                  <Button variant="text" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={popupOpen} onClose={handlePopupClose}>
        <DialogTitle>Create New User</DialogTitle>
        <DialogContent>
          <CreateUserPopup onClose={handlePopupClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
