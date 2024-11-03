import React from 'react';
import { useNavigate } from 'react-router-dom';


const MenuHero = () => {
  // Hardcoded data for the featured product
  const product = {
    id: 1,
    name: 'Great Lighting Keyboard',
    price: '$129.99',
    imageUrl: 'https://res.cloudinary.com/dwpmijxdq/image/upload/v1730634090/images_3_ro9owm.jpg' // Replace with your image URL
  };

  const navigate = useNavigate()

  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Introducing Our Latest Deals</h1>
          <p>Cozy eatery offering diverse cuisine, friendly service, and vibrant ambiance. <br/>
            Not Using Firebase Storage
          </p>
          <button className="cta-button" onClick={()=>{navigate("/product/6053576088")}}>Shop Now</button>
        </div>
        <div className="banner-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
