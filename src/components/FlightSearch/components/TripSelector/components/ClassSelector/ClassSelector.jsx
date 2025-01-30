
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
 
 
const ClassSelector = ({ travelClass, setTravelClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const travelClasses = ["Economy", "Premium", "Business", "First"];

  return (
    <div className="class-selector" onClick={() => setIsOpen(!isOpen)}>
      <span>{travelClass}</span>
      <FaChevronDown className="chevron-icon" />
      {isOpen && (
        <div className="dropdown">
          {travelClasses.map((cls) => (
            <div key={cls} className="dropdown-item" onClick={() => { setTravelClass(cls); setIsOpen(false); }}>
              {cls}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ClassSelector ;