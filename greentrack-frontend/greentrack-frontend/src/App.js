import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportWaste from './pages/ReportWaste';
import EarnCoins from './pages/EarnCoins';
import MarketPlace from './pages/MarketPlace';
import Courses from './pages/Courses';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import InteractionModal from './components/InteractionModal'; 
import { CartProvider } from './context/CartContext';
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
// 🌱 Importing course components
import RecyclingCourse from "./components/RecyclingCourse";
import WasteManagementAtHome from "./components/WasteManagementAtHome";
import SustainableLiving from "./components/SustainableLiving";
import GreenTechInnovation from "./components/GreenTechInnovations";
import EWasteAwareness from "./components/EWasteAwareness";
import EnvironmentalAwareness from "./components/EnvironmentalAwareness";
import EnergyConservation from "./components/EnergyConservation";
import EcoFriendlyAgriculture from "./components/EcoFriendlyAgriculture";
import CarbonFootprintCourse from "./components/CarbonFootprintCourse";

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openInteraction, setOpenInteraction] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


  // Function to handle feature clicks
  const handleFeatureClick = () => {
  if (!user) {
    setOpenInteraction(true); // Only show popup if not logged in
  }
};


  return (
    <CartProvider>
      <Navbar
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
        onFeatureClick={handleFeatureClick}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report-waste" element={<ReportWaste onClick={handleFeatureClick} />} />
        {/* <Route path="/earn-coins" element={<EarnCoins onClick={handleFeatureClick} />} /> */}
        <Route path="/earncoins" element={<EarnCoins />} />
        <Route path="/courses" element={<Courses onClick={handleFeatureClick} />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

          {/* 🌱 Courses Pages */}
        <Route path="/recycling-course" element={<RecyclingCourse />} />
        <Route path="/waste-management" element={<WasteManagementAtHome />} />
        <Route path="/sustainable-living" element={<SustainableLiving />} />
        <Route path="/green-tech-innovation" element={<GreenTechInnovation />} /> 
        <Route path="/environmental-awareness" element={<EnvironmentalAwareness />} />
        <Route path="/energy-conservation" element={<EnergyConservation />} />
        <Route path="/eco-friendly-agriculture" element={<EcoFriendlyAgriculture />} />
        <Route path="/carbon-footprint-course" element={<CarbonFootprintCourse />} />
        <Route path="/e-waste-awareness" element={<EWasteAwareness />} />

      </Routes>

  {!user && (
      <InteractionModal 
        open={openInteraction} 
        handleClose={() => setOpenInteraction(false)} 
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
      />
  )}

      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      <RegisterModal open={openRegister} handleClose={() => setOpenRegister(false)} />
    </CartProvider>
  );
}

export default App;
