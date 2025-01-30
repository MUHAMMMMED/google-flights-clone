import React, { useState } from 'react';
import { FaBell, FaChartLine, FaSearch } from 'react-icons/fa';
import './ToolsTabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('find');
  
  const tabs = [
    {
      id: 'find',
      label: 'Find the cheapest days to fly',
      description: 'The Date grid and Price graph make it easy to see the best flight deals',
      icon: <FaSearch className="tab-icon" />,
      content: (
        <>
          <h2>The Date grid and Price graph make it easy to see the best flight deals</h2>
          <p  className='content-p' >
          Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.

          </p>
          <img   className='content-img' src="https://www.gstatic.com/flights/app/lp/dates_benefits_dark.svg" alt="find cheapest days" />
       
          
        </>
      )
    },
    {
      id: 'monitor',
      label: 'Monitor flight prices',
      description: 'Price history and trend data show you when to book to get the best price on your flight',
      icon: <FaBell className="tab-icon" />,
      content: (
        <>
          <h2>Get smart insights about flight prices</h2>
          <p  className='content-p' >
          Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.</p>

          <img   className='content-img' src="https://www.gstatic.com/flights/app/lp/price_insights_benefits_dark.svg" alt="monitor prices" />
        </>
      )
    },
    {
      id: 'track',
      label: 'Track prices for a trip',
      icon: <FaChartLine className="tab-icon" />,
      description: ' Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.',
      content: (
        <>
          <h2>Monitor flight prices and make sure you never miss a price change</h2>
          <p  className='content-p' >Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.</p>
           <img  className='content-img'    src="https://www.gstatic.com/flights/app/lp/tracking_prices_benefits_dark.svg" alt="track prices" />
        </>
      )
    }
  ];
  
    return (
      <div className="tools-container">
        <h2>Useful tools to help you find the best deals</h2>
        
        <div className="tabs-responsive-wrapper">
          <div className="tabs-column">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className='tab-btn-icon'>{tab.icon}</div>
                <div className='tab-btn-text'>
                    <h2  className='tab-btn-h3'> {tab.label}</h2>
               
                <p className='tab-btn-p'>{tab.description}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    );
  };
  
  export default Tabs;