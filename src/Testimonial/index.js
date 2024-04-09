import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav, WithStyles } from 'react-bootstrap';
import css from '../assets/css/style.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import IllustrationImg from '../assets/img/illustration-bg.jpeg';
import MySlider from '../MySlider';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {

    return (
        <>
            <div className='illustration-sec' style={{ backgroundImage: `url(${IllustrationImg})` }}>
                <Container>
                    <Row>
                        <h2 className='test-head'>What are they saying</h2>
                        
                        <MySlider />
                        

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Testimonial;