import '../styles/main.scss';

const About = () => {
  return (
    <section className="container text-center py-5 mt-5">
      <h2 className="mb-4 teal-text fw-bold">About Us</h2>
      <p className="lead"><strong>Welcome to ProdSeek</strong>, your one-stop destination for fresh and high-quality grocery products!</p>

      <div className="text-start mx-auto" style={{ maxWidth: '800px' }}>
        <h3 className="mt-4 teal-text">Who We Are</h3>
        <p>At <strong>ProdSeek</strong>, we believe that quality food leads to a quality life. Our mission is to provide fresh, organic, and locally sourced groceries at affordable prices.</p>

        <h3 className="mt-4 teal-text">Why Choose Us?</h3>
        <ul className="list-unstyled">
          <li>✔ <strong>Fresh & Organic</strong> – We source directly from trusted farms and suppliers.</li>
          <li>✔ <strong>Affordable Prices</strong> – Get top-quality groceries without breaking the bank.</li>
          <li>✔ <strong>Convenience</strong> – Order online and enjoy doorstep delivery.</li>
          <li>✔ <strong>Customer Satisfaction</strong> – We prioritize quality and service.</li>
        </ul>

        <h3 className="mt-4 teal-text">Our Vision</h3>
        <p>To revolutionize the grocery shopping experience by making fresh, healthy, and affordable products accessible to every household.</p>
      </div>
    </section>
  );
};

export default About;