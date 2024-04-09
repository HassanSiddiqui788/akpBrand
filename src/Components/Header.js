
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav } from 'react-bootstrap';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


const Header = () => {
  return (
    <>
      
      <div className='head-sec'>
        <Container>
          <Row>
            <Col sm={3} md={3} lg={3} xl={3}>
              <a className='logo-a' href=''>
                <p className='logo-font'>logo Here</p>
              </a>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6}>
              <div className='navbar'>
                <Nav>
                  <ul className='list-unstyled'>
                    <li>
                      <a className='' href=''>home</a>
                    </li>
                    <li>
                      <a className='' href=''>Services</a>
                    </li>
                    <li>
                      <a className='' href=''>About</a>
                    </li>
                    <li>
                      <a className='' href=''>Contact Us</a>
                    </li>
                    <li>
                      <a href="tel:(000) 000-000"><i class="fa fa-phone mx-3" aria-hidden="true"></i>(000) 000-000</a>
                    </li>
                  </ul>
                </Nav>
              </div>
            </Col>
            <Col className='text-end' sm={3} md={3} lg={3} xl={3}>
              <button className='btnwrp'>sign up</button>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Header;