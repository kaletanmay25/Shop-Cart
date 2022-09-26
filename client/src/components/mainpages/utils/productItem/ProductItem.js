import React from 'react';
import BtnRender from './BtnRender';

function ProductItem({ product, isAdmin,deleteProduct,handleCheck}) {
  
  return (
    <div id='maindiv'>
      <div className="product_cart">
        {isAdmin && (
          <input
            type="checkbox"
            id="mycheckbox"
            checked={product.checked}
            onChange={() => handleCheck(product._id)}
          />
        )}
        <img src={product.images.url} height="400px" width="350px" alt="" />

        <div className="product_box">
          <h2 title={product.title}>{product.title}</h2>
          <p id="myp">${product.price}</p>
          <p>{product.description}</p>
        </div>

        <BtnRender product={product} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
}

export default ProductItem;