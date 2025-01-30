import React from 'react';
import { FaGoogle, FaHome, FaHotel, FaLanguage, FaMapMarkedAlt, FaMoneyBillAlt, FaPlane } from 'react-icons/fa';
import { LuBaggageClaim } from "react-icons/lu";
import Navbar from './components/Navbar/Navbar';
import './Header.css';
export default function Header() {

const navItems = [
  { name: 'Travel', icon: <LuBaggageClaim />, href: '#travel' },
  { name: 'Explore', icon: <FaGoogle />, href: '#explore' },
  { name: 'Flights', icon: <FaPlane />, href: '#flights' },
  { name: 'Hotels', icon: <FaHotel />, href: '#hotels' },
  { name: 'Vacation Rentals', icon: <FaHome />, href: '#vacation-rentals' },
];
    const additionalItems = [
        { name: 'Tracked Flight Prices', icon: <FaPlane />, href: '#tracked-flight-prices' },
        { name: 'Price Guarantee', icon: <FaMoneyBillAlt />, href: '#price-guarantee' },
        { name: 'Change Language', icon: <FaLanguage />, href: '#change-language' },
        { name: 'Change Currency', icon: <FaMoneyBillAlt />, href: '#change-currency' },
        { name: 'Change Location', icon: <FaMapMarkedAlt />, href: '#change-location' },
      ];
    
  return (
    <div className='header'>
    <Navbar  navItems={navItems} additionalItems={additionalItems}/>

    </div>
  )
}
