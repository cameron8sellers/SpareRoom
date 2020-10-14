import React from 'react';
import {Nav,NavItem} from 'reactstrap'

import './App.css';
import {Route} from 'react-router-dom'


import HomePage from './components/homepage';

function App() {
  
  return (
    <div>
      <Nav className="Nav">
        <NavItem>Services</NavItem>
        <NavItem>Connect</NavItem>
        <NavItem>Projects</NavItem>
      </Nav>
     
    
    <Route exact path = "/" component={HomePage} />

    
    </div>
  );
}

export default App;
