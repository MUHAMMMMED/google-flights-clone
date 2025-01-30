import React from "react";
import { FaRegCircle } from "react-icons/fa";
import "./Shape.css";

const Shape = () => {
  return (
    <div className="Shape-container">
  
      <div className="Shape-curved-rect Shape-left"></div>
      
      
      <div className="Shape-circle">
        <FaRegCircle className="Shape-icon" />
      </div>

      
      <div className="Shape-curved-rect Shape-right"></div>
    </div>
  );
};

export default Shape;