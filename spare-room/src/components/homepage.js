import React from 'react'
import {useMediaQuery} from 'react-responsive'
const HomePage = () => {

const isMobile = useMediaQuery({ query: "(max-width:426px)" });
  return (
    <div>
     
    
    

    
    {isMobile ? (
      <div>
        <img src="SRWD_HalfLogoType_Black.png" />
      </div>
    ) : (
      <div>
        <img src="SRWD_LogoType_Black.png" />
      </div>
    )
      
    }
    </div>
  )}

export default HomePage