import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  TextField,
  Rating,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  Stack,
  Drawer,
  Divider,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Pagination,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

const initialProducts = [
  {
    id: 1,
    name: "Eco-friendly Bag",
    category: "Bags",
    brand: "GreenCo",
    price: 250,
    rating: 4.5,
    color: "Green",
    description: "Reusable and biodegradable eco-friendly bag.",
    image: "https://i.imgur.com/4W0hVhH.jpg",
    stock: 20,
    discount: 10,
  },
  {
    id: 2,
    name: "Recycled Notebook",
    category: "Stationery",
    brand: "EcoNote",
    price: 100,
    rating: 4.0,
    color: "Brown",
    description: "Notebook made from recycled paper.",
    image: "https://i.imgur.com/7Mkn5bL.jpg",
    stock: 50,
    discount: 5,
  },
  {
    id: 3,
    name: "Solar Lantern",
    category: "Solar Devices",
    brand: "SunBright",
    price: 1200,
    rating: 4.8,
    color: "Yellow",
    description: "Energy-saving solar lantern for homes.",
    image: "https://i.imgur.com/TkGhDzM.jpg",
    stock: 10,
    discount: 15,
  },
  {
    id: 4,
    name: "Reusable Bottle",
    category: "Bottles",
    brand: "HydroEco",
    price: 350,
    rating: 4.3,
    color: "Blue",
    description: "BPA-free reusable water bottle.",
    image: "https://i.imgur.com/J5R76qM.jpg",
    stock: 35,
    discount: 0,
  },
  {
    id: 5,
    name: "Organic Honey",
    category: "Organic Foods",
    brand: "BeeGreen",
    price: 500,
    rating: 4.7,
    color: "Yellow",
    description: "Pure organic honey from eco-friendly farms.",
    image: "https://i.imgur.com/Q7X4hYb.jpg",
    stock: 25,
    discount: 5,
  },
  {
    id: 6,
    name: "Recycled Chair",
    category: "Eco-Home",
    brand: "EcoFurnish",
    price: 2500,
    rating: 4.2,
    color: "Brown",
    description: "Chair made from recycled materials.",
    image: "https://i.imgur.com/3P6YQlz.jpg",
    stock: 5,
    discount: 12,
  },
  {
    id: 7,
    name: "Compost Bin",
    category: "Eco-Home",
    brand: "GreenCo",
    price: 800,
    rating: 4.6,
    color: "Green",
    description: "Turn food waste into compost efficiently.",
    image: "https://i.imgur.com/IG0Tnox.jpg",
    stock: 15,
    discount: 8,
  },
  {
    id: 8,
    name: "Recycled Paper Pen",
    category: "Stationery",
    brand: "EcoNote",
    price: 50,
    rating: 4.1,
    color: "Blue",
    description: "Smooth writing pen made from recycled materials.",
    image: "https://i.imgur.com/6Yq1o0l.jpg",
    stock: 100,
    discount: 0,
  },
  {
    id: 9,
    name: "Solar Garden Light",
    category: "Solar Devices",
    brand: "SunBright",
    price: 900,
    rating: 4.4,
    color: "Yellow",
    description: "Decorative solar light for garden pathways.",
    image: "https://i.imgur.com/m6iwZqD.jpg",
    stock: 20,
    discount: 10,
  },
  {
    id: 10,
    name: "Reusable Shopping Box",
    category: "Bags",
    brand: "HydroEco",
    price: 300,
    rating: 4.3,
    color: "Green",
    description: "Durable box for groceries, reusable and foldable.",
    image: "https://i.imgur.com/Xp8jGdZ.jpg",
    stock: 30,
    discount: 5,
  },
  {
    id: 11,
    name: "Organic Tea Pack",
    category: "Organic Foods",
    brand: "BeeGreen",
    price: 400,
    rating: 4.5,
    color: "Brown",
    description: "Refreshing tea grown organically.",
    image: "https://i.imgur.com/4jA8PTK.jpg",
    stock: 40,
    discount: 0,
  },
  {
    id: 12,
    name: "Recycled Storage Box",
    category: "Eco-Home",
    brand: "EcoFurnish",
    price: 1200,
    rating: 4.2,
    color: "Brown",
    description: "Stylish storage box made from recycled wood.",
    image: "https://i.imgur.com/p6TrvGk.jpg",
    stock: 10,
    discount: 15,
  },
  {
    id: 13,
    name: "Bamboo Toothbrush",
    category: "Stationery",
    brand: "GreenCo",
    price: 220,
    rating: 4.4,
    color: "Green",
    description: "Eco-friendly bamboo toothbrush alternative to plastic.",
    image: "https://i.imgur.com/ZyH2gAc.jpg",
    stock: 60,
    discount: 5,
  },
  {
    id: 14,
    name: "Organic Cotton Tote Bag",
    category: "Bags",
    brand: "EcoNote",
    price: 450,
    rating: 4.6,
    color: "Brown",
    description: "Tote bag made from organic cotton; reusable and sustainable.",
    image: "https://i.imgur.com/MW0Y5bP.jpg",
    stock: 40,
    discount: 0,
  },
  {
    id: 15,
    name: "Solar Portable Charger",
    category: "Gadgets",
    brand: "SunBright",
    price: 1500,
    rating: 4.7,
    color: "Yellow",
    description: "Portable solar charger – perfect for travel.",
    image: "https://i.imgur.com/JdH4Wx.jpg",
    stock: 12,
    discount: 20,
  },
  {
    id: 16,
    name: "Reusable Straws Set",
    category: "Bottles",
    brand: "HydroEco",
    price: 120,
    rating: 4.2,
    color: "Blue",
    description: "Set of eco-friendly stainless steel straws with cleaner.",
    image: "https://i.imgur.com/9kT7Qv.jpg",
    stock: 80,
    discount: 0,
  },
];

const categories = [
  "All",
  "Bags",
  "Stationery",
  "Gadgets",
  "Bottles",
  "Organic Foods",
  "Eco-Home",
  "Recycled Products",
  "Solar Devices",
];

const brands = ["GreenCo", "EcoNote", "SunBright", "HydroEco", "BeeGreen", "EcoFurnish"];
const colors = ["Green", "Brown", "Yellow", "Blue"];

const MarketPlace = () => {
  const [products] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = products
    .filter((p) => (selectedCategory === "All" ? true : p.category === selectedCategory))
    .filter((p) => (selectedBrands.length ? selectedBrands.includes(p.brand) : true))
    .filter((p) => (selectedColors.length ? selectedColors.includes(p.color) : true))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter((p) => p.rating >= ratingRange[0] && p.rating <= ratingRange[1])
    .filter((p) => (discountOnly ? p.discount > 0 : true))
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "priceLow") return a.price - b.price;
    if (sort === "priceHigh") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const displayedProducts = sortedProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSnackbar({ open: true, message: `${product.name} added to cart!` });
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCloseSnackbar = () => setSnackbar({ open: false, message: "" });

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleChangePage = (_, value) => setPage(value);

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      {/* Left Sidebar Filters */}
      <Box
        sx={{
          ml: 2,
          width: 280,
          mr: 3,
          position: "sticky",
          top: 20,
          maxHeight: "90vh",
          overflowY: "auto",
          borderRight: "1px solid #E0E0E0",
          pr: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "#2E7D32", mb: 2 }}>
          Filters
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Category Section (Improved) */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ color: "#388E3C", mb: 1 }}>
            Categories
          </Typography>
          <Grid container spacing={1}>
            {categories.map((cat) => (
              <Grid item xs={6} key={cat}>
                <Button
                  fullWidth
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    borderRadius: "15px",
                    textTransform: "none",
                    backgroundColor: selectedCategory === cat ? "#2E7D32" : "#E8F5E9",
                    color: selectedCategory === cat ? "#fff" : "#2E7D32",
                    fontSize: "0.85rem",
                    "&:hover": {
                      backgroundColor: selectedCategory === cat ? "#1B5E20" : "#C8E6C9",
                    },
                  }}
                >
                  {cat}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Brands */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ color: "#388E3C", mb: 1 }}>
            Brands
          </Typography>
          <Stack spacing={1}>
            {brands.map((b) => (
              <FormControlLabel
                key={b}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(b)}
                    onChange={() => toggleBrand(b)}
                    color="success"
                  />
                }
                label={b}
              />
            ))}
          </Stack>
        </Box>

        {/* Colors */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ color: "#388E3C", mb: 1 }}>
            Colors
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {colors.map((c) => (
              <Chip
                key={c}
                label={c}
                color={selectedColors.includes(c) ? "success" : "default"}
                onClick={() => toggleColor(c)}
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Stack>
        </Box>

        {/* Price */}
        <Box sx={{ mb: 3, width: 220, ml: 2 }}>
          <Typography variant="subtitle1" sx={{ color: "#388E3C", mb: 1 }}>
            Price
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, val) => setPriceRange(val)}
            valueLabelDisplay="auto"
            min={0}
            max={3000}
            sx={{ color: "#2E7D32" }}
          />
        </Box>

        {/* Rating */}
        <Box sx={{ mb: 3, width: 220, ml: 2 }}>
          <Typography variant="subtitle1" sx={{ color: "#388E3C", mb: 1 }}>
            Rating
          </Typography>
          <Slider
            value={ratingRange}
            onChange={(e, val) => setRatingRange(val)}
            valueLabelDisplay="auto"
            min={0}
            max={5}
            step={0.1}
            sx={{ color: "#43A047" }}
          />
        </Box>

        {/* Discount */}
        <Box sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={discountOnly}
                onChange={() => setDiscountOnly(!discountOnly)}
                color="success"
              />
            }
            label="Discounted Items Only"
          />
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* Search & Sort */}
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            label="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1 }}
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{ padding: "8px", borderRadius: "4px" }}
          >
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="rating">Rating: High → Low</option>
          </select>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            color="success"
            onClick={() => setDrawerOpen(true)}
          >
            Cart ({cart.length})
          </Button>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {displayedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "scale(1.03)" },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  {product.discount > 0 && (
                    <Chip
                      label={`${product.discount}% OFF`}
                      color="error"
                      sx={{ position: "absolute", top: 8, left: 8 }}
                    />
                  )}
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{ height: 180, objectFit: "cover", width: "100%" }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#2E7D32" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#2E7D32" }}>
                    ₹{product.price}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
                    <Chip label={product.brand} size="small" color="success" />
                    <Chip label={product.color} size="small" color="primary" />
                  </Stack>
                  <Rating
                    value={product.rating}
                    precision={0.1}
                    readOnly
                    sx={{ mt: 1, color: "#43A047" }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    Stock: {product.stock}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={() => handleAddToCart(product)}
                    startIcon={<ShoppingCartIcon />}
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                  <IconButton color="primary" onClick={() => setSelectedProduct(product)}>
                    <InfoIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {sortedProducts.length > productsPerPage && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              color="success"
            />
          </Box>
        )}
      </Box>

      {/* Product Details Dialog */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
          <DialogTitle>{selectedProduct.name}</DialogTitle>
          <DialogContent>
            <Box
              component="img"
              src={selectedProduct.image}
              alt={selectedProduct.name}
              sx={{ width: "100%", mb: 2 }}
            />
            <Typography variant="body1">{selectedProduct.description}</Typography>
            <Typography variant="h6" color="#2E7D32" sx={{ mt: 1 }}>
              ₹{selectedProduct.price}
            </Typography>
            <Rating
              value={selectedProduct.rating}
              precision={0.1}
              readOnly
              sx={{ color: "#43A047" }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Stock: {selectedProduct.stock}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
              <Chip label={`Brand: ${selectedProduct.brand}`} size="small" color="success" />
              <Chip label={`Color: ${selectedProduct.color}`} size="small" color="primary" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSelectedProduct(null)}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Cart Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cart ({cart.length})
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {cart.length === 0 ? (
            <Typography>No items in cart</Typography>
          ) : (
            cart.map((item, index) => (
              <Box key={index} sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 60, height: 60, objectFit: "cover" }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">₹{item.price}</Typography>
                </Box>
                <IconButton color="error" onClick={() => handleRemoveFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))
          )}
          {cart.length > 0 && (
            <>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">
                Total: ₹{cart.reduce((acc, item) => acc + item.price, 0)}
              </Typography>
              <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
                Checkout
              </Button>
            </>
          )}
        </Box>
      </Drawer>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MarketPlace;
