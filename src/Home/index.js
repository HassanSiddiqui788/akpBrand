import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav } from 'react-bootstrap';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import img1 from '../assets/img/banner-bg-3.png';
import LogoSec from '../LogoSec';
import Illustration from '../Illustration';
import Pricing from '../Pricing';
import Desktop from '../Desktop';
import Flexible from '../Flexible';
import Testimonial from '../Testimonial';

const Home = () => {
    return (
        <>

            <div className='home-sec' style={{ backgroundImage: `url(${img1})` }}>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <h1 className='home-head'>The most Intuitive and Precise Illustration
                                Software in the Galaxy.</h1>
                            <p className='home-p'>Akp Solutions LLC empowers you to design anything you can imagine up to 30% faster. Create sophisticated illustrations,
                                spectacular layout mockups, and expressive lettering on the go, whenever you want.</p>
                            <div className='btn-flex'>
                                <button className='custom-btn'>Get Started</button>
                                <button className='white-btn'>Chat With Us</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <LogoSec />
            <Illustration />
            <Pricing />
            <Desktop />
            <Flexible />
            <Testimonial />
            
            
        </>
    )
}

export default Home;