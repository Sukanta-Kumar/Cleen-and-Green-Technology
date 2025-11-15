import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const ProductDrawer = ({ open, setOpen, cart, setCart }) => {
  const navigate = useNavigate();

  const handleRemove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 350, p: 2 }}>
        <Typography variant="h6">Cart ({cart.length})</Typography>
        <Divider sx={{ my: 2 }} />

        {cart.length === 0 ? (
          <Typography>No items in cart</Typography>
        ) : (
          cart.map((item, i) => (
            <Box
              key={i}
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                style={{ objectFit: "cover" }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography>{item.name}</Typography>
                <Typography variant="body2">₹{item.price}</Typography>
              </Box>
              <IconButton color="error" onClick={() => handleRemove(i)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}

        {cart.length > 0 && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">
              Total: ₹{cart.reduce((a, b) => a + b.price, 0)}
            </Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/checkout", { state: { fromCart: true } })}
            >
              Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default ProductDrawer;
