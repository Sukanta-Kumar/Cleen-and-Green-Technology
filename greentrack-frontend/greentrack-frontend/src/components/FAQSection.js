import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    q: 'What is Clean and Green Technology?',
    a: 'Clean and Green is a community-driven platform that encourages citizens to report plastic waste, segregate garbage, and earn Green Coins for helping keep the city clean. These coins can be redeemed for plants and compost.'
  },
  {
    q: 'What is the main purpose of this website?',
    a: 'The website aims to create awareness about waste management, promote recycling, and inspire people to adopt sustainable practices.'
  },
  {
    q: 'How do I report plastic waste in my area?',
    a: 'Simply log in, click on “Report Waste,” upload a photo of the dumped plastic, add a short description, and confirm your GPS location. The report will be sent to the municipal queue.'
  },
  {
    q: 'How can users contribute through this website?',
    a: 'Users can report waste, learn through eco-courses, share green ideas, and participate in awareness campaigns.'
  },
  {
    q: 'What are “Green Coins” and how can I earn them?',
    a: 'Green Coins are reward points earned by reporting waste, completing eco-tasks, or joining campaigns. They can be used to redeem eco-friendly products in the marketplace.'
  },
  {
    q: 'Can I buy plants or compost without Green Coins?',
    a: 'Currently, only users with sufficient Green Coins can redeem rewards. Direct purchase options may be added in the future.'
  },
  {
    q: 'What happens to the collected waste?',
    a: 'The municipality separates recyclable plastics and biodegradable waste. Recyclables are sold to recycling centers, and organic waste is converted into compost.'
  },
  {
    q: 'Where does the money from recycled plastic go?',
    a: 'The funds are used to buy new plants and support the Green Coin reward system.'
  },
  {
    q: 'Is my personal data safe on this website?',
    a: 'Yes. Your data is protected and will never be shared with anyone without your consent.'
  },
  {
    q: 'How can I contact the support team?',
    a: 'You can contact us anytime through the Contact Us page or email us at support@cleangreentech.com.'
  }
];

export default function FAQSection() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mb: 6, px: 2 }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 3 }}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((f, i) => (
        <Accordion key={i} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 'bold' }}>{f.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{f.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}