import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './banner.css';

const Banner = ({bimage = "https://flagcdn.com/ax.svg"}) => {
  return (
    <section>
        <Container>
            <Row>
                <Col>
                    <div className='b-cont'>
                        <img className='bimage' src={bimage} alt="banner image" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Banner