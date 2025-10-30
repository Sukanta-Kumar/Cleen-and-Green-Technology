import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import RecyclingIcon from "@mui/icons-material/Recycling";

const wasteTypes = [
  { value: "Plastic", label: "Plastic" },
  { value: "Organic", label: "Organic" },
  { value: "Paper", label: "Paper" },
  { value: "Metal", label: "Metal" },
  { value: "E-Waste", label: "E-Waste" },
];

const ReportWaste = () => {
  const [wasteData, setWasteData] = useState({
    type: "",
    weight: "",
    location: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setWasteData({ ...wasteData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend endpoint
      const response = await fetch("http://localhost:5000/api/report-waste", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wasteData),
      });
      if (response.ok) {
        setOpenSnackbar(true);
        setWasteData({ type: "", weight: "", location: "" });
      } else {
        alert("Error submitting waste report");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(120deg, #a8e063, #56ab2f)",
        minHeight: "80vh",
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" sx={{ mb: 3, color: "#fff", fontWeight: "bold" }}>
          <RecyclingIcon sx={{ mr: 1 }} /> Report Waste
        </Typography>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: 500 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Waste Type"
              name="type"
              value={wasteData.type}
              onChange={handleChange}
              required
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            >
              {wasteTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="number"
              fullWidth
              label="Weight (Kg)"
              name="weight"
              value={wasteData.weight}
              onChange={handleChange}
              required
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={wasteData.location}
              onChange={handleChange}
              required
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ py: 1.5, fontWeight: "bold", fontSize: "16px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </motion.form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Waste reported successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ReportWaste;
