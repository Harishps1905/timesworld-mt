import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import countriesflag from './assets/countries-flag.jpg';
import garlandbanners from './assets/garland-banners.webp';
import hokkaidocountry from './assets/pngtree-winter-scenery-high-place-hokkaido-country-background-banner-hd-image_16003975.jpg';
const Slider = () => {
  return (
    <div>
    <Container>
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img class="d-block w-100"  src={countriesflag} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="d-block w-100"  src={garlandbanners} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="d-block w-100"  src={hokkaidocountry} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>

            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Slider