import React, { useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import "./DestinationInput.css";

const FromInput = ({ destination, handleInputChange, filteredSuggestions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectorActive, setIsSelectorActive] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSuggestionClick = (suggestion) => {
    handleInputChange({ target: { value: suggestion } });
    setIsOpen(false);
    setIsSelectorActive(false);
  };

  const toggleSelector = () => {
    setIsSelectorActive(!isSelectorActive);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && !inputRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsSelectorActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="destination-input-container">
      <div className="input-wrapper" ref={inputRef} onClick={toggleSelector}>
        {!isSelectorActive ? (
          <>
            <FaRegCircle className="input-icon" />
            <input
              type="text"
              value={destination}
              onChange={handleInputChange}
              placeholder="From?"
              readOnly
            />
          </>
        ) : (
          <div className="dropdown" ref={dropdownRef}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRegCircle className="input-icon" />
              <input
                type="text"
                value={destination}
                onChange={handleInputChange}
                placeholder="Search destination..."
                autoFocus
              />
            </div>
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))
            ) : (
              <div className="dropdown-item no-matches">
                No matching locations found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FromInput;