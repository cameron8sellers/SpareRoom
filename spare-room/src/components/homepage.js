import React from 'react'
import {useMediaQuery} from 'react-responsive'
import {Card, CardImg,CardBody,CardTitle,Button} from 'reactstrap'
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

    <div className='services-cards-container'>
                <Card className='design-card'>
                            <CardTitle className='card-titles'>Web Design</CardTitle>
                            <CardBody className='card-body'>Represent your company with a responsive mobile first design and great user experience for all your customers.</CardBody>
                </Card>
                <Card className='custom-software-card'>
                            <CardTitle className='card-titles'>Custom Web Applications

                            </CardTitle>
                            <CardBody className='card-body'>Do you need software to help you business or an app idea but don't know where to start?</CardBody>
                </Card>
                <Card className='seo-card'>
                            <CardTitle className='card-titles'>SEO</CardTitle>
                            <CardBody className='card-body'>Be discovered to potential customers and expand your online presence. Be one of the top search reults in your area and keep growing.</CardBody>
                </Card>
    </div>
    <div className='about-us-container'>
                <Card>
                            <CardTitle className='about-card-title'>About Us</CardTitle>
                            <CardBody className='about-card-body'>At Spare Room we have a passion for what we do and Our goal is to give our clients the best experience possible. We want to create the soulutions for your online needs and provide a personal experience from top to bottom and ensure our clients are taken care of. </CardBody>
                </Card>
    </div>
    <div className='connect-button-container'>
      <Button className='connect-button'>Connect!</Button>
    </div>
    </div>
  )}

export default HomePage