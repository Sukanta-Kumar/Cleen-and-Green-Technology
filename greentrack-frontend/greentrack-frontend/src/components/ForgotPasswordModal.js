import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e8f5e9",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const ForgotPasswordModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { email, contactNumber, newPassword } = formData;

  if (!email.trim() || !contactNumber.trim() || !newPassword.trim()) {
    alert("Please fill all fields before submitting.");
    return;
  }

  try {
    const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim(),
        contactNumber: contactNumber.trim(),
        newPassword: newPassword.trim(),
      }),
    });

    const data = await res.json();

    if (res.ok && data.status) {
      alert(data.message || "Password updated successfully!");
      handleClose();
      setFormData({ email: "", contactNumber: "", newPassword: "" });
    } else {
      alert(data.message || "Password update failed!");
    }
  } catch (err) {
    console.error("Forgot password error:", err);
    alert("Something went wrong while updating password. Please try again!");
  }
};

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          mb={2}
          sx={{ color: "#2e7d32", fontWeight: "bold", textAlign: "center" }}
        >
          Reset Your Password
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Registered Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            label="Registered Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            label="New Password"
            name="newPassword"
            type={showPassword ? "text" : "password"}
            value={formData.newPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ bgcolor: "white", borderRadius: 1 }}
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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#43a047",
              color: "white",
              fontWeight: "bold",
              py: 1.2,
              borderRadius: "10px",
              "&:hover": { bgcolor: "#2e7d32" },
            }}
          >
            Update Password
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;