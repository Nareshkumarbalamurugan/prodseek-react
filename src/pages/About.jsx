import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 5, mt: 5, textAlign: 'center' }}>
      <Typography variant="h2" sx={{ mb: 4, color: 'teal', fontWeight: 'bold' }}>
        About Us
      </Typography>
      <Typography variant="h5" className="lead">
        <strong>Welcome to ProdSeek</strong>, your one-stop destination for fresh and high-quality grocery products!
      </Typography>

      <Box sx={{ maxWidth: 800, textAlign: 'left', mx: 'auto' }}>
        <Typography variant="h4" sx={{ mt: 4, color: 'teal' }}>
          Who We Are
        </Typography>
        <Typography variant="body1">
          At <strong>ProdSeek</strong>, we believe that quality food leads to a quality life. Our mission is to provide fresh, organic, and locally sourced groceries at affordable prices.
        </Typography>

        <Typography variant="h4" sx={{ mt: 4, color: 'teal' }}>
          Why Choose Us?
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="✔ Fresh & Organic"
              secondary="We source directly from trusted farms and suppliers."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ Affordable Prices"
              secondary="Get top-quality groceries without breaking the bank."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ Convenience"
              secondary="Order online and enjoy doorstep delivery."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✔ Customer Satisfaction"
              secondary="We prioritize quality and service."
            />
          </ListItem>
        </List>

        <Typography variant="h4" sx={{ mt: 4, color: 'teal' }}>
          Our Vision
        </Typography>
        <Typography variant="body1">
          To revolutionize the grocery shopping experience by making fresh, healthy, and affordable products accessible to every household.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
