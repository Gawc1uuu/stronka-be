import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TextLeftImageRight from '../components/home/TextLeftImageRight';
import CenteredHeaderImageLeft from '../components/home/CenteredHeaderImageLeft';
import ServicesGrid from '../components/home/ServicesGrid';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TextLeftImageRight />
      <CenteredHeaderImageLeft />
      <ServicesGrid />
    </>
  );
};

export default Home;
