import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Signin from '../components/signin/Signin';
import signinimg from '../assets/signinimg.png';
import { app } from '../firebase/firebase';
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
            <img id='si-img'  src={signinimg} alt="" />
          </aside>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
