import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Hero hero='defaultHero'>
      <Banner subtitle='Page not found' title='404 error'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
