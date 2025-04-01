import ProductCard from '../components/ProductCard';
import '../styles/main.scss';

// Import images directly
import fruitsImg from '../assets/images/home_images/fruits.jpg';
import dairyImg from '../assets/images/home_images/dairy_products.jpeg';
import grainsImg from '../assets/images/home_images/grains_cereals.jpg';
import foodImg from '../assets/images/home_images/food_beverage.jpg';

const Home = () => {
  const products = [
    {
      title: "Fruits & Veggies",
      image: fruitsImg,
      link: "/fruits-veggies"
    },
    {
      title: "Dairy Products",
      image: dairyImg,
      link: "/products"
    },
    {
      title: "Grains & Cereals",
      image: grainsImg,
      link: "/products"
    },
    {
      title: "Food Items & Beverages",
      image: foodImg,
      link: "/products"
    }
  ];

  return (
    <>
      <section className="text-center p-5 teal-bg text-white">
        <h1 className="fw-bold">Welcome to ProdSeek</h1>
        <p className="lead">Find the best products easily and quickly.</p>
        <div className="input-group w-50 mx-auto">
          <input type="text" className="form-control" placeholder="Search for products..." />
          <button className="btn btn-light teal-text">Search</button>
        </div>
      </section>

      <section className="container text-center py-5">
        <h2 className="mb-4 teal-text fw-bold">Our Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;