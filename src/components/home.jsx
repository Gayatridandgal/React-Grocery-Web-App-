import React from 'react';
import { Link } from 'react-router-dom';
//import './Home.css';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Fresh Tomatoes', price: '₹40/kg', image: '/src/assets/tomatoes.jpg' },
    { id: 2, name: 'Organic Apples', price: '₹180/kg', image: '/src/assets/apples.jpg' },
    { id: 3, name: 'Green Spinach', price: '₹30/bunch', image: '/src/assets/spinach.jpg' },
    { id: 4, name: 'Sweet Mangoes', price: '₹120/kg', image: '/src/assets/mangoes.jpg' }
  ];

  return (
    <div className="home">
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <Link to="/purchase" className="buy-now">Buy Now</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="seasonal-deals">
        <h2>Seasonal Deals</h2>
        <div className="deals-banner">
          <h3>Summer Special Offers</h3>
          <p>Get up to 20% off on seasonal fruits!</p>
          <Link to="/purchase" className="view-deals">View Deals</Link>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Always fresh and top quality produce. Best prices in town!"</p>
            <h4>- Priya S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fast delivery and excellent customer service. Highly recommended!"</p>
            <h4>- Rahul M.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;