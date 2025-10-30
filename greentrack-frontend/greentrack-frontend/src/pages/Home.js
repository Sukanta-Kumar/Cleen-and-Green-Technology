import React from 'react'; 
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import RecyclingIcon from '@mui/icons-material/Recycling';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import NatureIcon from '@mui/icons-material/Nature';
import VerifiedIcon from '@mui/icons-material/Verified';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import greentrackLogo from '../assets/greentrack-logo.png';
import { useNavigate } from 'react-router-dom';

const Home = ({ onFeatureClick }) => {
  const navigate = useNavigate();
  const features = [
    { icon: <RecyclingIcon sx={{ fontSize: 50, color: '#43a047' }} />, title: 'AI Waste Segregation', desc: 'Automatically detect and classify waste using AI-powered image recognition.' },
    { icon: <EmojiEventsIcon sx={{ fontSize: 50, color: '#43a047' }} />, title: 'Earn Green Coins', desc: 'Earn coins for every eco-friendly action and redeem them for rewards.' },
    { icon: <StorefrontIcon sx={{ fontSize: 50, color: '#43a047' }} />, title: 'Eco Marketplace', desc: 'Buy and sell recycled products directly through our digital marketplace.' },
    { icon: <SchoolIcon sx={{ fontSize: 50, color: '#43a047' }} />, title: 'Sustainability Courses', desc: 'Learn eco-living through engaging, expert-curated courses and tutorials.' },
  ];

  const missionPoints = [
    { icon: <NatureIcon sx={{ fontSize: 40, color: '#2e7d32' }} />, title: 'Our Mission', text: 'To create a smarter, cleaner, and greener planet using AI and community participation.' },
    { icon: <VerifiedIcon sx={{ fontSize: 40, color: '#2e7d32' }} />, title: 'Our Vision', text: 'To make waste segregation an effortless, transparent, and rewarding habit worldwide.' },
    { icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: '#2e7d32' }} />, title: 'Our Impact', text: 'Thousands of users are already making a positive change for the environment every day.' },
  ];

  const quickLinks = ['Home', 'Report Waste', 'Earn Coins', 'Marketplace', 'Courses'];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingAnimation = { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } };

  const Counter = ({ icon, label, value }) => (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ textAlign: 'center', padding: '20px' }}>
      {icon}
      <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold', mt: 1 }}>{value}+</Typography>
      <Typography variant="body2" sx={{ color: '#555' }}>{label}</Typography>
    </motion.div>
  );

  return (
    <Box sx={{ bgcolor: '#f1f8e9', minHeight: '100vh', p: 3, overflow: 'hidden' }}>
      {/* Floating Icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} style={{ position: 'absolute', top: 100, left: 60, zIndex: 0 }}>
        <motion.div animate={floatingAnimation}><RecyclingIcon sx={{ fontSize: 120, color: '#A5D6A7' }} /></motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} style={{ position: 'absolute', bottom: 120, right: 90, zIndex: 0 }}>
        <motion.div animate={floatingAnimation}><EmojiEventsIcon sx={{ fontSize: 100, color: '#C8E6C9' }} /></motion.div>
      </motion.div>

      {/* HERO SECTION */}
      <motion.div initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Box sx={{ textAlign: 'center', py: 10, background: 'linear-gradient(135deg, #81c784, #43a047)', borderRadius: '30px', color: 'white', mb: 8, position: 'relative', overflow: 'hidden' }}>
          <motion.img src={greentrackLogo} alt="GreenTrack Logo" style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 20, boxShadow: '0 0 25px rgba(0,0,0,0.3)', position: 'relative', zIndex: 2 }} animate={{ rotateY: [0, 360], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />

          {/* Animated Welcome Text */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>Welcome to GreenTrack 🌿</Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.5 }}>
            <Typography variant="h6" sx={{ mb: 4 }}>Revolutionizing Waste Management with AI, IoT & Blockchain for a Greener Future</Typography>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }}>
            <Button variant="contained" size="large" sx={{ bgcolor: '#2e7d32', '&:hover': { bgcolor: '#1b5e20', boxShadow: '0 0 20px #a5d6a7' }, px: 5, py: 1.8, borderRadius: '12px', fontWeight: 'bold' }} onClick={onFeatureClick}>Get Started <ArrowForwardIosIcon sx={{ ml: 1 }} /></Button>
          </motion.div>
        </Box>
      </motion.div>

      {/* COUNTERS */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
        <Grid item xs={6} sm={4} md={2.5}><Counter icon={<PeopleAltIcon sx={{ fontSize: 40, color: '#43a047' }} />} label="Active Users" value="5,000" /></Grid>
        <Grid item xs={6} sm={4} md={2.5}><Counter icon={<DeleteSweepIcon sx={{ fontSize: 40, color: '#43a047' }} />} label="Waste Segregated (Kg)" value="12,400" /></Grid>
        <Grid item xs={6} sm={4} md={2.5}><Counter icon={<WorkspacePremiumIcon sx={{ fontSize: 40, color: '#43a047' }} />} label="Rewards Redeemed" value="3,200" /></Grid>
      </Grid>

      {/* FEATURES */}
      <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 5 }}>Key Features</Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ rotate: [0, 1, -1, 0], scale: 1.07 }}>
              <Card sx={{ height: '100%', borderRadius: '18px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center', bgcolor: 'white', p: 2 }}>
                <CardContent>{feature.icon}<Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#2e7d32' }}>{feature.title}</Typography><Typography variant="body2" sx={{ mt: 1, color: '#555' }}>{feature.desc}</Typography></CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* MISSION */}
      <Box sx={{ mt: 10, py: 8, backgroundColor: '#e8f5e9', borderRadius: '20px' }}>
        <Typography textAlign="center" variant="h4" sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 5 }}>Our Mission & Vision 🌏</Typography>
        <Grid container spacing={3} justifyContent="center">
          {missionPoints.map((point, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.3 }} style={{ background: '#fff', borderRadius: '16px', padding: '25px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                {point.icon}<Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold', mt: 2 }}>{point.title}</Typography><Typography sx={{ mt: 1, color: '#555' }}>{point.text}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ABOUT */}
      <Box sx={{ textAlign: 'center', mt: 10, px: { xs: 2, md: 10 } }}>
        <Typography variant="h4" sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 2 }}>About GreenTrack</Typography>
        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8 }}>GreenTrack is an AI-powered waste segregation and recycling platform designed to make waste management smarter, transparent, and rewarding. We empower communities to contribute towards sustainability while earning rewards and learning eco-friendly habits. Together, we can make our planet greener and cleaner 🌎.</Typography>
      </Box>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 150 }}>
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button variant="contained" size="large" sx={{ bgcolor: '#43a047', '&:hover': { bgcolor: '#2e7d32', boxShadow: '0 0 20px #A5D6A7' }, px: 5, py: 1.5, borderRadius: '12px', fontWeight: 'bold', color: 'white' }} onClick={onFeatureClick}>Join the Green Movement ♻️</Button>
        </Box>
      </motion.div>

      {/* FOOTER */}
      <Box sx={{ mt: 8, background: 'linear-gradient(135deg, #2E7D32, #1B5E20)', color: 'white', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', px: { xs: 3, md: 8 }, py: 6 }}>
        <Grid container spacing={4} justifyContent="space-around" alignItems="flex-start">
          {/* About */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ color: '#C8E6C9', mb: 1 }}>🌱 GreenTrack</Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>Empowering citizens to report, recycle, and earn rewards for a cleaner and greener future. Let’s make our cities sustainable, one action at a time.</Typography>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 0.5 }}><EmailIcon sx={{ fontSize: 16, mr: 1 }} /> contact@greentrack.ai</Typography>
                <Typography variant="subtitle2" sx={{ mb: 0.5 }}><PhoneIcon sx={{ fontSize: 16, mr: 1 }} /> +91 9634552251</Typography>
                <Typography variant="subtitle2"><LocationOnIcon sx={{ fontSize: 16, mr: 1 }} /> GreenTrack HQ, Ghaziabad, U.P, India</Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: '#C8E6C9', mb: 2 }}>Quick Links</Typography>
            {quickLinks.map((link, index) => (
              <motion.div key={index} whileHover={{ x: 5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
                <Typography sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: '#A5D6A7' } }} 
                onClick={() => navigate(link === 'Home' ? '/' : '/' + link.replace(' ', '').toLowerCase())}>{link}
                </Typography>
              </motion.div>
            ))}
          </Grid>

          {/* Newsletter & Social */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#C8E6C9', mb: 2 }}>Stay Connected</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Subscribe for updates and tips!</Typography>
            <TextField placeholder="Enter your email" variant="filled" size="small" sx={{ bgcolor: 'white', borderRadius: '8px', width: '100%', mb: 1.5 }} />
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 150 }}>
              <Button variant="contained" size="small" sx={{ bgcolor: '#43a047', '&:hover': { bgcolor: '#2e7d32' }, textTransform: 'none' }}>Subscribe</Button>
            </motion.div>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                  <Icon sx={{ color: 'white', cursor: 'pointer' }} />
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                <a href="https://www.linkedin.com/in/jeetendra-singh-328938315" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: 'white', cursor: 'pointer' }} />
                </a>
              </motion.div>
            </Box>
          </Grid>

          {/* CTA */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#C8E6C9', mb: 2 }}>Take Action 🌏</Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>Join our initiatives, report waste, and earn rewards for every eco-friendly action you take.</Typography>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 150 }}>
              <Button variant="contained" size="small" sx={{ bgcolor: '#43a047',               '&:hover': { bgcolor: '#2e7d32' } }} onClick={onFeatureClick}>Get Started</Button>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Box sx={{ textAlign: 'center', borderTop: '1px solid #388E3C', mt: 4, pt: 3 }}>
            <Typography variant="body2">© {new Date().getFullYear()} GreenTrack | Designed with 💚 for a Sustainable Future</Typography>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <IconButton onClick={handleBackToTop} sx={{ color: '#C8E6C9', mt: 1, '&:hover': { color: '#A5D6A7' } }}>
                <ArrowUpwardIcon />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;

