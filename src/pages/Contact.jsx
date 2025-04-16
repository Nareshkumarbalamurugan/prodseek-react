import { Box, Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container sx={{ py: 5, mt: 5 }}>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: 'teal', fontWeight: 'bold', mb: 4 }}>
            Contact Us
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={5}
              required
            />
            <Button
              fullWidth
              variant="contained"
              color="teal"
              sx={{ mt: 3 }}
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: 'teal', fontWeight: 'bold', mb: 4 }}>
            Our Info
          </Typography>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="body1">
              <LocationOn sx={{ mr: 1, color: 'teal' }} /> 123 Grocery Street, Fresh Town, TN 600001
            </Typography>
            <Typography variant="body1">
              <Phone sx={{ mr: 1, color: 'teal' }} /> +91 9876543210
            </Typography>
            <Typography variant="body1">
              <Email sx={{ mr: 1, color: 'teal' }} /> info@prodseek.com
            </Typography>
          </Paper>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Opening Hours
            </Typography>
            <Typography variant="body1">
              <AccessTime sx={{ mr: 1, color: 'teal' }} />
              Monday - Friday: 9:00 AM - 8:00 PM
            </Typography>
            <Typography variant="body1">
              <AccessTime sx={{ mr: 1, color: 'teal' }} />
              Saturday - Sunday: 10:00 AM - 6:00 PM
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
