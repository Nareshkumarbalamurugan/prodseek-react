import { Box, Grid, Link, Typography, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'teal',
        color: 'white',
        py: 4,
        mt: 5,
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link
                href="/about"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange', // Change color on hover
                  },
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Link
                href="/privacy"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                Terms & Conditions
              </Link>
              <Link
                href="/return"
                color="inherit"
                underline="hover"
                sx={{
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                Return & Refund
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#3b5998', // Facebook blue on hover
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#1da1f2', // Twitter blue on hover
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#c32aa3', // Instagram pink on hover
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: 'white', my: 3 }} />

        <Typography variant="body2" color="inherit">
          &copy; 2025 ProdSeek. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
