import '../styles/main.scss';

const Footer = () => {
  return (
    <footer className="text-center py-3 teal-bg text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/faq" className="text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
              <li><a href="/return" className="text-white">Return & Refund</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <p>&copy; 2025 ProdSeek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;