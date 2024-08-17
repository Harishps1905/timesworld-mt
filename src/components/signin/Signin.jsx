import React, { useState } from "react";
import "./signin.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Icon from "../Icon";
import validatePassword from "../../utils/validatePassword";
import google from './assets/icons/google.png'
import facebook from './assets/icons/facebook.png'
import linkedin from './assets/icons/linkedin.png'
import twitter from './assets/icons/twitter.png'
import { userSignIn, userRegister } from "../../firebase/auth";
import Signup from "../signup/Signup";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            alert("Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        // Implement your login logic here
        let user = await userSignIn(username, password)
        console.log("Logged in with password:", user);
        
    navigate('/');
    }


  return (
    <>
    <div id="signin">
        <h1 id="signin-head">Sign In</h1>
        <div id="si-cont-one">
            <span id="newuser">New user?</span><span id="reg-link" onClick={() => setModalShow(true)} >Create an account</span>
        </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" className="ip-border" placeholder="Username or email" onChange={(e)=>setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" className="ip-border pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
            </Form.Group>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Keep me signed in"
            />

            <Button type="submit" size="lg"  className="w-100 si-button">
            Sign In
            </Button>
            <div id="sm-signin">
                <div id="sm-head" className="line-container">
                    <span className="line-text">Or Sign In With</span>
                </div>
                <div id="sm-icons">
                    <Container>
                        <Row>
                            <Col xs={3} md={3}>
                                <img width={48} height={48} src={google} alt="google" />
                            </Col>
                            <Icon img={facebook} alt="facebook"/>
                            <Icon img={linkedin} alt="linkedin"/>
                            <Icon img={twitter} alt="twitter"/>
                            
                        </Row>
                    </Container>
                    
                </div>
            </div>
        </Form>
    </div>
    <Signup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Signin;
