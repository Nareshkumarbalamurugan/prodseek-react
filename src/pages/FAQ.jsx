import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, UPI, net banking, and cash on delivery."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 1-2 business days within the city and 3-5 days for outstation orders."
    },
    {
      question: "Can I return or exchange products?",
      answer: "Yes, we have a 7-day return policy for most products. Please check our Return & Refund policy for details."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special discounts for bulk orders. Please contact our sales team for more information."
    }
  ];

  return (
    <Container sx={{ py: 5, mt: 5 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', color: 'teal', fontWeight: 'bold', mb: 5 }}>
        Frequently Asked Questions
      </Typography>
      
      <Box>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6" sx={{ color: 'teal', fontWeight: 'bold' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
