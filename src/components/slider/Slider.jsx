import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import countriesflag from './assets/countries-flag.jpg';
import countriesflag2 from './assets/countries-flag2.jpg';
import countriesflag3 from './assets/countries-flag3.jpg';
const Slider = () => {
  return (
    <>
        <Col xs={12} md={{ order: 'first', span: 9  }}>
            <Carousel className='h-100'>
                <Carousel.Item className='h-100'>
                    <img className="d-block w-100 h-100"  src={countriesflag} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100"  src={countriesflag2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100"  src={countriesflag3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>

        </Col>
    </>
  )
}

export default Slider