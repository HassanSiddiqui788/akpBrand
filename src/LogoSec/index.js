import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.css';
import LogoImg1 from '../assets/img/cl_2.svg';
import LogoImg2 from '../assets/img/cl_3.svg';
import LogoImg3 from '../assets/img/cl_4.svg';
import LogoImg4 from '../assets/img/cl_5.svg';
import LogoImg5 from '../assets/img/cl_6.svg';
import LogoImg6 from '../assets/img/cl_7.svg';
import LogoImg7 from '../assets/img/cl_8.svg';
import '../assets/css/style.css'; // Make sure to adjust the path accordingly

const LogoSec = () => {
  const LogoArr = [LogoImg1, LogoImg2, LogoImg3, LogoImg4, LogoImg5, LogoImg6, LogoImg7]
  return (

    <div className="logo-sec" >
      <Container>
        <Row>
          <Col xs={12}>
            <h4>We Are Rated
              <span className='mx-2'>
                <i className="fa fa-star clr-star" aria-hidden="true"></i>
                <i className="fa fa-star clr-star" aria-hidden="true"></i>
                <i className="fa fa-star clr-star" aria-hidden="true"></i>
                <i className="fa fa-star clr-star" aria-hidden="true"></i>
                <i className="fa fa-star clr-star" aria-hidden="true"></i>
              </span>
              among 34,578 satisfied customers
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={10}>
            <div>
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
                autoplayHoverPause
                responsive={{
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }}
              >
                {
                  LogoArr.map((image, index) => {
                    return (
                      <>
                        <div className='item' key={index}>
                          <img src={image} className="img-fluid logo-img" />
                        </div>
                      </>
                    )
                  })
                }
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default LogoSec;
