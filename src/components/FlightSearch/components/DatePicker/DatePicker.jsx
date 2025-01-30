import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const CustomDateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());  
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const modifyDate = (direction, type) => {
    const dateToModify = type === 'start' ? startDate : endDate;
    const newDate = new Date(dateToModify);
    if (direction === 'increase') newDate.setDate(newDate.getDate() + 1);
    if (direction === 'decrease') newDate.setDate(newDate.getDate() - 1);
    if (type === 'start') setStartDate(newDate);
    if (type === 'end') setEndDate(newDate);
  };

  const handleClick = (inputType) => {
    setActiveInput(inputType);
    setIsOpen(true);
  };

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleConfirm = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.calendar-container') && !event.target.closest('.date-inputs')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="custom-date-range-picker">
      <div className="date-inputs">
        <div className="date-input" onClick={() => handleClick('start')}>
         
          <div className="input-with-buttons">
            <input
              className='picker-input'
              type="text"
              value={startDate ? startDate.toLocaleDateString() : ""}
              readOnly
              placeholder="Select start date"
            />
            <div className="date-buttons">
              <button 
                onClick={(e) => { modifyDate('decrease', 'start'); e.stopPropagation(); }} 
                className="arrow-btn">←</button>
              <button 
                onClick={(e) => { modifyDate('increase', 'start'); e.stopPropagation(); }} 
                className="arrow-btn">→</button>
            </div>
          </div>
        </div>

        <div className="date-input" onClick={() => handleClick('end')}>
        
          <div className="input-with-buttons">
            <input
              className='picker-input'
              type="text"
              value={endDate ? endDate.toLocaleDateString() : ""}
              readOnly
              placeholder="Select end date"
            />
            <div className="date-buttons">
              <button 
                onClick={(e) => { modifyDate('decrease', 'end'); e.stopPropagation(); }} 
                className="arrow-btn">←</button>
              <button 
                onClick={(e) => { modifyDate('increase', 'end'); e.stopPropagation(); }} 
                className="arrow-btn">→</button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="calendar-container">
          <DatePicker
            selected={activeInput === 'start' ? startDate : endDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="custom-datepicker"
          />
          <div className="buttons">
            <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
            <button onClick={handleClear} className="clear-btn">Clear</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDateRangePicker;