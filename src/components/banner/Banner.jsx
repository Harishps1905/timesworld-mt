import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './banner.css';

const Banner = ({bimage = "https://flagcdn.com/ax.svg"}) => {
  return (
    <>
        <Col xs={12} md={{ order: 'last', span: 3 }}>
            <div className='b-cont'>
                <img className='bimage' src={bimage} alt="banner image" />
            </div>
        </Col>
    </>
  )
}
export default Banner