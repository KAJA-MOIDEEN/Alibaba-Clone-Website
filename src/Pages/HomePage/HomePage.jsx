import React from 'react';
import HeroSection from '../../components/HeroSession';
import FeaturesSection from '../../components/FeaturesSection';
import '../../components/ProdectCard.css'
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <FeaturesSection/>
    <Outlet/>
    </>
  )
}

export default HomePage;