import React from 'react';
import { products } from '../constants'; // Importing the products array from constants.js
import { layout } from '../styles';

const Products = () => {
  return (
    <section id="product" className={layout.section}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-primary text-white rounded-lg shadow-lg border-[2px] overflow-hidden service-card">
            <img className="w-[80%] p-10 object-cover" src={product.img} alt={product.name} />
            <div className="p-4">
              <h2 className="text-xl font-poppins font-semibold mb-2">{product.name}</h2>
              <p className="text-dimWhite">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
