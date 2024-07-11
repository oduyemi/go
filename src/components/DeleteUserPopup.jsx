import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Delete, Close } from "@mui/icons-material";
import usersData from './users'; 

const DeleteUserPopup = ({ open, onClose, userId }) => {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteUser = () => {
    try {
      setDeleting(true);

      const updatedUsers = usersData.filter(user => user.id !== userId);
      setTimeout(() => {
        console.log(updatedUsers);

        setDeleting(false);
        onClose();
      }, 2000); 

    } catch (error) {
      console.error("Error deleting user:", error);
      setError("An error occurred while deleting the user.");
      setDeleting(false);
    }
  };

  return (
    <Modal isOpen={open} onRequestClose={onClose} className="Modal">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
        p={4}
        borderRadius={2}
        boxShadow={3}
        maxWidth={400}
        mx="auto"
        mt={5}
      >
        <Box display="flex" justifyContent="flex-end" width="100%">
          <IconButton onClick={onClose} color="error">
            <Close />
          </IconButton>
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          Delete this User
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          This user and all associated data will be permanently removed. Do you
          wish to continue?
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between" width="100%">
          <Button
            onClick={onClose}
            variant="outlined"
            color="success"
            disabled={deleting} 
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteUser}
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            disabled={deleting}
            sx={{ ml: 1 }}
          >
            {deleting ? "Deleting..." : "Yes, Delete"}
          </Button>
        </Box>
        {error && (
          <Typography variant="body2" color="error" mt={2} textAlign="center">
            {error}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export { DeleteUserPopup };
