import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../assets/logo.png';

// Import your LoginModal here
import LoginModal from './LoginModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 700 },
  minHeight: '600px',
  maxHeight: '90vh',
  bgcolor: '#e8f5e9',
  borderRadius: '15px',
  boxShadow: 24,
  p: { xs: 2, sm: 3 },
  display: 'flex',
  flexDirection: 'column',
};

const formStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  paddingRight: '5px',
};

const inputSx = { bgcolor: 'white', borderRadius: 1, mb: 1.5 };
const buttonSx = {
  bgcolor: '#43a047',
  color: 'white',
  fontWeight: 'bold',
  py: 1.5,
  borderRadius: '12px',
  fontSize: '1rem',
  '&:hover': { bgcolor: '#2e7d32' },
};

const countryCodes = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+81', country: 'Japan' },
  { code: '+49', country: 'Germany' },
  { code: '+86', country: 'China' },
  { code: '+33', country: 'France' },
  { code: '+39', country: 'Italy' },
  { code: '+7', country: 'Russia' },
  { code: '+55', country: 'Brazil' },
  { code: '+27', country: 'South Africa' },
];

const professions = ['Student', 'Employee', 'Govt. Employee', 'Other'];
const genders = ['Male', 'Female', 'Other'];

const RegisterModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: '',
    profession: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    aadhar: '',
    houseNo: '',
    locality: '',
    nearby: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State to open LoginModal
  const [openLogin, setOpenLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['firstName', 'middleName', 'lastName', 'city', 'state', 'country'].includes(name) && /[^a-zA-Z\s]/.test(value)) return;
    if (['mobile', 'aadhar', 'houseNo'].includes(name) && /[^0-9]/.test(value)) return;
    if (name === 'email' && /[^a-zA-Z0-9.@]/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e) => setFormData({ ...formData, countryCode: e.target.value });
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/;

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name required';
    if (!formData.dob) tempErrors.dob = 'DOB required';
    if (!formData.gender) tempErrors.gender = 'Gender required';
    if (!formData.profession) tempErrors.profession = 'Profession required';
    if (!formData.email.trim()) tempErrors.email = 'Email required';
    else if (!/@gmail\.com$/.test(formData.email)) tempErrors.email = 'Email must be a valid Gmail address (@gmail.com)';
    if (!/^\d{10}$/.test(formData.mobile)) tempErrors.mobile = 'Mobile must be 10 digits';
    if (!/^\d{12}$/.test(formData.aadhar)) tempErrors.aadhar = 'Aadhaar must be 12 digits';
    if (!formData.houseNo.trim()) tempErrors.houseNo = 'House No. required';
    if (!formData.locality.trim()) tempErrors.locality = 'Locality required';
    if (!formData.nearby.trim()) tempErrors.nearby = 'Nearby area required';
    if (!formData.city.trim()) tempErrors.city = 'City required';
    if (!formData.state.trim()) tempErrors.state = 'State required';
    if (!formData.country.trim()) tempErrors.country = 'Country required';
    if (!formData.password.trim()) tempErrors.password = 'Password required';
    else if (!passwordRegex.test(formData.password)) tempErrors.password = 'Password 8–16 chars with uppercase, lowercase, number & special char';
    if (!formData.confirmPassword.trim()) tempErrors.confirmPassword = 'Confirm password required';
    else if (formData.confirmPassword !== formData.password) tempErrors.confirmPassword = 'Passwords do not match';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /*  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration Successful 🎉');
      console.log(formData);
      handleClose();
    }
  };
  */  // modified

  // After this change, when a user fills the form and clicks REGISTER, the data will be sent to the backend, saved in MySQL, and the user will see a success alert. 

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        role: formData.profession.toLowerCase(),
        contactNumber: `${formData.countryCode}${formData.mobile}` 
      }),
    });

    const data = await response.json();

  if (response.ok && data.status) {
  alert("Signup successful! Logging you in...");

  // ✅ Save user data locally (so navbar can show initials)
  localStorage.setItem(
    "user",
    JSON.stringify({
      fullName: data.user?.fullName || formData.firstName,
      email: data.user?.email || formData.email,
      contactNumber: data.user?.contactNumber || `${formData.countryCode}${formData.mobile}`,
      role: data.user?.role || formData.profession,
    })
  );

  handleClose(); // close register modal
  window.location.reload(); // reload UI to update navbar
} else {
  alert(data.message || "Signup failed!");
}

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong! Please try again.");
  }
};

  // Open LoginModal directly
  const openLoginModal = () => {
    handleClose(); // Close registration modal
    setOpenLogin(true); // Open LoginModal
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style} elevation={8}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <img src={Logo} alt="GreenTrack Logo" style={{ height: 50, width: 'auto' }} />
          </Box>

          <Typography
            variant="h6"
            mb={2}
            sx={{ color: '#2e7d32', fontWeight: 'bold', textAlign: 'center' }}
          >
            Create Your GreenTrack Account
          </Typography>

          <Box sx={formStyle}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1.5}>
                {['First Name', 'Middle Name', 'Last Name'].map((label, index) => {
                  const name = ['firstName', 'middleName', 'lastName'][index];
                  return (
                    <Grid item xs={12} sm={4} key={name}>
                      <TextField
                        label={label}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        fullWidth
                        required={['firstName', 'lastName'].includes(name)}
                        error={!!errors[name]}
                        helperText={errors[name]}
                        size="small"
                        sx={inputSx}
                      />
                    </Grid>
                  );
                })}

                {/* DOB, Gender, Profession, Email */}
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Date of Birth"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.dob}
                    helperText={errors.dob}
                    size="small"
                    sx={inputSx}
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth size="small" sx={inputSx}>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>Gender</MenuItem>
                      {genders.map((g) => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                    </Select>
                    {errors.gender && <Typography color="error" variant="caption">{errors.gender}</Typography>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth size="small" sx={inputSx}>
                    <Select
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>Profession</MenuItem>
                      {professions.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                    </Select>
                    {errors.profession && <Typography color="error" variant="caption">{errors.profession}</Typography>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    size="small"
                    sx={inputSx}
                  />
                </Grid>

                {/* Mobile + Aadhaar */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Select
                            value={formData.countryCode}
                            onChange={handleCountryCodeChange}
                            size="small"
                            sx={{ border: 'none', bgcolor: 'transparent', '& .MuiSelect-select': { padding: 0 } }}
                          >
                            {countryCodes.map((c) => <MenuItem key={c.code} value={c.code}>{c.code} ({c.country})</MenuItem>)}
                          </Select>
                        </InputAdornment>
                      ),
                      inputProps: { maxLength: 10 },
                    }}
                    sx={inputSx}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Aadhaar Number"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!errors.aadhar}
                    helperText={errors.aadhar}
                    inputProps={{ maxLength: 12 }}
                    size="small"
                    sx={inputSx}
                  />
                </Grid>

                {/* Address Fields */}
                {['House No.', 'Locality', 'Near by', 'City', 'State', 'Country'].map((label, index) => {
                  const name = ['houseNo', 'locality', 'nearby', 'city', 'state', 'country'][index];
                  return (
                    <Grid item xs={12} sm={4} key={name}>
                      <TextField
                        label={label}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors[name]}
                        helperText={errors[name]}
                        size="small"
                        sx={inputSx}
                      />
                    </Grid>
                  );
                })}

                {/* Passwords */}
                {['password', 'confirmPassword'].map((name) => (
                  <Grid item xs={12} sm={6} key={name}>
                    <TextField
                      label={name === 'password' ? 'Password' : 'Confirm Password'}
                      name={name}
                      type={name === 'password' ? (showPassword ? 'text' : 'password') : (showConfirmPassword ? 'text' : 'password')}
                      value={formData[name]}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors[name]}
                      helperText={errors[name]}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={name === 'password' ? toggleShowPassword : toggleShowConfirmPassword}
                              size="small"
                            >
                              {name === 'password' ? (showPassword ? <VisibilityOff /> : <Visibility />) : (showConfirmPassword ? <VisibilityOff /> : <Visibility />)}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={inputSx}
                    />
                  </Grid>
                ))}
              </Grid>
            </form>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button onClick={handleSubmit} variant="contained" fullWidth sx={buttonSx}>
              REGISTER
            </Button>

            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                mt: 1.5,
                color: '#2e7d32',
                fontWeight: 500,
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={openLoginModal} // Opens LoginModal directly
            >
              Already have an account? Login here
            </Typography>
          </Box>
        </Paper>
      </Modal>

      {/* Login Modal */}
      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
    </>
  );
};

export default RegisterModal;