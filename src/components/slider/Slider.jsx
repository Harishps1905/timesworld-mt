import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {
  return (
    <div>
    <Container>
        <Row>
            <Col>
                <Carousel>
                    <Carousel.Item>
                        <img class="d-block w-100"  src="src\components\slider\assets\countries-flag.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="d-block w-100"  src="src\components\slider\assets\garland-banners.webp" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="d-block w-100"  src="src\components\slider\assets\pngtree-winter-scenery-high-place-hokkaido-country-background-banner-hd-image_16003975.jpg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>

            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Slider