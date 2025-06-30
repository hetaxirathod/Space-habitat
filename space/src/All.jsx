import React from 'react'
import AviationDay from './AviationDay';
import EarthInformationCenter from './EarthInformationCenter';
import ExploreUniverse from './ExploreUniverse';
import FeaturedNews from './FeaturedNews';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import ImageOfTheDay from './ImageOfTheDay';
import NasaImagesGallery from './NasaImagesGallery';
import NasaTopics from './NasaTopics';
import EmailForm from './components/EmailForm';

const All = () => {
  return (
    <>
    <Header/>
     <HeroSection/>
     <FeaturedNews/>
     <AviationDay/>
     <ImageOfTheDay/>
     <NasaImagesGallery/>
     <EarthInformationCenter/>
     <NasaTopics/>
     <ExploreUniverse/>
     <EmailForm/>
     <Footer/>
    </>
  )
}

export default All
