import React from "react";
import Modal from "react-modal";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Delete, Close } from "@mui/icons-material";
import axios from "axios";

const DeleteUserPopup = ({ open, onClose, userId }) => {
  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `https://ca10fe5fb746dd777eed.free.beeceptor.com/api/users/${userId}`
      );
      console.log("User deleted successfully:", response.data);
      onClose();
    } catch (error) {
      console.error("Error deleting user:", error);
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
            fullWidth
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteUser}
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            fullWidth
            sx={{ ml: 1 }}
          >
            Yes, Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export { DeleteUserPopup };
