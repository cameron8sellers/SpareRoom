import React from 'react'
import {useMediaQuery} from 'react-responsive'
import './homepage.css'




const HomePage = () => {

const isMobile = useMediaQuery({ query: "(max-width:426px)" });
  return (
    <div>
    {isMobile ? (
      <div className='logo-container'>
        <img className='logo' src='https://res.cloudinary.com/drcgo7zqn/image/upload/v1602773562/SpareRoom%20image%20assets/SRWD_HalfLogoType_Black_gdaeao.jpg' />
      </div>
    ) 
    : 
    (
      <div className='logo-container'>
        <img className='logo' src='https://res.cloudinary.com/drcgo7zqn/image/upload/v1602773536/SpareRoom%20image%20assets/BlackFull_wpc0qd.png' />
      </div>
    )}
    </div>
  )}

export default HomePage