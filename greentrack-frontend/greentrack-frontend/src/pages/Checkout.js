import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Box,
  Typography,
  Card,
  Button,
  Divider,
  TextField,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Checkout = () => {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const fromCart = location.state?.fromCart;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // If nothing to checkout
  if (!product && (!cart || cart.length === 0)) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5" color="error">
          ⚠️ No products selected
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={() => navigate("/marketplace")}
        >
          Back to Marketplace
        </Button>
      </Box>
    );
  }

  // Calculate subtotal, tax & total (works for both single or multiple)
  const subtotal = fromCart
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : product?.price * 1 || 0;

  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 5 },
        backgroundColor: "#F9FBE7",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#2E7D32",
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Checkout
      </Typography>

      <Grid container spacing={4} sx={{ flex: 1 }}>
        {/* Left Side — Delivery Info */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, color: "#388E3C", fontWeight: "bold" }}
            >
              Delivery Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Full Name" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone Number" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="City" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="State" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField label="Pincode" fullWidth variant="outlined" />
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              sx={{ mt: 4, mb: 1, color: "#388E3C", fontWeight: "bold" }}
            >
              Payment Method
            </Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="cod"
                control={<Radio color="success" />}
                label="Cash on Delivery (COD)"
              />
              <FormControlLabel
                value="upi"
                control={<Radio color="success" />}
                label="UPI / QR Payment"
              />
              <FormControlLabel
                value="card"
                control={<Radio color="success" />}
                label="Credit / Debit Card"
              />
            </RadioGroup>
          </Paper>
        </Grid>

        {/* Right Side — Order Summary */}
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2, borderRadius: 3, boxShadow: 6 }}>
            <Typography
              variant="h6"
              sx={{ color: "#388E3C", fontWeight: "bold", mb: 2 }}
            >
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* Show single or multiple products */}
            {fromCart
              ? cart.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        objectFit: "cover",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.brand}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#2E7D32" }}>
                        ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                ))
              : product && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        objectFit: "cover",
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.brand}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#2E7D32" }}>
                        ₹{product.price}
                      </Typography>
                    </Box>
                  </Box>
                )}

            <Divider sx={{ my: 2 }} />

            {/* Totals */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>₹{subtotal}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Tax (5%)</Typography>
              <Typography>₹{tax}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2E7D32" }}>
                ₹{total}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{
                mt: 1,
                fontWeight: "bold",
                py: 1.2,
                borderRadius: 2,
                fontSize: "1rem",
              }}
              onClick={() =>
                navigate("/order-success", { state: { fromCart, cart, product } })
              }
            >
              Confirm & Pay
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box
        sx={{
          mt: 5,
          textAlign: "center",
          color: "#4E342E",
          borderTop: "1px solid #C8E6C9",
          pt: 2,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} EcoMart — Sustainable Shopping for a Greener Planet 🌱
        </Typography>
        <Button
          variant="text"
          color="success"
          onClick={() => navigate("/marketplace")}
          sx={{ mt: 1 }}
        >
          ← Back to Marketplace
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
