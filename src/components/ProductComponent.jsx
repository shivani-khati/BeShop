import React from 'react';
import '../style/ProductComponent.css';
import product1 from '../assets/product1.jpg';


export const ProductComponent = () => {
  return (
    <div>
      <div className="product-section-2">
        <div className="product-container-2">
          <div className="product-image-2">
            <img src={product1} alt="Hydrogel Patches" />
          </div>
          <div className="product-details-2">
            <h2>Hydrogel Patches</h2>
            <p className="in-stock-2">IN STOCK</p>
            <p className="price-2">
              <span className="old-price-2">$249.95</span>
              <span className="new-price-2">$200.95</span>
            </p>
            <p className="description-2">
              Universal foundation masks skin imperfections and gives it a matte finish,
              remaining completely invisible on the face. The foundation is suitable for
              any skin type.
            </p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
