import React from 'react';
import '../style/BlogsComp2.css';
import img1 from '../assets/blog-img1.jpg'
import img2 from '../assets/blog-img2.jpg'
import img3 from '../assets/blog-img3.jpg'
import img4 from '../assets/blog-img5.jpg'
import img5 from '../assets/blog-img4.jpg'
import img6 from '../assets/blog-img6.jpg'
export const BlogsComp2 = () => {
  const blogs = [
    {
      date: 'June 21',
      title: 'Perfumes, perfumed or eau de toilette?',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image: img1
    },
    {
      date: 'June 21',
      title: 'Best multi-step skin care treatment',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image:img2
    },
    {
      date: 'June 21',
      title: 'Best multi-step skin care treatment',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image: img3
    },
    {
      date: 'June 21',
      title: 'Best multi-step skin care treatment',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image: img4
    },
      {
      date: 'June 21',
      title: 'Best multi-step skin care treatment',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image: img5
    },
      {
      date: 'June 21',
      title: 'Best multi-step skin care treatment',
      desc: 'Nourish your skin with toxin-free cosmetic products. With the offers that you skin with toxin-free cosmetic products that you can’t refuse.',
      image: img6
    }
  ];

  return (
    <div className="blogs-container-2">
      <div className="blogs-grid-2">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card-2">
            <div className="blog-image-container-2">
              <img src={blog.image} alt={blog.title} className="blog-image-2" />
              <div className="blog-date-2">{blog.date.toLowerCase()}</div>
            </div>
            <div className="blog-content-2">
              <h3 className="blog-title-2">{blog.title}</h3>
              <p className="blog-desc-2">{blog.desc}</p>
              <a href="#" className="read-more-2">READ MORE →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
