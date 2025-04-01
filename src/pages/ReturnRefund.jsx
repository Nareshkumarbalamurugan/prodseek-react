import '../styles/main.scss';

const ReturnRefund = () => {
  return (
    <section className="container py-5 mt-5">
      <h2 className="text-center teal-text fw-bold mb-5">Return & Refund Policy</h2>
      
      <div className="mb-4">
        <h4 className="teal-text">1. Returns</h4>
        <p>We accept returns within 7 days of delivery for most products. Items must be unused, in original packaging, and with proof of purchase. Perishable goods and certain items are non-returnable.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">2. Return Process</h4>
        <p>To initiate a return, contact our customer service with your order details. We will provide return instructions. Return shipping costs are the customer's responsibility unless the return is due to our error.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">3. Refunds</h4>
        <p>Once we receive and inspect the returned item, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">4. Damaged or Defective Items</h4>
        <p>If you receive a damaged or defective item, please notify us within 48 hours of delivery. We will arrange for replacement or refund at no additional cost.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">5. Exchanges</h4>
        <p>We currently do not offer direct exchanges. To exchange an item, please return the original item and place a new order.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">6. Contact Us</h4>
        <p>For any questions about returns or refunds, please contact our customer service at support@prodseek.com or call +91 9876543210.</p>
      </div>
    </section>
  );
};

export default ReturnRefund;