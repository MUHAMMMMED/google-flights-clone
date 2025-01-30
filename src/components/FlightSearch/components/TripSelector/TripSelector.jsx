import React, { useState } from "react";
import "./TripSelector.css";
import ClassSelector from "./components/ClassSelector/ClassSelector";
import PassengerSelector from "./components/PassengerSelector/PassengerSelector";
import TripTypeSelector from "./components/TripTypeSelector/TripTypeSelector";
 
const TripSelector = () => {
  const [tripType, setTripType] = useState("Round trip");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsInSeat, setInfantsInSeat] = useState(0);
  const [infantsOnLap, setInfantsOnLap] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  return (
    <div className="trip-selector-container">
      <div className="selector">
        <TripTypeSelector tripType={tripType} setTripType={setTripType} />
        <PassengerSelector 
          adults={adults} setAdults={setAdults} 
          children={children} setChildren={setChildren} 
          infantsInSeat={infantsInSeat} setInfantsInSeat={setInfantsInSeat} 
          infantsOnLap={infantsOnLap} setInfantsOnLap={setInfantsOnLap} 
        />
        <ClassSelector travelClass={travelClass} setTravelClass={setTravelClass} />
      </div>
    </div>
  );
};

export default TripSelector;
