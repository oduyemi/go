import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Box, Typography, Button, TextField, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const EditUserPopup = ({ open, onClose, userId }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    role: '',
    password: '',
  });
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (open && userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/${userId}`);
          if (response.data.data) {
            setFormData(response.data.data);
            setLoading(false); 
          } else {
            setFeedback('No users to edit.');
            setLoading(false); 
          }
        } catch (error) {
          console.error('Error fetching user data from the server', error);
          setError('Error fetching user data. Please try again later.'); 
          setLoading(false); 
        }
      };

      fetchUserData();
    }
  }, [open, userId]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/${userId}`, formData);
      setFeedback('Success. User updated!');
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFeedback('An error occurred while submitting the form. Please try again later.');
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <Modal isOpen={open} onRequestClose={onClose} className="Modal">
      <Box className="grid items-center justify-center bg-white bg-opacity-75">
        <Box className="formbox bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full py-6 md:py-8 mb-10 mt-4">
          <Button onClick={onClose} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          <Box className="py-3 px-5 md:px-10">
            <Box className="text-center mb-2">
              <Typography variant="h4" className="text-2xl text-gray-900" sx={{ fontSize: '18px', fontWeight: '600' }}>
                Edit User
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box maxWidth="400px">
                {loading ? (
                  <Typography>Loading...</Typography>
                ) : error ? (
                  <Typography>Error: {error}</Typography>
                ) : feedback ? (
                  <Box className={`text-center text-white py-2 mb-4 ${feedback.includes('Success') ? 'bg-green-500' : 'bg-red-500'}`}>
                    <Typography variant="body1">{feedback}</Typography>
                  </Box>
                ) : (
                  <Box>
                    <Box className="mb-1">
                      <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Box>
                    <Box className="mb-1">
                      <TextField
                        label="Full Name"
                        name="fullname"
                        type="text"
                        value={formData.fullname}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Box>
                    <Box className="mb-1">
                      <Select
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                      >
                        <MenuItem value="">Select Role</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="salesmanager">Sales Manager</MenuItem>
                        <MenuItem value="salesrep">Sales Representative</MenuItem>
                      </Select>
                    </Box>
                    <Box className="mb-1">
                      <TextField
                        label="Change Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={toggleShowPassword}>
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box className="mb-1">
                      <Button type="submit" fullWidth variant="contained" color="primary">
                        Edit User
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export { EditUserPopup };
