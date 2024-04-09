import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import FlexibleImg from '../assets/img/flexible-img.png';
import BrushImg from '../assets/img/brushes.png';
import SecVideo from '../assets/img/brushes.png';

const Flexible = () => {
    const FlexList = [
        {
            FlexHead: "Flexible",
            FlexHeading: "Desktop level precision?  Elementary.",
            FlexmainPara: "Whether you're a designer prototyping a new logo on your couch, or an illustrator creating a vector painting of the Milky Way with thousands of stars, the pen tool handles it with ease.",
            FlexstartPara: "Use our powerful gesture controls to change your node types, or change the types of all your nodes with just one finger on the screen.",
            FlexendPara: "With our auto-trace technology, hours of tracing images by hand are reduced to just the press of a button."
        }
    ]
    const LetterList = [
        {
            FlexHead: "Lettering",
            FlexHeading: "Best Typography in the Galaxy.",
            FlexmainPara: "Whether you're a designer prototyping a new logo on your couch, or an illustrator creating a vector painting of the Milky Way with thousands of stars, the pen tool handles it with ease.",
            FlexstartPara: "Use our powerful gesture controls to change your node types, or change the types of all your nodes with just one finger on the screen.",
            FlexendPara: "With our auto-trace technology, hours of tracing images by hand are reduced to just the press of a button."
        }
    ]
    const PrintList = [
        {
            FlexHead: "Print",
            FlexHeading: "Publications that speak for themselves.",
            FlexmainPara: "Whether you're a designer prototyping a new logo on your couch, or an illustrator creating a vector painting of the Milky Way with thousands of stars, the pen tool handles it with ease.",
            FlexstartPara: "Use our powerful gesture controls to change your node types, or change the types of all your nodes with just one finger on the screen.",
            FlexendPara: "With our auto-trace technology, hours of tracing images by hand are reduced to just the press of a button."
        }
    ]
    const AllList = [...FlexList, ...LetterList, ...PrintList];
    const AllImg = [FlexibleImg, BrushImg, SecVideo];

    return (
        <div className='flex-sec'>
            <Container>
                <Row>
                    {/* Iterate over text items */}
                    {AllList.map((item, index) => (
                        <Col key={index} sm={12} md={6} lg={6} xl={6} className={(index % 3 === 0) ? 'mb-0' : 'mt-5 order-md-2'}>
                            <h4 className='illustration-uper'>{item.FlexHead}</h4>
                            <h2 className='illustration-head'>{item.FlexHeading}</h2>
                            <p className='illustration-para'>{item.FlexmainPara}</p>
                            <p className='illustration-para'>{item.FlexstartPara}</p>
                            <p className='illustration-para'>{item.FlexendPara}</p>
                            <ul className='list-unstyled illustration-ul'>
                                <li>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                    <span>Pen Tool</span>
                                </li>
                                <li>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                    <span>Gestures and Shortcuts</span>
                                </li>
                            </ul>
                            <ul className='list-unstyled illustration-ul'>
                                <li>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                    <span>Auto-trace</span>
                                </li>
                            </ul>
                        </Col>
                    ))}
                    {/* Iterate over image items */}
                    {AllImg.map((image, index) => (
                        <Col key={index} sm={12} md={6} lg={6} xl={6} className={(index % 3 === 0) ? 'mt-5 order-md-2' : 'mt-5'}>
                            <img className='img-fluid flex-img' src={image} alt='' />
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default Flexible;
