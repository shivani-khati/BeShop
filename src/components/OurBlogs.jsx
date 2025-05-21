import React from 'react';
import '../style/OurBlogs.css';
import { useNavigate } from 'react-router-dom';


const OurBlogs = () => {
   const navigate = useNavigate();

  const handleReadBlog = () => {
    navigate('/Blog'); 
  };
  return (
    <section className="blog-section">
      <h3 className="blog-subtitle">Our Blog</h3>
      <h2 className="blog-title">The Latest News At BeShop</h2>
      <p className="blog-description">
        Nourish your skin with toxin-free cosmetic products. With the offers that <br/>you can’t refuse.
      </p>

      <div className="blog-grid">
        <div className="blog-card">
          <div className="image-wrapper">
            <img 
              src="https://img.freepik.com/free-photo/spa-concept-with-rose-extracts_23-2147738710.jpg"
              alt="Spa concept with rose extracts"
              className="blog-image"
            />
          
          </div>
          <div className='all-text-lefts'>
          <h4 className="blog-card-title">Perfumes, perfumed or eau de toilette?</h4>
          <p className="blog-card-text">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
          </p>
          <a href="#" className="read-more" role="button">READ MORE →</a>
        </div>
        </div>

        <div className="blog-card">
          <div className="image-wrapper">
            <img style={{width:"80%",height:"26em"
            }}
              src="https://img.freepik.com/free-photo/spa-composition-with-candles-flowers-towels_23-2147714795.jpg"
              alt="Spa composition with candles and flowers"
              className="blog-image-1"
            />
           
          </div>
          <div className='all-text-right'>
          <h4 className="blog-card-title">Best multi-step skin care treatment</h4>
          <p className="blog-card-text">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
          </p>
          <a href="#" className="read-more" role="button">READ MORE →</a>
          </div>
        </div>
      </div>

      <button className="read-blog-button" onClick={handleReadBlog}> READ BLOG</button>
    </section>
  );
};

export default OurBlogs;
