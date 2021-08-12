import React, {useState} from 'react'
import './landingPage.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Redirect, Link } from "react-router-dom";

const LandingPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (isLoggedIn ? (<Redirect
        to={{
            path: "/",
        }}
    />) :
        <Container fluid>
            <Row>
                <Col sm={9}>
                <Container>
                <img class="logo" src="https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg" />
                <h1>What is TutorSync?</h1>
                <p>TutorSync is a web based, online teaching platform for real time tutoring session. You could use TutorSync to find many kinds of tutors, teachers, coaches, and experts to help you accomplish your learning goals.</p>
                <p>TutorSync features real-time sketch pad that could be useful to enhance illustration and communication. On TutorSync, you could also schedule and manage your tutorial sessions easily.</p>
                </Container>
                </Col>
                

                
                <Col sm={3}>
                <Container className="loginFormWrapper">
                <Col>
                    
                    <br></br>
                    <h3>Sign In</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" />
                        <input type="text" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        
                    </Form.Group>

                    <Row className="justify-content-md-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Row> 
                    
                    <div className="signInText">Dont have an account yet? Sign up <Link to="/signUp">here!</Link></div>
                <br></br>
                </Col>
                
                </Container>
                </Col> 
            </Row>
                
               
        
        </Container>

    )
}

export default LandingPage
