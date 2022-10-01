import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {

  const { title, subtitle, image } = features.feature2;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title bg-gradient-to-bl text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500'>{title}</h2>
            <p className='subtitle text-white'>{subtitle}</p>
          </div>
          <div className='flex-1'>
            <img className='rounded-3xl' src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
