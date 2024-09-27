import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', margin: 0 }}>
        <li><Link to="/page-1" style={{ color: 'white', textDecoration: 'none' }}>Connect</Link></li>
        <li><Link to="/page-2" style={{ color: 'white', textDecoration: 'none' }}>Hobbies</Link></li>
        <li><Link to="/page-3" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
