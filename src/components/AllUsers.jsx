import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import {PageDetail} from "./PageDetail"
import { CreateUserPopup } from "./CreateUserPopup";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import usersData from './users';

const AllUsers = () => {
  const [users, setUsers] = useState(usersData); 
  const [popupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  const handleAddUser = (newUser) => {
    newUser.id = users.length + 1; 
    setUsers([...users, newUser]);
  };

  return (
    <Box>
       <PageDetail />
      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <InputBase
            placeholder="Search here"
            sx={{
              bgcolor: "grey.100",
              outline: "none",
              flexGrow: 1,
              mr: { xs: 1, md: 2 },
              px: 1,
            }}
            className="w-full px-3 py-1 rounded-xl border-2 border-gray-200 outline-none focus:border-green-700"
          />
          <Button variant="outlined" color="transparent">
            Filter
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePopupOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
          >
            <AddCircleIcon sx={{ fontSize: 30 }} />
            New User
          </Button>
        </Box>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography>Error: {error}</Typography>
        ) : users.length === 0 ? (
          <Typography>You don't have users at the moment.</Typography>
        ) : (
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
                  <TableRow key={user.id}>
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
        )}

        <Dialog open={popupOpen} onClose={handlePopupClose}>
          <DialogTitle>Create New User</DialogTitle>
          <DialogContent>
            <CreateUserPopup onClose={handlePopupClose} onAddUser={handleAddUser} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePopupClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export { AllUsers };
