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

const CreateUserPopup = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    role: "",
    password: "",
  });
  const [feedback, setFeedback] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/",
        formData
      );
      setFeedback("Success. Welcome back!");
      setTimeout(onClose, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedback(
        "An error occurred while submitting the form. Please try again later."
      );
      setTimeout(onClose, 3000);
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
              <MenuItem value="sales">Sales Manager</MenuItem>
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
            <Button type="submit" fullWidth variant="contained" color="primary">
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
