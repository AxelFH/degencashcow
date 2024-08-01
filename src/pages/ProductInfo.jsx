import React from 'react';
import ProductInfoCard from '../components/productinfo/ProductInfoCard';
import ProductInfoLink from '../components/productinfo/ProductInfoLink';
import ProductImage from '../components/productinfo/ProductImage';

import '../assets/styles/Info.css';
import game from '../assets/images/cow/game.gif';


const ProductInfo = () => {
  return (
    <div className="info">
      <div className="info-container">
        <ProductInfoCard
          title="What is $Cash Cow!?"
        />
        <ProductInfoLink link="#about" />

      </div>
      <div className="image-container">
        <ProductImage imageUrl={game} />
      </div>
    </div>
  );
}

export default ProductInfo;
