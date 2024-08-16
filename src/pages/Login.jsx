import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Signin from '../components/signin/Signin';
export const Login = () => {
  return (
    <section id='login'>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Signin/>
        </Col>
        <Col className='hide' md={6}>
          <aside id='si-rgtcont'>
            <img id='si-img'  src="src\assets\signinimg.png" alt="" />
          </aside>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
