import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 4, p: 1 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ borderRadius: 2 }}
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: { product },
          })
        }
      />

      <CardContent>
        <Typography variant="h6" sx={{ color: "#2E7D32" }}>
          {product.name}
        </Typography>

        <Typography variant="body2" sx={{ color: "#1B5E20", mb: 1 }}>
          ₹{product.price}
        </Typography>

        <Rating value={product.rating} readOnly size="small" />

        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<ShoppingCartIcon />}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>

          <Button
            variant="outlined"
            color="success"
            startIcon={<InfoIcon />}
            onClick={() =>
              navigate(`/product/${product.id}`, { state: { product } })
            }
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
