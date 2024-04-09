
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import IllustrationImg from '../assets/img/illustration-bg.jpeg';
import IllustrationMain from '../assets/img/illustration-img.png';
import LetteringMain from '../assets/img/lettering-img.png'
const Illustration = () => {
    return (
        <>
            <div className='illustration-sec illustration-margin' style={{ backgroundImage: `url(${IllustrationImg})` }}>
                <Container>
                    <div className='first-sec'>
                        <Row className='' style={{ display: 'flex', alignItems: 'center' }}>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <img className='img-fluid' src={IllustrationMain} />
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6} className='mb-0'>
                                <h4 className='illustration-uper'>Illustration</h4>
                                <h2 className='illustration-head'>Create without constraint.</h2>
                                <p className='illustration-para'>Whether you're a designer prototyping a new logo on your couch, or an illustrator creating a vector painting of the Milky Way with thousands of stars, the pen tool handles it with ease. </p>
                                <p className='illustration-para'>Use our powerful gesture controls to change your node types, or change the types of all your nodes with just one finger on the screen.</p>
                                <p className='illustration-para'>With our auto-trace technology, hours of tracing images by hand are reduced to just the press of a button.</p>
                                <ul className='list-unstyled illustration-ul'>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span>Pen Too</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span>Gestures and Shortcuts</span>
                                    </li>

                                </ul>
                                <ul className='list-unstyled illustration-ul'>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span> Auto-trace</span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className='second-sec'>
                        <Row className='' style={{ display: 'flex', alignItems: 'center' }}>
                            <Col sm={12} md={6} lg={6} xl={6} className='mb-0'>
                                <h4 className='illustration-uper'>Lettering</h4>
                                <h2 className='illustration-head'>Best Typography in the Galaxy.</h2>
                                <p className='illustration-para'>Whether you're a designer prototyping a new logo on your couch, or an illustrator creating a vector painting of the Milky Way with thousands of stars, the pen tool handles it with ease. </p>
                                <p className='illustration-para'>Use our powerful gesture controls to change your node types, or change the types of all your nodes with just one finger on the screen.</p>
                                <p className='illustration-para'>With our auto-trace technology, hours of tracing images by hand are reduced to just the press of a button.</p>
                                <ul className='list-unstyled illustration-ul'>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span>Pen Too</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span>Gestures and Shortcuts</span>
                                    </li>

                                </ul>
                                <ul className='list-unstyled illustration-ul'>
                                    <li>
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        <span> Auto-trace</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <img className='img-fluid' src={LetteringMain} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Illustration;