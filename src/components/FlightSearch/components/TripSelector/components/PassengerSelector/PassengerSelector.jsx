import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaMinus, FaPlus, FaUser } from "react-icons/fa";

const PassengerSelector = ({ adults, setAdults, children, setChildren, infantsInSeat, setInfantsInSeat, infantsOnLap, setInfantsOnLap }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="passenger-selector" ref={ref} onClick={() => setIsOpen(!isOpen)}>
      <FaUser className="user-icon" />
      <span>{adults + children + infantsInSeat + infantsOnLap}</span>
      <FaChevronDown className="chevron-icon" />
      
      {isOpen && (
        <div className="dropdown">
          {[
            { label: "Adults", state: adults, setter: setAdults, min: 1 },
            { label: "Children", state: children, setter: setChildren, min: 0 },
            { label: "Infants in seat", state: infantsInSeat, setter: setInfantsInSeat, min: 0 },
            { label: "Infants on lap", state: infantsOnLap, setter: setInfantsOnLap, min: 0 }
          ].map(({ label, state, setter, min }) => (
            <div key={label} className="passenger-item">
              <div className="passenger-label">{label}</div>
              <div className="counter">
                <FaMinus className="counter-icon" onClick={() => setter(Math.max(min, state - 1))} />
                <span className="counter-value">{state}</span>
                <FaPlus className="counter-icon" onClick={() => setter(state + 1)} />
              </div>
            </div>
          ))}
          <div className="popup-footer">
            <button className='popup-footer-button' onClick={() => setIsOpen(false)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;