import React from 'react';
import Product from './Product';
import Path from './imagesPath';

export default function ProductList() {
  return (
    <div className='product-list'>
      {Path.map((image, index) => (
        <Product key={index} imageId={image.path} />
      ))}
    </div>
  );
}
