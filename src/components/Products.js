import React from 'react';
import { products } from '../data';
import ProductSlider from '../components/ProductSlider'

const Products = () => {

  const { title, subtitle } = products;
  return (
  <section className='section text-center'>
    <div className='container max-auto'>
      <div>
        <h2 className='title bg-gradient-to-bl text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500'>{title}</h2>
        <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] text-white'>{subtitle}</p>
      </div>
      <ProductSlider />
    </div>
  </section>
  );
};

export default Products;
