// import icons
import {
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'EXPLORE',
    href: 'home',
  },
  {
    name: 'STATS',
    href: 'about',
  },
  {
    name: 'RESOURCES',
    href: 'features',
  },
  {
    name: 'CREATE',
    href: 'contact',
  },
];

export const hero = {
  title: 'Discover Rare Collections of Art and Sell NFTs',
  subtitle:
    'Discover the most outstanding NFT marketplace with everything for everyone. Explore,collect and sell digital artworks.',
  buttonText: 'Explore',
};

export const stats = [
  {
    value: '50K+',
    text: 'Our Active User',
  },
  {
    value: '43K+',
    text: 'Our Art Work',
  },
  {
    value: '38K+',
    text: 'Available Artist',
  },
  {
    value: '34K+',
    text: 'Our Products',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Create And Sell Your NFTs',
  subtitle:
    'With Brandname you can now easily trade your NFTs with a Fast and huge bid.We have the best gas fee, friendly wit the price and value of your asset',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Sell & Earn',
      subtitle:
        'Discover the most outstanding NFT marketplace with everything for everyone. Explore,collect and sell digital artworks.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Sell & Earn',
      subtitle:
        'Discover the most outstanding NFT marketplace with everything for everyone. Explore,collect and sell digital artworks.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Featured Artwork Collection',
    subtitle:
      'Discover the most outstanding NFT marketplace with everything for everyone. Explore,collect and sell digital artworks.',
  },
};

export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'View more',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'WebRaven',
      image: <ChairImg />,
    },
    {
      name: 'WebRaven',
      image: <BedImg />,
    },
    {
      name: 'WebRaven',
      image: <CupboardImg />,
    },
    {
      name: 'WebRaven',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'Explore NTFs Collections',
  subtitle:
    'Discover the most outstanding NFT marketplace with everything for everyone. Explore,collect and sell digital artworks.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 5.52,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 8.10,
          oldPrice: 5.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.35,
          oldPrice: 2.35,
          Time: '08h:03m:24s',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 15.25,
          oldPrice: 10.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 5.52,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 8.10,
          oldPrice: 5.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.35,
          oldPrice: 2.35,
          Time: '08h:03m:24s',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 15.25,
          oldPrice: 10.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 10.32,
          oldPrice: 8.25,
          Time: '08h:03m:24s',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'WebRaven',
          price: 4.32,
          oldPrice: 3.10,
          Time: '08h:03m:24s',
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Top Collections Of The Week',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Bored Ape Yatch...',
      occupation: 'Awesome NFTs Art',
      message:
        '“The worlds Biggest advanced commercial center for Crypto collectibles and non-fungible tokens.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Bored Ape Yatch...',
      occupation: 'Awesome NFTs Art',
      message:
        '“The worlds Biggest advanced commercial center for Crypto collectibles and non-fungible tokens.”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Bored Ape Yatch...',
      occupation: 'Awesome NFTs Art',
      message:
        '“The worlds Biggest advanced commercial center for Crypto collectibles and non-fungible tokens.”',
    },
  ],
};

export const newsletter = {
  title: 'Stay updated, join',
  subtitle: 'our mailing list.',
  placeholder: 'Your Email Address',
  buttonText: 'Subscribe',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoTwitter />,
      href: '#',
    },
  ],
  copyright: '2022 | Created By MR.Jason LIM - All Rights Reserved.',
};
