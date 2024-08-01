import React from 'react';
import abajo from '../../assets/images/pages/arrow.gif'; 

const ProductInfoLink = ({ link }) => {

  return (
    <div className="external-link-card">
      <div className="link-content">
        
        <a className='mylink' href="#about">
          <img src={abajo} className="icon" alt='Down'/>
        </a>
        <a className='lonk' href={link}>JOIN THE HERD HEREEE!</a>
        <a className='mylink' href="#about">
          <img src={abajo} className="icon" alt='Down'/>
        </a>
      </div>
    </div>
  );
}

export default ProductInfoLink;
