import React from "react";
import { Link } from "react-router-dom";
import "./PopularRoutes.css";

const routes = [
  "Flights from New York to London",
  "Flights from New York to Paris",
  "Flights from New York to Rome",
  "Flights from Toronto to London",
  "Flights from London to Tokyo",
  "Flights from New York to Los Angeles",
  "Flights from London to Istanbul",
  "Flights from London to Berlin",
  "Flights from Montreal to Paris",
  "Flights from New York to Milan",
  "Flights from Madrid to Rome",
  "Flights from Paris to Marrakech",
  "Flights from Paris to Bangkok",
  "Flights from Chicago to Paris",
  "Flights from London to Paris",
  "Flights from London to Milan",
  "Flights from London to Dubai",
  "Flights from London to Delhi",
  "Flights from Sao Paulo to London",
  "Flights from New York to Orlando",
  "Flights from Melbourne to London"
];

const RouteCard = ({ route }) => {
  return (
    <h3 className="route-title">
      <Link to="#" className="route-link">
        {route}
      </Link>
    </h3>
  );
};

const PopularRoutes = () => {
  return (
    <div className="routes-container">
      <h2 className="section-heading">Find cheap flights on popular routes</h2>
      <div className="routes-grid">
        {routes.map((route, index) => (
          <RouteCard key={index} route={route} />
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;