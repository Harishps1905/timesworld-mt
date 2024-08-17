import React from 'react'
import google from '../../assets/icons/google.png'
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import { Col, Container, Row } from 'react-bootstrap'
import Icon from '../Icon'
import './footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
        <Container>
            <Row>
                <Col className='a-center'>
                    <div className="footer-cont">
                        <Icon img={facebook} alt="facebook"/>
                        <Icon img={twitter} alt="twitter"/>
                        <Icon img={linkedin} alt="linkedin"/>
                        <Icon img={google} alt="google"/>
                    </div>
                </Col>
                <Col xs={12}  className='a-center'>
                <p className='contact'><a href='mailto:Example@email.com' target='_blank'>Example@email.com</a></p>
                </Col>
                <Col xs={12} className='a-center'>
                <p className='copyright'>Copyright &copy; 2020 Name. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer