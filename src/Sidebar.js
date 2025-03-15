import React, { useState } from 'react';
import './Sidebar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </div>

      {isOpen && (
        <div className="sidebar">
          <div className="close-icon" onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ fontSize: 30 }} />
          </div>
          <ul>
            <li>Home</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
