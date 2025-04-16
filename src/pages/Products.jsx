import { Box, Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

// Import images directly
import fruitsImg from '../assets/images/home_images/fruits.jpg';
import dairyImg from '../assets/images/home_images/dairy_products.jpeg';
import grainsImg from '../assets/images/home_images/grains_cereals.jpg';
import foodImg from '../assets/images/home_images/food_beverage.jpg';

const Products = () => {
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
    <Box sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 4 }}>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
