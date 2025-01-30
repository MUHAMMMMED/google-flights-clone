import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import FromInput from "./components/FromInput";
import ToInput from "./components/ToInput";
import "./SearchInput.css";
export default function SearchInput() {
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");

  const [fromSuggestions, setFromSuggestions] = useState([
    "Dubai",
    "Abu Dhabi",
    "Riyadh",
    "Cairo",
    "London",
    "Paris",
    "New York",
  ]);
  const [toSuggestions, setToSuggestions] = useState([
    "Dubai",
    "Abu Dhabi",
    "Riyadh",
    "Cairo",
    "London",
    "Paris",
    "New York",
  ]);

  const filteredFromSuggestions = fromSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(fromDestination.toLowerCase())
  );

  const filteredToSuggestions = toSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(toDestination.toLowerCase())
  );

  const handleFromInputChange = (e) => {
    setFromDestination(e.target.value);
  };

  const handleToInputChange = (e) => {
    setToDestination(e.target.value);
  };

  const swapDestinations = () => {
    const temp = fromDestination;
    setFromDestination(toDestination);
    setToDestination(temp);
  };

  return (
    <div className="SearchInput-container">
      <FromInput
        destination={fromDestination}
        handleInputChange={handleFromInputChange}
        filteredSuggestions={filteredFromSuggestions}
      />
    <div onClick={swapDestinations} className="swap-button">
  <FaExchangeAlt />
    </div>
      <ToInput
        destination={toDestination}
        handleInputChange={handleToInputChange}
        filteredSuggestions={filteredToSuggestions}
      />
  
      {/* <div className="search-result">
        <p>From: {fromDestination}</p>
        <p>To: {toDestination}</p>
      </div> */}
    </div>
  );
}