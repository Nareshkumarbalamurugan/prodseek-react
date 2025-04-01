import '../styles/main.scss';

const TermsConditions = () => {
  return (
    <section className="container py-5 mt-5">
      <h2 className="text-center teal-text fw-bold mb-5">Terms & Conditions</h2>
      
      <div className="mb-4">
        <h4 className="teal-text">1. General Terms</h4>
        <p>By accessing and using ProdSeek, you agree to be bound by these terms. If you disagree, please do not use our services.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">2. Account Registration</h4>
        <p>You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">3. Product Information</h4>
        <p>We strive for accuracy in product descriptions and pricing, but errors may occur. We reserve the right to correct any errors and cancel orders arising from such mistakes.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">4. Pricing and Payments</h4>
        <p>All prices are in INR and inclusive of applicable taxes. Payment must be completed before order processing.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">5. Delivery</h4>
        <p>Delivery times are estimates and not guaranteed. We are not liable for delays caused by unforeseen circumstances.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">6. Returns and Refunds</h4>
        <p>Please refer to our Return & Refund Policy for details on returning products and requesting refunds.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">7. Limitation of Liability</h4>
        <p>ProdSeek shall not be liable for any indirect, incidental, or consequential damages arising from product use or service interruptions.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">8. Governing Law</h4>
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai.</p>
      </div>
    </section>
  );
};

export default TermsConditions;