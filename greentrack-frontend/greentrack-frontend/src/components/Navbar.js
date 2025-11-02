import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ForestIcon from '@mui/icons-material/Forest'; // Fixed icon

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Report Waste', path: '/report-waste' },
  { name: 'Earn Coins', path: '/earn-coins' },
  { name: 'Market Place', path: '/market-place' },
  { name: 'Courses', path: '/courses' },
];

const Navbar = ({ setOpenLogin, setOpenRegister, onFeatureClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

useEffect(() => {
  try {
    const u = JSON.parse(localStorage.getItem('user'));
    if (u) setUser(u);
  } catch (err) {
    console.error(err);
  }
}, []);

const navigate = useNavigate();

const handleAvatarClick = (e) => setAnchorEl(e.currentTarget);
const handleMenuClose = () => setAnchorEl(null);
const handleLogout = () => {
  localStorage.removeItem('user');
  setUser(null);
  handleMenuClose();
  window.location.reload();
};


  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.transition = 'all 0.5s ease';
    document.body.style.backgroundColor = darkMode ? '#f1f8e9' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  const drawer = (
    <Box
      onClick={toggleDrawer}
      sx={{
        textAlign: 'center',
        width: 250,
        backgroundColor: darkMode ? '#121212' : '#f1f8e9',
        height: '100%',
      }}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h5"
          sx={{
            my: 2,
            color: '#2e7d32',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <ForestIcon sx={{ fontSize: 30 }} /> GreenTrack
        </Typography>
      </motion.div>

      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <ListItem disablePadding>
              <ListItemText>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#2e7d32',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#a5d6a7', borderRadius: 1, transform: 'scale(1.05)' },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={(e) => {
                    if (item.name === 'Home') {
                    navigate('/');
                    } else {
                    e.preventDefault();
                    onFeatureClick();
                    }
                  }}
                >
                  {item.name}
                </Button>
              </ListItemText>
            </ListItem>
          </motion.div>
        ))}

      {user ? (
  <ListItem disablePadding>
    <Button
      onClick={handleLogout}
      sx={{
        color: 'white',
        bgcolor: '#43a047',
        width: '100%',
        mt: 1,
        '&:hover': { bgcolor: '#66bb6a' },
      }}
    >
      Logout
    </Button>
  </ListItem>
) : (
  <ListItem disablePadding>
    <Button
      onClick={() => setOpenRegister(true)}
      sx={{
        color: 'white',
        bgcolor: '#66bb6a',
        width: '100%',
        mt: 1,
        '&:hover': { bgcolor: '#43a047', transform: 'scale(1.05)' },
        transition: 'all 0.3s ease',
      }}
    >
      Register
    </Button>
  </ListItem>
)}

        <ListItem disablePadding>
          <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                width: '100%',
                color: darkMode ? '#fff' : '#000',
                mt: 1,
                transition: 'all 0.3s ease',
              }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: '#2e7d32',
          boxShadow: 3,
          transition: 'all 0.5s ease',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}
          >
            <ForestIcon sx={{ fontSize: 35, color: 'white' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
              GreenTrack!
            </Typography>
          </motion.div>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#66bb6a', color: 'white', borderRadius: 1 },
                    transition: 'all 0.3s ease',
                  }}
                  onClick={(e) => {
                    if (item.name === 'Home') {
                    navigate('/');
                    } else {
                    e.preventDefault();
                    onFeatureClick();
                    }
                  }}

                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
            
{user ? (
  <>
    <Avatar
      onClick={handleAvatarClick}
      sx={{ bgcolor: '#66bb6a', cursor: 'pointer', ml: 1 }}
    >
      {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
    </Avatar>

    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem disabled>{user.fullName}</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  </>
) : (
  <Button
    onClick={() => setOpenRegister(true)}
    sx={{
      color: 'white',
      bgcolor: '#43a047',
      '&:hover': { bgcolor: '#66bb6a' },
      borderRadius: 2,
      ml: 1,
      transition: 'all 0.3s ease',
    }}
  >
    Register
  </Button>
)}


            {/* Dark Mode Toggle */}
            <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <IconButton onClick={toggleDarkMode} sx={{ ml: 1, color: 'white' }}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { md: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        transitionDuration={{ enter: 500, exit: 400 }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
