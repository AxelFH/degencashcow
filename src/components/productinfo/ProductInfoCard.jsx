import React from 'react';

const ProductInfoCard = ({ title, description, text1, text2 }) => {
  return (
    <div className="product-info-card">
      <h2>{title}</h2>
      <div className="info-text-container">
        <div className="info-text">
          <p className='mini-list'>
          Mega Degen Cash Cow is more than just a DeFi project—it’s a moo-vement. 
          On the Solana blockchain, we combine humor with cutting-edge technology to create a platform that’s both entertaining and rewarding. 
          Whether you’re a seasoned degen or new to the crypto pasture, our herd welcomes you!
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default ProductInfoCard;
