import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Box, Typography } from '@mui/material';
import Button from '../elements/Button';
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

  useEffect(() => {
    if (open && userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/${userId}`
          );
          setFormData(response.data.data);
        } catch (error) {
          console.error('Error fetching user data from the server', error);
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
      const response = await axios.put(
        `https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/${userId}`,
        formData
      );
      setFeedback('Success. User updated!');
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFeedback(
        'An error occurred while submitting the form. Please try again later.'
      );
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <Modal isOpen={open} onRequestClose={onClose} className='Modal'>
      <Box className='grid items-center justify-center bg-white bg-opacity-75'>
        <Box className='formbox bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full py-6 md:py-8 mb-10 mt-4'>
          <button
            onClick={onClose}
            className='absolute top-2 right-2 text-red-500 hover:text-red-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <Box className='py-3 px-5 md:px-10'>
            <Box className='text-center mb-2'>
              <Typography
                variant='h4'
                className='text-2xl text-gray-900'
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                }}
              >
                Edit User
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Box maxWidth='400px'>
                {feedback && (
                  <Box
                    className={`text-center text-white py-2 mb-4 ${
                      feedback.includes('Success') ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    <Typography variant='body1'>{feedback}</Typography>
                  </Box>
                )}
                <Box className='mb-1'>
                  <label htmlFor='email' className='text-xs font-semibold px-1'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    '
                    placeholder="User's Email Address"
                    required
                  />
                </Box>
                <Box className='mb-1'>
                  <label htmlFor='fullname' className='text-xs font-semibold px-1'>
                    Full Name
                  </label>
                  <input
                    name='fullname'
                    type='text'
                    className='
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    '
                    placeholder="User's Full Name"
                    onChange={handleChange}
                    value={formData.fullname}
                    required
                  />
                </Box>
                <Box className='mb-1'>
                  <label htmlFor='role' className='text-xs font-semibold px-1'>
                    Role
                  </label>
                  <select
                    name='role'
                    className='
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    '
                    onChange={handleChange}
                    value={formData.role}
                    required
                  >
                    <option value=''>Select Role</option>
                    <option value='admin'>Admin</option>
                    <option value='sales'>Sales Manager</option>
                    <option value='salesrep'>Sales Representative</option>
                  </select>
                </Box>

                <Box className='mb-1 relative'>
                  <label htmlFor='password' className='text-xs font-semibold px-1'>
                    Change Password
                  </label>
                  <input
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    className='
                      w-full px-3 py-1 rounded-xl
                      border-2 border-gray-200 outline-none
                      focus:border-green-700
                    '
                    placeholder="User's Password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <button
                    type='button'
                    className='absolute inset-y-0 right-0 pr-2 flex items-center'
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </button>
                </Box>

                <Box className='mb-1'>
                  <Button
                    type='submit'
                    className='
                      block w-full px-3 py-3 rounded-xl
                      text-white font-semibold
                    '
                  >
                    Edit User
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export { EditUserPopup };
