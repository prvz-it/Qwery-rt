import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <>
      <Menu/>
      <Hero/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout