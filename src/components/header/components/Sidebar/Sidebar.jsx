import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = React.forwardRef(({ isSidebarOpen, navItems, activeLink, handleLinkClick ,  additionalItems }, ref) => {

  return (
    <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`} ref={ref}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={activeLink === item.name ? 'active' : ''}
          onClick={() => handleLinkClick(item.name)} // Update active link on click
        >
          <div>
            {item.icon}  
            <div>{item.name}</div>
          </div>
        </Link>
      ))}
      
      {/* Add Divider Between Loops */}
      <div className="divider" />
      
      {additionalItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={activeLink === item.name ? 'active' : ''}
          onClick={() => handleLinkClick(item.name)} // Update active link on click
        >
          <div>
            {item.icon}  
            <div>{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
});

export default Sidebar;