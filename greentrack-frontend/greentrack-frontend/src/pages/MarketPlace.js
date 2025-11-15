import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Pagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";

const MarketPlace = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 3000],
  });

  const productsPerPage = 8;

  //  Filter and search logic
  let filteredProducts = productsData.filter((p) => {
    const matchCategory =
      filters.categories.length === 0 || filters.categories.includes(p.category);
    const matchBrand =
      filters.brands.length === 0 || filters.brands.includes(p.brand);
    const matchPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchBrand && matchPrice && matchSearch;
  });

  // Sort logic
  if (sort === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleAddToCart = (product) => setCart([...cart, product]);
  const handleBuyNow = (product) =>
    navigate("/checkout", { state: { product } });
  const handleViewDetails = (product) =>
    navigate(`/product/${product.id}`, { state: { product } });

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      {/* Sidebar Filters */}
      <ProductFilters filters={filters} setFilters={setFilters} />

      {/* Product List Section */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Search + Sort + Cart */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Search Products"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, minWidth: "200px" }}
          />

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sort}
              label="Sort By"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="success"
            startIcon={<ShoppingCartIcon />}
            onClick={() => navigate("/cart")}
          >
            Cart ({cart.length})
          </Button>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {displayedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onViewDetails={handleViewDetails}
              />
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, val) => setPage(val)}
              color="success"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MarketPlace;
