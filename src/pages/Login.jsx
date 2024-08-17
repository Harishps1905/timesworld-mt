import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Signin from "../components/signin/Signin";
import signinimg from "../assets/signinimg.png";
import { app } from "../firebase/firebase";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (user) return navigate("/");
  return (
    <section id="login">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Signin />
          </Col>
          <Col className="hide" md={6}>
            <aside id="si-rgtcont">
              <img id="si-img" src={signinimg} alt="" />
            </aside>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
