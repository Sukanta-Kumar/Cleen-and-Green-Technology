import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../assets/logo.png'; //  if you want to show your logo
import ForgotPasswordModal from './ForgotPasswordModal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#e8f5e9',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    emailOrContact: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.emailOrContact || !formData.password) {
    alert('Please fill in all fields');
    return;
  }

  const payload = {
    identifier: formData.emailOrContact, // backend expects "identifier"
    password: formData.password,
  };

  try {
    const res = await fetch('http://localhost:8080/api/auth/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log('Login request sent. status=', res.status, 'ok=', res.ok);

    const contentType = res.headers.get('content-type') || '';
    let data = null;
    if (contentType.includes('application/json')) {
      data = await res.json();
      console.log('Login response JSON:', data);
    } else {
      const text = await res.text();
      console.log('Login response text:', text);
      throw new Error(`Server returned ${res.status}: ${text}`);
    }

    if (res.ok && data && data.status) {
      localStorage.setItem('user', JSON.stringify({
        fullName: data.user || data.fullName || '',
        email: data.email || '',
        contactNumber: data.contactNumber || '',
      }));

      alert(data.message || 'Login Successful 🎉');
      handleClose();
      setTimeout(() => window.location.reload(), 500);
    } else {
      // Show server-provided error message if available
      alert((data && (data.message || data.error)) || 'Invalid credentials!');
    }
  } catch (err) {
    // Network / parsing / unexpected errors end up here
    console.error('Login failed:', err);
    alert('Something went wrong! Please try again.');
  }
};

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {/* Optional Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          <img src={Logo} alt="GreenTrack Logo" style={{ height: 50, width: 'auto' }} />
        </Box>

        <Typography
          variant="h6"
          mb={2}
          sx={{ color: '#2e7d32', fontWeight: 'bold', textAlign: 'center' }}
        >
          Login to GreenTrack
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email or Contact Number"
            name="emailOrContact"
            value={formData.emailOrContact}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ bgcolor: 'white', borderRadius: 1 }}
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ bgcolor: 'white', borderRadius: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography
            variant="body2"
            sx={{
              textAlign: 'right',
              mt: 0.5,
              color: '#2e7d32',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
            onClick={() => setOpenForgot(true)}
          >
          Forgot Password?
          </Typography>

          {/* Forgot Password Modal */}
          <ForgotPasswordModal open={openForgot} handleClose={() => setOpenForgot(false)} />


          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#43a047',
              color: 'white',
              fontWeight: 'bold',
              py: 1.2,
              borderRadius: '10px',
              '&:hover': { bgcolor: '#2e7d32' },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
