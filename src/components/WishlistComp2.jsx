import React, { useEffect, useState } from 'react';
import '../style/WishlistComp2.css';
import { GiShoppingCart } from "react-icons/gi";

export const WishlistComp2 = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleClearWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlist([]);
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>My Wishlist</h2>
        {wishlist.length > 0 && (
          <button className="clear-btn" onClick={handleClearWishlist}>
            Clear Wishlist
          </button>
        )}
      </div>

      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map(item => (
            <tr key={item.id}>
              <td className="wishlist-product">
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </td>
              <td>₹{item.price.toFixed(2)}</td>
              <td className={item.tags.includes("SALE") || item.tags.includes("NEW") ? "status-in-stock" : "status-out"}>
                {item.tags.includes("SALE") || item.tags.includes("NEW") ? "IN STOCK" : "NOT AVAILABLE"}
              </td>
              <td className="buy-now">BUY NOW →</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
