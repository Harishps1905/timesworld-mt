import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userRegister } from '../../firebase/auth';
import { useState } from 'react';
import '../signin/signin.css';
import validatePassword from '../../utils/validatePassword';
import { useNavigate } from 'react-router-dom';

function Signup(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            alert("Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        try {
          let user = await userRegister(username, password)
          console.log("Registered");
          navigate('/');
          
        } catch (error) {
          alert(error.message)
        }
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Sigh Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" className="ip-border" placeholder="Email" onChange={(e)=>setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" className="ip-border pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
            </Form.Group>

            <Button type="submit" size="lg"  className="w-100 si-button">
            Sign Up
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    );
  }

export default Signup;