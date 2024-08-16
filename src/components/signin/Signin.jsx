import React, { useState } from "react";
import "./signin.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Icon from "../Icon";
import validatePassword from "../../utils/validatePassword";

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            alert("Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        // Implement your login logic here
        console.log("Logged in with password:", password);
    }


  return (
    <div id="signin">
        <h1 id="signin-head">Sign In</h1>
        <div id="si-cont-one">
            <span id="newuser">New user?</span><span id="reg-link">Create an account</span>
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
                                <img width={48} height={48} src="src\components\signin\assets\icons\google.png" alt="google" />
                            </Col>
                            <Icon img="src\components\signin\assets\icons\facebook.png" alt="facebook"/>
                            <Icon img="src\components\signin\assets\icons\linkedin.png" alt="linkedin"/>
                            <Icon img="src\components\signin\assets\icons\twitter.png" alt="twitter"/>
                            
                        </Row>
                    </Container>
                    
                </div>
            </div>
        </Form>
    </div>
  );
};

export default Signin;
