import '../styles/main.scss';

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
    <section className="container py-5 mt-5">
      <h2 className="text-center teal-text fw-bold mb-5">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header" id={`heading${index}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                {faq.question}
              </button>
            </h3>
            <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;