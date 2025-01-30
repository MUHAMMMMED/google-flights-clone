import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './FlightSearch.css';
import CustomDateRangePicker from './components/DatePicker/DatePicker';
import SearchInput from './components/SearchInput/SearchInput';
import TripSelector from './components/TripSelector/TripSelector';

const FlightSearch = () => {
  return (
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
        </div>
        <button className="search-button">
          <FaSearch /> 
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;