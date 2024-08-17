// src/components/loader/Loader.js

import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import "./loader.css"; // Import custom styles
import { Col, Container, Row } from "react-bootstrap";

function Loader() {
  return (
    <div className="loader-container">
      <Container>
        <Row>
          <Col>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          </Col>
          <Col>
            <Placeholder as="p" animation="wave">
              <Placeholder xs={12} />
            </Placeholder>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Loader;
