import React from 'react';
import About from '../components/about/About';
import Steady from '../components/steady/Steady';
import Culture from '../components/culture/Culture';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Steady/>
      <Culture/>
    </>
  )
}

export default Home