import '../styles/main.scss';

const PrivacyPolicy = () => {
  return (
    <section className="container py-5 mt-5">
      <h2 className="text-center teal-text fw-bold mb-5">Privacy Policy</h2>
      
      <div className="mb-4">
        <h4 className="teal-text">1. Information We Collect</h4>
        <p>We collect personal information when you register, place an order, or interact with our services. This may include your name, email, phone number, address, and payment details.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">2. How We Use Your Information</h4>
        <p>We use your information to process orders, improve our services, communicate with you, and personalize your experience. We do not sell or share your personal information with third parties for marketing purposes.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">3. Data Security</h4>
        <p>We implement security measures to protect your personal information. All transactions are processed through secure payment gateways with encryption.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">4. Cookies</h4>
        <p>We use cookies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings, but this may affect website functionality.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">5. Changes to This Policy</h4>
        <p>We may update this policy periodically. We will notify you of significant changes through email or website notices.</p>
      </div>

      <div className="mb-4">
        <h4 className="teal-text">6. Contact Us</h4>
        <p>If you have questions about our privacy practices, please contact us at privacy@prodseek.com.</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;