import { Link } from 'react-router-dom';

const ProductCard = ({ title, image, link, price, description }) => {
  return (
    <div className="col">
      {link ? (
        <Link to={link} className="card text-decoration-none shadow-lg border-0 product-card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body text-center">
            <h5 className="fw-bold teal-text">{title}</h5>
            {price && <p className="fw-bold">{price}</p>}
            {description && <p className="card-text">{description}</p>}
          </div>
        </Link>
      ) : (
        <div className="card text-decoration-none shadow-lg border-0 product-card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body text-center">
            <h5 className="fw-bold teal-text">{title}</h5>
            {price && <p className="fw-bold">{price}</p>}
            {description && <p className="card-text">{description}</p>}
            <a href="#" className="btn teal-btn">Add to Cart</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;