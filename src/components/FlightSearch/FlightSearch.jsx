import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './FlightSearch.css';
import CustomDateRangePicker from './components/DatePicker/DatePicker';
import SearchInput from './components/SearchInput/SearchInput';
import TripSelector from './components/TripSelector/TripSelector';

const FlightSearch = () => {
  const [flights, setFlights] = useState(null);
  const [loading, setLoading] = useState(true);
  const YOUR_API_KEY = "ef31d81ad0mshfe503822b3c23d9p1933fejsnaf8e0ac1a220";

  useEffect(() => {
    const fetchFlightDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails',
        params: {
          itineraryId: '3232',
          legs: '"[{"destination":"LOND","origin":"LAXA","date":"2025-02-11"}]"',
          sessionId: 'htgvrcfedxwsdxecfrvgtbhytgvrcfdexs',
          adults: '1',
          currency: 'USD',
          locale: 'en-US',
          market: 'en-US',
          cabinClass: 'economy',
          countryCode: 'US'
       
        },
        headers: {
          'x-rapidapi-key': YOUR_API_KEY,
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        }
      };

      try {
        const response = await axios.request(options);
        console.log("Flight API Response:", response.data);
        setFlights(response.data); 
        // setLoading(false); 
      } catch (error) {
        console.error("Error fetching flights:", error);
        setLoading(false); 
      }
    };

    fetchFlightDetails();
  }, []);  

  if (loading) {
    return <p>Loading flights...</p>;
  }

  return (
    <> 
    <div className="search-container">
      <div className="flight-search">
        <TripSelector />
        <div className="flight-options">
          <div className="search-inputs">
            <SearchInput />
          </div>

          <div className="search-inputs">
            <CustomDateRangePicker />
          </div>

          <div>

</div>
        </div>
        <button className="search-button">
          <FaSearch />
          Search
        </button>
      </div>
    </div>



    <h2 style={{color:'#fff',marginTop:'15px'}}>Flight Details</h2>
  {flights && flights.length > 0 ? (
    <div style={{color:'#fff'}}>
      {flights.map((flight, index) => (
        <div key={index} className="flight-detail">
          <h3>Flight {index + 1}</h3>
          <p><strong>Origin:</strong> {flight.origin}</p>
          <p><strong>Destination:</strong> {flight.destination}</p>
          <p><strong>Date:</strong> {flight.date}</p>
          <p><strong>Price:</strong> {flight.price}</p>
        </div>
      ))}
    </div>
  ) : (
    <p style={{color:'#fff'}}>No flights available.</p>
  )}
    </>
  );
};

export default FlightSearch;