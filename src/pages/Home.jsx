import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';

// Import images
import fruitsImg from '../assets/images/home_images/fruits.jpg';
import dairyImg from '../assets/images/home_images/dairy_products.jpeg';
import grainsImg from '../assets/images/home_images/grains_cereals.jpg';
import foodImg from '../assets/images/home_images/food_beverage.jpg';

const Home = () => {
  const products = [
    {
      title: "Fruits & Veggies",
      image: fruitsImg,
      link: "/fruits-veggies"
    },
    {
      title: "Dairy Products",
      image: dairyImg,
      link: "/products"
    },
    {
      title: "Grains & Cereals",
      image: grainsImg,
      link: "/products"
    },
    {
      title: "Food Items & Beverages",
      image: foodImg,
      link: "/products"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#008080',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to ProdSeek
        </Typography>
        <Typography variant="h6" mb={4}>
          Find the best products easily and quickly.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          maxWidth={500}
          mx="auto"
        >
          <TextField
            variant="outlined"
            placeholder="Search for products..."
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
          <Button variant="contained" sx={{ bgcolor: 'white', color: '#008080', '&:hover': { bgcolor: '#f0f0f0' } }}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Product Section */}
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          align="center"
          gutterBottom
        >
          Our Products
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box display="flex" justifyContent="center" height="100%">
                <ProductCard {...product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
