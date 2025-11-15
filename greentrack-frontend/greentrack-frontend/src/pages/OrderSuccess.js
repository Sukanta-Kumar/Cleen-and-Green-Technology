import React, { useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const cart = location.state?.cart;
  const fromCart = location.state?.fromCart;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
        textAlign: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 4,
          maxWidth: 480,
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <CheckCircle
          sx={{
            fontSize: 100,
            color: "#2E7D32",
            mb: 2,
            animation: "pop 0.5s ease-out",
          }}
        />

        <Typography
          variant="h4"
          sx={{ color: "#2E7D32", fontWeight: "bold", mb: 2 }}
        >
          Order Confirmed!
        </Typography>

        <Typography variant="body1" sx={{ color: "#4E342E", mb: 3 }}>
          Thank you for your purchase. Your eco-friendly product will be shipped
          soon. 🌱
        </Typography>

        {product && (
          <Box sx={{ mb: 3 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "12px",
                marginBottom: "10px",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ₹{product.price}
            </Typography>
          </Box>
        )}

        <Button
          variant="contained"
          color="success"
          sx={{ mb: 1, px: 4, py: 1.2, fontWeight: "bold" }}
          onClick={() => navigate("/marketplace")}
        >
          Continue Shopping
        </Button>

        <Button
          variant="outlined"
          color="success"
          sx={{ px: 4, py: 1 }}
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Paper>

      {/* Simple pop animation */}
      <style>
        {`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}
      </style>
    </Box>
  );
};

export default OrderSuccess;
