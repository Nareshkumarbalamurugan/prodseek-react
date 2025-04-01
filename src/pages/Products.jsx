import ProductCard from '../components/ProductCard';
import '../styles/main.scss';

// Import images directly
import fruitsImg from '../assets/images/home_images/fruits.jpg';
import dairyImg from '../assets/images/home_images/dairy_products.jpeg';
import grainsImg from '../assets/images/home_images/grains_cereals.jpg';
import foodImg from '../assets/images/home_images/food_beverage.jpg';

const Products = () => {
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
    <div className="content">
      <section className="container text-center py-5 mt-5">
        <h2 className="mb-4 teal-text fw-bold">Our Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;