import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
} from "@mui/material";

const ProductFilters = ({ filters, setFilters }) => {
  const categories = ["Bags", "Stationery", "Solar Devices", "Eco-Home", "Organic Foods", "Gadgets", "Bottles"];
  const brands = ["GreenCo", "EcoNote", "SunBright", "BeeGreen", "HydroEco", "EcoFurnish"];

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const handlePriceChange = (_, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 3000],
    });
  };

  return (
    <Box
      sx={{
        width: 250,
        pr: 2,
        borderRight: "1px solid #E0E0E0",
        mr: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ color: "#2E7D32", mb: 2 }}>
        Filters
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Category Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Category
      </Typography>
      <FormGroup>
        {categories.map((cat) => (
          <FormControlLabel
            key={cat}
            control={
              <Checkbox
                checked={filters.categories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
            }
            label={cat}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      {/* Brand Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Brand
      </Typography>
      <FormGroup>
        {brands.map((brand) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      {/* Price Range Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Price Range
      </Typography>
      <Slider
        value={filters.priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={3000}
        sx={{ color: "#2E7D32" }}
      />
      <Typography variant="body2">
        ₹{filters.priceRange[0]} – ₹{filters.priceRange[1]}
      </Typography>

      <Button
        variant="outlined"
        color="success"
        onClick={clearFilters}
        sx={{ mt: 2, width: "100%" }}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default ProductFilters;

