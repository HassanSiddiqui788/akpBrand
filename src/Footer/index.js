import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import IllustrationImg from '../assets/img/illustration-bg.jpeg';

const Footer = () => {
    return (
        <>
            <div className='illustration-sec' style={{ backgroundImage: `url(${IllustrationImg})` }}>
                <Container>
                    <h2 className='test-head'>Alright! Let’s Do It Now</h2>
                    <p className='tb-para'>Fill up the form, write your tailored requirement and receive a free estimation</p>
                    <div className='form-bg'>
                        <h3>Feel free to make a call request now</h3>
                        <p>Akp Solutions is committed to excellence and vows to make your experience memorable and
                            remarkable. Let us help you in standing out and reaching the maximum of your potential.</p>
                        <div>
                            <form action='javascript:;'>
                                <Row>
                                    <Col sm={12} md={6} lg={6} xl={6}>
                                        <input type='text' name='name' placeholder='Name' className='form-name' />
                                        <input type='text' name='email' placeholder='Email' className='form-name' />
                                        <input type='text' name='number' placeholder='Phone Number' className='form-name' />
                                        <input type='text' name='name' placeholder='Video Animation' className='form-name' />
                                    </Col>
                                    <Col sm={12} md={6} lg={6} xl={6}>
                                        <textarea class="form-control mt-3" id="exampleFormControlTextarea1" rows="10" columns="20" placeholder='Leave Your Message'></textarea>
                                        <button className='form-btn'>Submit</button>
                                    </Col>
                                </Row>
                            </form>

                        </div>
                    </div>
                    <hr className='form-hr' />
                    <footer>
                        <Row>
                            <Col sm={12} md={3} lg={3} xl={3}>
                                <div className='serv-st'>
                                    <h5>Other Services</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a className='foot-items' href='#'>mobile Apps</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='#'>Software Developing</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='#'>Enterprise Resource Planning</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='#'>Digital Marketing</a>
                                        </li>
                                    </ul>
                                </div>

                            </Col>
                            <Col sm={12} md={3} lg={3} xl={3}>
                                <div className='serv-st'>
                                    <h5>Quick Links</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a className='foot-items' href='#'>Portfolios</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='#'>About Us</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='#'>Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={12} md={3} lg={3} xl={3}>
                                <div className='serv-st'>
                                    <h5>Quick Links</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a className='foot-items' href='tel:+1 (000) 000-0000'>Phone: +1 (000) 000-0000</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='javascript:;'>Address: 7051 Southwest FWY Suite A Houston, TX 77074</a>
                                        </li>
                                        <li>
                                            <a className='foot-items' href='mailto:Info@akpsolutionsllc.com'>Email: Info@akpsolutionsllc.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={12} md={3} lg={3} xl={3}>
                                <div className='serv-st'>
                                    <h5>Join our Newsletter</h5>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a className='foot-items' href='javascript:;'>Stay up to date with our news, blog posts, and announcements by subscribing to our Newsletter.</a>
                                        </li>
                                        <li>
                                            <div className='font-fa'>
                                                <i class="fa-brands fa-facebook-f"></i>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-linkedin"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-youtube-play"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </Col>
                        </Row>
                    </footer>
                </Container>
            </div>


        </>
    )
}

export default Footer;