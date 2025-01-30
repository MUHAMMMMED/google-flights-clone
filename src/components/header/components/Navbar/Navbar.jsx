import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaSun, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';

const Navbar = ({navItems,additionalItems}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.navbar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-brand">
          <FaBars className="icon" onClick={toggleSidebar} />
          <span>Google</span>
       
        
        <div className="navbar-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeLink === item.name ? 'active' : ''}
              onClick={() => handleLinkClick(item.name)} // Update active link on click
            >
              {item.icon} <div>{item.name}</div>
            </a>
          ))}
        </div>
        </div>
        <div className="navbar-icons">
          <FaSun className="icon" onClick={toggleDarkMode} />
          <FaUserCircle className="icon" />
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar 
       additionalItems={additionalItems}
        isSidebarOpen={isSidebarOpen} 
        ref={sidebarRef} 
        navItems={navItems} 
        activeLink={activeLink} 
        handleLinkClick={handleLinkClick} // Pass the function to handle active link updates from sidebar
      />
    </>
  );
};

export default Navbar;