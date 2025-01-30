import React from 'react';
import { FaPlane } from 'react-icons/fa';
import './FlightDetails.css';

export default function FlightDetails({ flights }) {
  return (
    <div className="flight-details-wrapper">
      <h2 className="title">Flight Details</h2>
      <div className="flight-container">
        {flights.data.itineraries.map((itinerary, index) => (
          <div key={index} className="itinerary-card">
            <div className="card-content">
              <div className="flight-card-image">
                <FaPlane className="plane-icon" />
              </div>
              <div className="card-info">
                <h3 className="itinerary-title">Itinerary {index + 1}</h3>
                
                <div className="flight-info-row">
                  <p><strong>Airlines:</strong> {itinerary.airlines?.[0] || "N/A"}</p>
                  <p><strong>Price:</strong> {itinerary.price?.formatted || "N/A"}</p>
                </div>

                <div className="flight-info-row">
                  <p><strong>Fare Policy:</strong> {itinerary.farePolicy?.isChangeAllowed ? "Change Allowed" : "No Changes Allowed"}</p>
                  <p><strong>Eco Contender Delta:</strong> {itinerary.eco?.ecoContenderDelta || "N/A"}</p>
                </div>

                <div className="flight-info-row">
                  <p><strong>Fare Attributes:</strong></p>
                  <ul>
                    {itinerary.fareAttributes?.tags?.map((tag, tagIndex) => (
                      <li key={tagIndex}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className="flight-info-row">
                  <p><strong>Score:</strong> {itinerary.score}</p>
                  <p><strong>Self Transfer:</strong> {itinerary.legs?.[0]?.isSelfTransfer ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}