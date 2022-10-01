import React from 'react';
import { features } from '../data';

const Features = () => {

  const { title, subtitle, image, buttonText, items } = features;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          <div className='flex-1 order-1 lg:-order-1'>
            <img className='rounded-3xl' src={image.type} alt='' />
          </div>
          <div className='flex-1 flex flex-col justify-end'>
            <h2 className='title bg-gradient-to-bl text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500'>{title}</h2>
            <p className='subtitle text-white'>{subtitle}</p>
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0'>
                    <div className='text-2xl mr-4 lg:text-3xl text-white hover:text-fuchsia-500'>
                      {icon}
                    </div>
                    <div>
                      <h4 className='text-base lg:text-xl font-semibold mb-3 text-white'>
                        {title}
                      </h4>
                      <p className='text-white'>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
