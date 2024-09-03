'use client';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import OpeningHours from '@/components/OpeningHours';
import Testimonials from '@/components/Testimonials';
import React from 'react'
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    }

    loadLocomotiveScroll();
  });

  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
}

export default Home; 