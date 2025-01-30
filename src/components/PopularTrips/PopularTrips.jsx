import React from 'react';
import './PopularTrips.css';

const tripsData = [
  {
    destination: "Istanbul",
    date: "May 17 – May 23",
    details: "Nonstop - 4 hr 45 min - Pegasus",
    price: "$135",
    icon:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSp10Y3G-u5LPBzRWABhOUD7BGcBspacZc2r31UP6QmzLmyprerN-6BZ5wZkdsDXngRuIYCPQI8Ny3uYjbRegATm48AJfppuLgpsc0mhsE',
  },
  {
    destination: "Sydney",
    date: "Feb 24 – Mar 3",
    details: "1 stop - 33 hr 55 min - Sichuan Airlines",
    price: "$704",
    icon:  'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMqVWevN4qkQ8u4HrxtHbv2Oy7UigPckL8bgZUJQWQgjvmJxG7oggYxd2Rw5MwjiBYzZFpr939opSbON9CxkwdD-7DK9it3TPq1ea8pxU',
  },
  {
    destination: "Los Angeles",
    date: "Mar 6 – Mar 13",
    details: "1 stop - 21 hr 50 min - Air France, KLM",
    price: "$566",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdsoXNsip15P8UZRTG3U7kaduxFjaMb01CcKiLeWVx6qTHF0_o43H4KQFFHIgbyLKBnkNTh-4ofS1X2iuG1FEB8TAtoeVgqD9ZUApr4s',
  },
  {
    destination: "Bangkok",
    date: "Mar 2 – Mar 9",
    details: "1 stop - 11 hr 5 min - IndiGo",
    price: "$330",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdsoXNsip15P8UZRTG3U7kaduxFjaMb01CcKiLeWVx6qTHF0_o43H4KQFFHIgbyLKBnkNTh-4ofS1X2iuG1FEB8TAtoeVgqD9ZUApr4s',

  },
  
 
 
  
];

const PopularTrips = () => {
  return (
    <div className="popular-trips">
      <h2>Popular trips from Dubai</h2>
      <div className="trips-list">
        {tripsData.map((trip, index) => (
          <div className="trip-card" key={index}>
            <div className="trip-icon">
            <img src={trip.icon} alt="airline" />
            </div>
            <div className="trip-content">
              <div className="trip-header">
                <div>
                  <h3>{trip.destination}</h3>
                  <p>{trip.date}</p>
                </div>
                {trip.price && <span className="trip-price">{trip.price}</span>}
              </div>
              <div className="trip-details">
                {trip.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTrips;