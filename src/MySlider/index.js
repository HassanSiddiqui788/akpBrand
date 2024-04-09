import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row, Col } from 'react-bootstrap';
const MySlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToShow: 3 
            
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToShow: 3 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>

            <Carousel responsive={responsive} CenterPadding={10}>

                <div className='test-box'>
                    <h6>Thomas Parker</h6>
                    <p>This has been a delightful enriching
                        experience, It is as someone is talking like you and thinking the same way, direct to
                        the point, and great timing. Special thanks for making this Come true in a short period
                        of time and thorough work .
                    </p>
                    <div className='test-ul'>
                        <ul className='list-unstyled'>
                            <li>
                                <p>communication</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Quality</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Delivery</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li className='border-test'>
                                <p>Support</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='test-box'>
                    <h6>Thomas Parker</h6>
                    <p>This has been a delightful enriching
                        experience, It is as someone is talking like you and thinking the same way, direct to
                        the point, and great timing. Special thanks for making this Come true in a short period
                        of time and thorough work .
                    </p>
                    <div className='test-ul'>
                        <ul className='list-unstyled'>
                            <li>
                                <p>communication</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Quality</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Delivery</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li className='border-test'>
                                <p>Support</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='test-box'>
                    <h6>Thomas Parker</h6>
                    <p>This has been a delightful enriching
                        experience, It is as someone is talking like you and thinking the same way, direct to
                        the point, and great timing. Special thanks for making this Come true in a short period
                        of time and thorough work .
                    </p>
                    <div className='test-ul'>
                        <ul className='list-unstyled'>
                            <li>
                                <p>communication</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Quality</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Delivery</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li className='border-test'>
                                <p>Support</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='test-box'>
                    <h6>Thomas Parker</h6>
                    <p>This has been a delightful enriching
                        experience, It is as someone is talking like you and thinking the same way, direct to
                        the point, and great timing. Special thanks for making this Come true in a short period
                        of time and thorough work .
                    </p>
                    <div className='test-ul'>
                        <ul className='list-unstyled'>
                            <li>
                                <p>communication</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Quality</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li>
                                <p>Delivery</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                            <li className='border-test'>
                                <p>Support</p>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </Carousel>;



        </>
    )
}

export default MySlider