import React from 'react';
import {Nav,NavItem} from 'reactstrap'
import {hamburgerMenu} from './menus/hamburger'
import './App.css';

function App() {
  return (
    <div>
     
    <Nav className="Nav">
        <NavItem>Services</NavItem>
        <NavItem>Connect</NavItem>
        <NavItem>Projects</NavItem>
    </Nav>
    
    
    
    </div>
  );
}

export default App;
