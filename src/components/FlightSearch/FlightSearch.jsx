import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import './FlightSearch.css';
import CustomDateRangePicker from './components/DatePicker/DatePicker';
import FlightDetails from "./components/FlightDetails/FlightDetails";
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
        url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
        params: {
          originSkyId: 'LOND',
          destinationSkyId: 'NYCA',
          originEntityId: '27544008',
          destinationEntityId: '27537542',
          date: '2025-02-05',
          cabinClass: 'economy',
          adults: '1',
          sortBy: 'best',
          currency: 'USD',
          market: 'en-US',
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
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching flights:", error);
        setLoading(false); // Set loading to false if an error occurs
      }
    };

    fetchFlightDetails();
  }, []);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  // Ensure data structure is valid before attempting to map
  if (!flights || !flights.data || !flights.data.itineraries || !Array.isArray(flights.data.itineraries)) {
    return <p>No flight details available or invalid data structure.</p>;
  }

  // Handle the case where itineraries is an empty array
  if (flights.data.itineraries.length === 0) {
    return <p>No flights found.</p>;
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

            <div></div>
          </div>
          <button className="search-button">
            <FaSearch />
            Search
          </button>
        </div>
      </div>

   <FlightDetails flights={flights} />
    </>
  );
};

export default FlightSearch;