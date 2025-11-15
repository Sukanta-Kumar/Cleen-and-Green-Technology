import React, { useState } from "react";
import {
  Modal,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../assets/logo.png";
import LoginModal from "./LoginModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: 500 },
  bgcolor: "#e8f5e9",
  borderRadius: "15px",
  p: 3,
  boxShadow: 24,
};

const inputSx = { bgcolor: "white", borderRadius: 1, mb: 2 };

const RegisterModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validateForm = () => {
    let temp = {};

    if (!formData.firstName.trim()) temp.firstName = "Required";
    if (!formData.lastName.trim()) temp.lastName = "Required";

    if (!formData.email.trim()) temp.email = "Required";
    else if (!/@gmail\.com$/.test(formData.email))
      temp.email = "Must be Gmail (@gmail.com)";

    if (!/^\d{10}$/.test(formData.mobile))
      temp.mobile = "Must be 10 digits";

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&]).{8,16}$/;

    if (!formData.password) temp.password = "Required";
    else if (!passwordRegex.test(formData.password))
      temp.password = "8–16 chars, upper, lower, number, special";

    if (!formData.confirmPassword) temp.confirmPassword = "Required";
    else if (formData.confirmPassword !== formData.password)
      temp.confirmPassword = "Passwords do not match";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
          email: formData.email,
          password: formData.password,
          contactNumber: `+91${formData.mobile}`,
        }),
      });

      const data = await res.json();

      if (data.status) {
        alert("Signup Successful ✅");

        localStorage.setItem(
          "user",
          JSON.stringify({
            fullName: formData.firstName,
            email: formData.email,
            contactNumber: `+91${formData.mobile}`,
          })
        );

        handleClose();
        window.location.reload();
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (e) {
      alert("Error connecting to server");
    }
  };

  const openLoginModal = () => {
    handleClose();
    setOpenLogin(true);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img src={Logo} style={{ width: 60 }} alt="logo" />
          </Box>

          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: "bold", color: "#2e7d32", mb: 2 }}
          >
            Create Your GreenTrack Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Name Fields */}
              <Grid item xs={12} sm={4}>
                <TextField
                  label="First Name *"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  fullWidth
                  size="small"
                  sx={inputSx}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  sx={inputSx}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  label="Last Name *"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  fullWidth
                  size="small"
                  sx={inputSx}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  label="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  size="small"
                  sx={inputSx}
                />
              </Grid>

              {/* Mobile */}
              <Grid item xs={12}>
                <TextField
                  label="Mobile Number *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                  inputProps={{ maxLength: 10 }}
                  fullWidth
                  size="small"
                  sx={inputSx}
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password *"
                  name="password"
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  fullWidth
                  size="small"
                  sx={inputSx}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Confirm Password */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password *"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  fullWidth
                  size="small"
                  sx={inputSx}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            {/* Register Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
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
              REGISTER
            </Button>

            <Typography
              sx={{
                textAlign: "center",
                mt: 2,
                color: "#2e7d32",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={openLoginModal}
            >
              Already have an account? Login here
            </Typography>
          </form>
        </Paper>
      </Modal>

      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
    </>
  );
};

export default RegisterModal;
