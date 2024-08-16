import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './welcome.css';

const Welcome = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} md={4} className="ml-auto">
                <div className='line'></div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="mx-auto d-flex justify-content-center">
                <div className='text-center title'>WELCOME</div>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4} className="mr-auto">
                <div className='line'></div>
            </Col>
        </Row>
    </Container>
  )
}

export default Welcome