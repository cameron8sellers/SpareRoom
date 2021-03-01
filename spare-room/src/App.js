import React from 'react';
import {Nav,NavItem, NavLink} from 'reactstrap'
import {useMediaQuery} from 'react-responsive'
import Menu from './menu'
import './App.css';

import {Route} from 'react-router-dom'


import HomePage from './components/homepage';
import ConnectPage from './components/connect'


function App() {
  const isMobile = useMediaQuery({ query: "(max-width:426px)" });
  return (
    <div>
      {isMobile ? (
        <div>
        <Menu />
        </div>
      ) : (
        <div className='Nav'>
        
          <a href='/'>Home</a>
          
          <a href='/'>Services</a>
          
          <a href='/connect'>Connect</a>
          
          <a href='/'>Projects</a>
          
      
      </div>
      )

      }
     
    
    <Route exact path = "/" component={HomePage} />
    <Route path ='/connect' component={ConnectPage} />

    <div className='footer'>
      
        <li>720.697.8083</li>
        <li className='break'>//</li>
        <li>spareroomwebdev@gmail.com</li>
        
      
    </div>
    </div>
  )
}

export default App;
