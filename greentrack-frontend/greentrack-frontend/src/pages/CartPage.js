import React from "react";
import { useCart } from "../context/CartContext";
import { Box, Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5">Your cart is empty 🛒</Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={() => navigate("/marketplace")}
        >
          Go to Marketplace
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ color: "#2E7D32", mb: 3 }}>
        Shopping Cart
      </Typography>

      {cart.map((item) => (
        <Card key={item.id} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography>Price: ₹{item.price}</Typography>
          <Typography>Quantity: {item.quantity}</Typography>
          <Typography>Total: ₹{item.price * item.quantity}</Typography>

          <Button
            color="error"
            sx={{ mt: 1 }}
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </Card>
    ))}

      <Typography variant="h5" sx={{ mt: 2 }}>
        Total: ₹{totalPrice}
      </Typography>

      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        fullWidth
        onClick={() => navigate("/checkout", { state: { fromCart: true } })}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default CartPage;
