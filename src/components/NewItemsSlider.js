import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { newInStore, products } from '../data';

const NewItemsSlider = () => {
  return (
  <Swiper grabCursor={true} breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }}>
    {newInStore.products.map((product, index) => {
      return (
        <SwiperSlide className='max-w-[265px]' key={index}>
          <div className='relative'>
            <img src={product.image.type} alt='' />
            <div className='absolute bg-gradient-to-bl text-transparent bg-clip-text from-sky-400 via-rose-400 to-lime-400 bottom-[20px] w-full text-center text-[28px] lg:text-2xl'>{product.name}</div>
          </div>
        </SwiperSlide>
      )
    })}
  </Swiper>
  );
};

export default NewItemsSlider;
