import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav, } from 'react-bootstrap';
import IllustrationImg from '../assets/img/illustration-bg.jpeg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import CtaImg from '../assets/img/cta-img.png';

const Desktop = () => {
    return (
        <>
            <div className='illustration-sec'>
                <Container>
                    <div className='desktop-bg'>
                        <Row className='align-items-center'>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <img className='img-fluid' src={CtaImg} alt='' />
                            </Col>
                            <Col className='desktop-m' sm={12} md={6} lg={6} xl={6}>
                                <h3 className='desktop-head'>Get started with Akp Solutions LLC today.</h3>
                                <p className='desktop-para'>Akp Solutions LLC runs on iPadOS 13 & iOS 13 and later or macOS Big Sur or later (Native M1 support).</p>
                                <div class="mt-4">
                                    <button className="custom-btn">Get Started</button>
                                    <a href='tel:+1 (315)-270-1377' className="white-btn ml-3">+1 (315)-270-1377</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                
            </div>
            

        </>
    )
}

export default Desktop;