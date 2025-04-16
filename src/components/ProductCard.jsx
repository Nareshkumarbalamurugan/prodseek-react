import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
} from '@mui/material';

const ProductCard = ({ title, image, link, price, description }) => {
  const CardContentLayout = (
    <>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          {title}
        </Typography>
        {price && (
          <Typography variant="body1" fontWeight="bold">
            {price}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
        {!link && (
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        )}
      </CardContent>
    </>
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 300, mx: 'auto' }}>
      {link ? (
        <Link
          component={RouterLink}
          to={link}
          underline="none"
          sx={{ textDecoration: 'none' }}
        >
          <Card elevation={6} sx={{ borderRadius: 3 }}>
            {CardContentLayout}
          </Card>
        </Link>
      ) : (
        <Card elevation={6} sx={{ borderRadius: 3 }}>
          {CardContentLayout}
        </Card>
      )}
    </Box>
  );
};

export default ProductCard;
