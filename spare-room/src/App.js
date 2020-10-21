import React from 'react';
import {Nav,NavItem} from 'reactstrap'
import {useMediaQuery} from 'react-responsive'
import Menu from './menu'
import './App.css';

import {Route} from 'react-router-dom'


import HomePage from './components/homepage';

function App() {
  const isMobile = useMediaQuery({ query: "(max-width:426px)" });
  return (
    <div>
      {isMobile ? (
        <div>
        <Menu />
        </div>
      )
      : (
        <div>
        <Nav className="Nav">
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Connect</NavItem>
        <NavItem>Projects</NavItem>
      </Nav>
      </div>
      )

      }
     
    
    <Route exact path = "/" component={HomePage} />

    <div className='footer'>
      
        <li>720.584.5636</li>
        <li>spareroomwebdev@gmail.com</li>
      
    </div>
    </div>
  )
}

export default App;
