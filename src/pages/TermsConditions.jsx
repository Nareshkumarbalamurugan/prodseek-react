import { Box, Container, Typography, Divider } from '@mui/material';

const TermsConditions = () => {
  return (
    <Box sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 5 }}>
          Terms & Conditions
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            1. General Terms
          </Typography>
          <Typography>
            By accessing and using ProdSeek, you agree to be bound by these terms. If you disagree, please do not use our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            2. Account Registration
          </Typography>
          <Typography>
            You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            3. Product Information
          </Typography>
          <Typography>
            We strive for accuracy in product descriptions and pricing, but errors may occur. We reserve the right to correct any errors and cancel orders arising from such mistakes.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            4. Pricing and Payments
          </Typography>
          <Typography>
            All prices are in INR and inclusive of applicable taxes. Payment must be completed before order processing.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            5. Delivery
          </Typography>
          <Typography>
            Delivery times are estimates and not guaranteed. We are not liable for delays caused by unforeseen circumstances.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            6. Returns and Refunds
          </Typography>
          <Typography>
            Please refer to our Return & Refund Policy for details on returning products and requesting refunds.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            7. Limitation of Liability
          </Typography>
          <Typography>
            ProdSeek shall not be liable for any indirect, incidental, or consequential damages arising from product use or service interruptions.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'teal' }}>
            8. Governing Law
          </Typography>
          <Typography>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />
      </Container>
    </Box>
  );
};

export default TermsConditions;
