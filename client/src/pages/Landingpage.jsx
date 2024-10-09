import React from 'react'
import Discovery from '../components/landingpage/DiscoverySection.jsx'
import Slide from '../components/landingpage/SlideSection.jsx'
import Explore from '../components/landingpage/ExploreSection.jsx'
import Recommend from '../components/landingpage/RecommendSection.jsx'
import Footer from '../components/layout/Footer.jsx'
const LandingPage = () => {
  return (
    <div className='flex flex-col gap-[70px]'>
        <Slide landingPage={true}/> 
        <Discovery/>
        <Explore/>
        <Recommend/>
        <Footer/>
    </div>
  );
};

export default LandingPage;