import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import usersData from './users.json'; // Assuming users.json is in the same directory as this file

const CreateUserPopup = ({ open, onClose, setUsers }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    role: "",
    password: "",
  });
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://beeceptor.com/crud-api/users", formData);
      const newUser = response.data; // Assuming API returns the created user object

      setUsers((prevUsers) => [...prevUsers, newUser]);
      setFeedback("Success. New user added!");
      setTimeout(onClose, 3000);
    } catch (error) {
      console.error("Error adding new user:", error);
      setError("Failed to add user. Please try again.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const addUsersFromJson = async () => {
    try {
      for (const user of usersData) {
        const response = await axios.post("https://beeceptor.com/crud-api/users", user);
        const newUser = response.data; // Assuming API returns the created user object

        setUsers((prevUsers) => [...prevUsers, newUser]);
      }
      setFeedback("Success. Users added from JSON!");
    } catch (error) {
      console.error("Error adding users from JSON:", error);
      setError("Failed to add users. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New User</DialogTitle>
      <DialogContent>
        {feedback && (
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              py: 2,
              mb: 2,
              bgcolor: feedback.includes("Success") ? "green" : "red",
            }}
          >
            <Typography variant="body1">{feedback}</Typography>
          </Box>
        )}
        {error && (
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              py: 2,
              mb: 2,
              bgcolor: "red",
            }}
          >
            <Typography variant="body1">{error}</Typography>
          </Box>
        )}
        <Button onClick={addUsersFromJson} variant="contained" color="primary" sx={{ mb: 2 }}>
          Add Users from JSON
        </Button>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            name="fullname"
            label="Full Name"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="dense" required>
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value="">Select Role</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="salesmanager">Sales Manager</MenuItem>
              <MenuItem value="salesrep">Sales Representative</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <TextField
              name="password"
              label="Create Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
          </FormControl>
          <Box mt={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Add User
            </Button>
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { CreateUserPopup };
