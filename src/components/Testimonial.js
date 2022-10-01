import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { testimonial } from '../data';

const Testimonial = () => {

  const { image, title } = testimonial;
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
        <div className='lg:max-w-[50%]'>
          <h2 className='title mb-9 bg-gradient-to-bl text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500'>{title}</h2>
          <TestimonialSlider />
        </div>
        <div className='order-1'>
          <img src={image.type} alt='' />
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
