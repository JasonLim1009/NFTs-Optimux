import React from 'react';
import { newInStore } from '../data';
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {

  const { title, subtitle, link, icon } = newInStore;
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0'>
          <h2 className='title max-w-[254px] lg:mt-[30px] lg:mb-[90px] bg-gradient-to-bl text-transparent bg-clip-text from-rose-400 via-fuchsia-500 to-indigo-500'>{title}</h2>
          <p className='max-w-[245px] lg:mb-12 text-white'>{subtitle}</p>
          <div className='hidden lg:flex items-center'>
            <a className='hover:border-b border-fuchsia-600 lg:items-center font-medium transition-all text-white hover:text-fuchsia-500' href='#'>
              {link}
            </a>
            <div className='text-3xl text-white'>{icon}</div>
          </div>
        </div>
        <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:right-24'>
          <NewItemsSlider />
        </div>
      </div>
    </div>
  </section>;
};

export default NewItems;
