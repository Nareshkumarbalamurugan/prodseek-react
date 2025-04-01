import ProductCard from '../components/ProductCard';
import '../styles/main.scss';

const FruitsVeggies = () => {
  const products = [
    {
      title: "Fresh Apples",
      image: require("../assets/images/fruits_veggies/apple.jpg"),
      price: "₹240/kg",
      description: "Delicious and crunchy apples, sourced from organic farms."
    },
    {
      title: "Bananas",
      image: require("../assets/images/fruits_veggies/banana.jpg"),
      price: "₹60 / bunch",
      description: "Fresh, sweet bananas with high nutritional value."
    },
    {
      title: "Organic Carrots",
      image: require("../assets/images/fruits_veggies/carrots.jpg"),
      price: "₹50 / kg",
      description: "Fresh organic carrots, perfect for your meals and snacks."
    },
    {
      title: "Tomato",
      image: require("../assets/images/fruits_veggies/tomatto.jpeg"),
      price: "₹40 / kg",
      description: "Fresh and juicy tomatoes, perfect for salads and cooking."
    }
  ];

  return (
    <div className="content">
      <section className="container text-center py-5 mt-5">
        <h2 className="mb-4 teal-text fw-bold">Buy Fresh Fruits and Veggies</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FruitsVeggies;