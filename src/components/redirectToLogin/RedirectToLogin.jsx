import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RedirectToLogin = () => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Login to see all countries list</h1>
                <Link to='/login'>Login Here</Link>
            </Col>
        </Row>
        
    </Container>
  )
}

export default RedirectToLogin