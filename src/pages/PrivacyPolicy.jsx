import { Box, Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ py: 5, mt: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 5 }}>
          Privacy Policy
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>1. Information We Collect</Typography>
          <Typography>
            We collect personal information when you register, place an order, or interact with our services.
            This may include your name, email, phone number, address, and payment details.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>2. How We Use Your Information</Typography>
          <Typography>
            We use your information to process orders, improve our services, communicate with you, and personalize your experience.
            We do not sell or share your personal information with third parties for marketing purposes.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>3. Data Security</Typography>
          <Typography>
            We implement security measures to protect your personal information. All transactions are processed through secure payment gateways with encryption.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>4. Cookies</Typography>
          <Typography>
            We use cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings, but this may affect website functionality.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>5. Changes to This Policy</Typography>
          <Typography>
            We may update this policy periodically. We will notify you of significant changes through email or website notices.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ color: 'teal' }}>6. Contact Us</Typography>
          <Typography>
            If you have questions about our privacy practices, please contact us at privacy@prodseek.com.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
