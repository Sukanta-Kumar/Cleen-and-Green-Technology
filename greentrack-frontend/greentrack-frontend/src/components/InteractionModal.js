import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Logo from '../assets/logo.png'; // Add your logo image in src/assets/

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e8f5e9',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

const InteractionModal = ({ open, handleClose, setOpenLogin, setOpenRegister }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img src={Logo} alt="GreenTrack Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h6" mb={2} sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
          Welcome to GreenTrack
        </Typography>
        <Typography variant="body1" mb={3}>
          Please login or register to access this feature.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: '#66bb6a', color: 'white', width: '100%', mb: 1, '&:hover': { bgcolor: '#43a047' } }}
          onClick={() => {
            handleClose();
            setOpenLogin(true);
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: '#66bb6a', color: 'white', width: '100%', '&:hover': { bgcolor: '#43a047' } }}
          onClick={() => {
            handleClose();
            setOpenRegister(true);
          }}
        >
          Register
        </Button>
      </Box>
    </Modal>
  );
};

export default InteractionModal;
