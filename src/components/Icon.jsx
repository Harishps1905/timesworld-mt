import React from 'react'
import { Col } from 'react-bootstrap'

const Icon = ({img, alt}) => {
  return (
    <Col xs={3} md={3}>
        <img width={48} height={48} src={img} alt={alt} />
    </Col>
  )
}

export default Icon