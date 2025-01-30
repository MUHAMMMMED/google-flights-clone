import React from 'react';
import PopularRoutes from '../../components/FlightSearch/components/PopularRoutes/PopularRoutes';
import FlightSearch from '../../components/FlightSearch/FlightSearch';
import HeroSection from '../../components/HeroSection/Herosection';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations';
import PopularTrips from '../../components/PopularTrips/PopularTrips';
import FaqSection from '../../components/QuestionTab/QuestionTab';
import Tabs from '../../components/Tabs/Tabs';
import './Home.css';
export default function Home() {
  return (
    <div className='App-container '>
<HeroSection />
<div className='home-container'>
<FlightSearch/>
<PopularTrips/>
<Tabs/>
<PopularDestinations/>
<FaqSection/>
<PopularRoutes/>
</div> </div>
  )
}
