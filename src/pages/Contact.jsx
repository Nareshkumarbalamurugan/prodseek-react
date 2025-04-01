import '../styles/main.scss';

const Contact = () => {
  return (
    <section className="container py-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="teal-text fw-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn teal-bg text-white">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="teal-text fw-bold mb-4">Our Info</h2>
          <p><i className="bi bi-geo-alt-fill me-2"></i> 123 Grocery Street, Fresh Town, TN 600001</p>
          <p><i className="bi bi-telephone-fill me-2"></i> +91 9876543210</p>
          <p><i className="bi bi-envelope-fill me-2"></i> info@prodseek.com</p>
          <div className="mt-4">
            <h5>Opening Hours</h5>
            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;