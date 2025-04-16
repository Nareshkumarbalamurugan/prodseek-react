import { Box, Container, Typography, Divider } from '@mui/material';

const ReturnRefund = () => {
  return (
    <Box sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 5 }}>
          Return & Refund Policy
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            1. Returns
          </Typography>
          <Typography>
            We accept returns within 7 days of delivery for most products. Items must be unused, in original packaging, and with proof of purchase. Perishable goods and certain items are non-returnable.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            2. Return Process
          </Typography>
          <Typography>
            To initiate a return, contact our customer service with your order details. We will provide return instructions. Return shipping costs are the customer's responsibility unless the return is due to our error.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            3. Refunds
          </Typography>
          <Typography>
            Once we receive and inspect the returned item, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            4. Damaged or Defective Items
          </Typography>
          <Typography>
            If you receive a damaged or defective item, please notify us within 48 hours of delivery. We will arrange for replacement or refund at no additional cost.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            5. Exchanges
          </Typography>
          <Typography>
            We currently do not offer direct exchanges. To exchange an item, please return the original item and place a new order.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            6. Contact Us
          </Typography>
          <Typography>
            For any questions about returns or refunds, please contact our customer service at support@prodseek.com or call +91 9876543210.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />
      </Container>
    </Box>
  );
};

export default ReturnRefund;
