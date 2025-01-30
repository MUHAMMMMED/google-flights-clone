import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaRegPaperPlane, FaSyncAlt } from "react-icons/fa";

const tripTypes = [
  { name: "Round trip", icon: <FaSyncAlt className="icon" /> },
  { name: "One way", icon: <FaArrowRight className="icon" /> },
  { name: "Multi-city", icon: <FaRegPaperPlane className="icon" /> },
];

const TripTypeSelector = ({ tripType, setTripType }) => {
  const [isOpen, setIsOpen] = useState(false);

  // البحث عن الأيقونة المناسبة حسب الرحلة المختارة
  const selectedTrip = tripTypes.find((type) => type.name === tripType);

  return (
    <div className="trip-type" onClick={() => setIsOpen(!isOpen)}>
      <div className="selected-type">
        {selectedTrip?.icon} <span>{tripType}</span>
      </div>
      <FaChevronDown className="chevron-icon" />
      {isOpen && (
        <div className="dropdown">
          {tripTypes.map((type) => (
            <div
              key={type.name}
              className="dropdown-item"
              onClick={() => {
                setTripType(type.name);
                setIsOpen(false);
              }}
            >
              {type.icon} <span>{type.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripTypeSelector;