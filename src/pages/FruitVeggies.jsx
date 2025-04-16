import { Box, Container, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const FruitsVeggies = () => {
  const products = [
    {
      title: "Fresh Apples",
      image: require("../assets/images/fruits_veggies/apple.jpg"),
      price: "₹240/kg",
      description: "Delicious and crunchy apples, sourced from organic farms."
    },
    {
      title: "Bananas",
      image: require("../assets/images/fruits_veggies/banana.jpg"),
      price: "₹60 / bunch",
      description: "Fresh, sweet bananas with high nutritional value."
    },
    {
      title: "Organic Carrots",
      image: require("../assets/images/fruits_veggies/carrots.jpg"),
      price: "₹50 / kg",
      description: "Fresh organic carrots, perfect for your meals and snacks."
    },
    {
      title: "Tomato",
      image: require("../assets/images/fruits_veggies/tomatto.jpeg"),
      price: "₹40 / kg",
      description: "Fresh and juicy tomatoes, perfect for salads and cooking."
    }
  ];

  return (
    <Box sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 4 }}>
          Buy Fresh Fruits and Veggies
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

export default FruitsVeggies;
